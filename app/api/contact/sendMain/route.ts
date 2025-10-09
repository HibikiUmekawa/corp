import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

/**
 * POST /api/contact/sendMail
 * コーポレートサイトの「お問い合わせフォーム」送信処理
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // --- バリデーション ---
    if (!data.email || !data.name || !data.inquiry) {
      return NextResponse.json(
        { success: false, message: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    // --- Nodemailer トランスポーター設定（Gmail 使用）---
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
    });

    // --- 管理者 & 送信者への通知メール ---
    const mailData: Options = {
      from: process.env.MAIL_SENDER,
      to: `${data.email}, ${process.env.MAIL_SENDER}`, // 送信者＋管理者
      subject: `【TS Prime株式会社】${data.name}様からのお問い合わせ`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>TS Prime株式会社 お問い合わせ内容</h2>
          <p>以下の内容でお問い合わせを受け付けました。</p>

          <h3>■ お名前</h3>
          <p>${data.name}</p>

          ${data.company ? `<h3>■ 会社名</h3><p>${data.company}</p>` : ""}

          <h3>■ メールアドレス</h3>
          <p>${data.email}</p>

          ${data.phone ? `<h3>■ 電話番号</h3><p>${data.phone}</p>` : ""}

          <h3>■ お問い合わせ内容</h3>
          <p style="white-space: pre-wrap;">${data.inquiry}</p>

          <hr/>
          <p>このメールはTS Prime株式会社のWebサイトから自動送信されています。</p>
          <p>担当者より折り返しご連絡いたします。今しばらくお待ちください。</p>
        </div>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { success: true, message: "お問い合わせを送信しました。" },
      { status: 200 }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("メール送信エラー:", error);

    return NextResponse.json(
      { success: false, message: "メール送信に失敗しました。" },
      { status: 500 }
    );
  }
}
