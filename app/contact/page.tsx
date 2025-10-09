"use client";

import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Input, Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ContactFormValues = {
  company?: string;
  name: string;
  email: string;
  phone?: string;
  inquiry: string;
  agree: boolean;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const [loading, setLoading] = useState(false);

  const sendMail = async (formData: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact/sendMain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      addToast({
        title:
          res.status === 200
            ? "お問い合わせを送信しました。"
            : "メールの送信に失敗しました。",
        color: res.status === 200 ? "success" : "danger",
      });
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      addToast({
        title: "送信に失敗しました。再度お試しください。",
        color: "danger",
      });
    }
    setLoading(false);
  };

  const onSubmit: SubmitHandler<ContactFormValues> = async (formData) => {
    setLoading(true);
    await sendMail(formData);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      {/* --- ヘッダー・ロゴ --- */}
      <div className="mb-8 text-center">
        <p
          className="
              text-3xl font-bold font-kay
              bg-[linear-gradient(#00EFC1,#00C8CB)]
              bg-clip-text text-transparent
            "
        >
          TS Prime
        </p>
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          お問い合わせフォーム
        </h1>
        <p className="mt-2 text-gray-600">
          ご質問・ご相談・お見積りなど、お気軽にお問い合わせください。
        </p>
      </div>

      {/* --- フォーム --- */}
      <form
        className="w-full max-w-lg bg-white rounded-xl shadow p-8 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 会社名 */}
        <div>
          <label className="block font-medium text-gray-700" htmlFor="company">
            会社名（任意）
          </label>
          <Input
            id="company"
            placeholder="例：TS Prime株式会社"
            type="text"
            {...register("company")}
            className="mt-1"
            variant="flat"
          />
        </div>

        {/* お名前 */}
        <div>
          <label className="block font-medium text-gray-700" htmlFor="name">
            お名前（必須）
          </label>
          <Input
            id="name"
            placeholder="例：山田 太郎"
            type="text"
            {...register("name", { required: "お名前は必須です" })}
            className="mt-1"
            variant="flat"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block font-medium text-gray-700" htmlFor="email">
            メールアドレス（必須）
          </label>
          <Input
            id="email"
            placeholder="例：info@example.com"
            type="email"
            {...register("email", { required: "メールアドレスは必須です" })}
            className="mt-1"
            variant="flat"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block font-medium text-gray-700" htmlFor="phone">
            電話番号（任意）
          </label>
          <Input
            id="phone"
            placeholder="例：090-1234-5678"
            type="tel"
            {...register("phone")}
            className="mt-1"
            variant="flat"
          />
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label className="block font-medium text-gray-700" htmlFor="inquiry">
            お問い合わせ内容（必須）
          </label>
          <Textarea
            id="inquiry"
            placeholder="お問い合わせ内容をご入力ください。"
            rows={5}
            {...register("inquiry", {
              required: "お問い合わせ内容は必須です",
            })}
            className="mt-1"
            variant="flat"
          />
          {errors.inquiry && (
            <p className="text-sm text-red-500 mt-1">
              {errors.inquiry.message}
            </p>
          )}
        </div>

        {/* 同意 */}
        <div className="bg-gray-50 border rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            個人情報は、お問い合わせ対応以外の目的には使用いたしません。
          </p>
          <div className="flex items-center">
            <Checkbox
              id="agree"
              {...register("agree", { required: "内容に同意してください" })}
              classNames={{
                base: "text-sm text-gray-700",
                wrapper: "border-2 rounded-lg border-gray-300",
              }}
            >
              上記内容に同意します
            </Checkbox>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-500 mt-1">{errors.agree.message}</p>
          )}
        </div>

        <Button
          className="w-full font-bold"
          color="primary"
          isLoading={loading}
          type="submit"
        >
          送信する
        </Button>
      </form>
    </div>
  );
}
