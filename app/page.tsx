import Footer from "@/components/footer";

export const metadata = {
  title: "福岡の複業人材で高品質なAI開発 | DX・BPO・アプリ/WEB受託",
  description:
    "福岡拠点の複業人材チームが、DX/BPOコンサルからAIアプリ・モバイル・WEB開発、Salesforce運用・自動化、クラウド構築まで一気通貫で支援。実績: Kaika、学習塾予約管理、動画学習プラットフォームなど。",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              複業人材で高品質な AIアプリ開発を実現
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              幅広い分野とITシステムに対応した開発を、精鋭の複業エンジニア・デザイナー・PMがチームで支援します。
              要件定義から運用・自動化まで、貴社の事業成長に直結する成果をコミットします。
            </p>
            <div className="mt-8">
              <a
                className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                href="/contact"
              >
                まずは相談する（無料）
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              私たちについて
            </h2>
            <p className="mt-4 max-w-4xl text-gray-700 leading-7">
              私たちは、福岡を中心とした優秀な複業人材を活用し、ビジネスとテクノロジーの両面から課題解決に取り組む開発パートナーです。
              業務システムからコンシューマー向けサービスまで、要件に応じて最適な体制と技術選定でスピーディに実装します。
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              選ばれる理由
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  格安×高品質のAI開発
                </h3>
                <p className="mt-2 text-gray-700">
                  複業/複業の精鋭メンバーにより、コストを抑えつつ成果品質を担保。短サイクルで価値検証と改善を回します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  DX・BPOコンサルと受託の一体運営
                </h3>
                <p className="mt-2 text-gray-700">
                  DX/BPOの上流コンサルから、システム開発・運用まで一気通貫で伴走。戦略と実装が乖離しません。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  優秀な複業人材と圧倒的なPM力を武器に、安定したプロダクト輩出力を確保
                </h3>
                <p className="mt-2 text-gray-700">
                  複業エンジニア×専任PMの体制で、要件定義から実装・QA・運用まで一気通貫。期日と品質を両立し、継続的なリリースを実現します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              提供サービス
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  DX推進支援
                </h3>
                <p className="mt-2 text-gray-700">
                  業務可視化・要件定義から、業務システム刷新、SaaS活用、データ連携/自動化まで一気通貫で伴走します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  BPO（業務委託・運用代行）
                </h3>
                <p className="mt-2 text-gray-700">
                  システム運用・保守、データ整備、コンテンツ運用などを標準化し、継続的な効率化と品質向上を実現します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  モバイルアプリ開発
                </h3>
                <p className="mt-2 text-gray-700">
                  iOS/Android
                  のクロスプラットフォーム開発により、迅速なリリースと継続的改善を両立します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  WEBサービス開発
                </h3>
                <p className="mt-2 text-gray-700">
                  新規サービスの立ち上げから既存改善まで、UI/UX、API、クラウドまでフルスタックで対応します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              実績・事例
            </h2>
            <ul className="mt-6 space-y-4 text-gray-800">
              <li className="rounded-lg border border-gray-200 bg-white p-6">
                <span className="font-semibold">
                  動画学習プラットフォームの構築・運用
                </span>
                <p className="mt-2 text-gray-700">
                  コンテンツ配信、受講管理、学習分析を備えたSaaS型プラットフォームを構築。
                </p>
              </li>
              <li className="rounded-lg border border-gray-200 bg-white p-6">
                <span className="font-semibold">
                  個別指導学習塾における予約管理システム
                </span>
                <p className="mt-2 text-gray-700">
                  教室運営の効率化と顧客体験向上を両立する予約・決済・通知の一元化。
                </p>
              </li>
              <li className="rounded-lg border border-gray-200 bg-white p-6">
                <span className="font-semibold">クラウド環境構築支援</span>
                <p className="mt-2 text-gray-700">
                  セキュリティ・コスト・可用性を考慮したクラウド設計とIaCによる再現性の高い運用。
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Representative */}
        {/* <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              代表プロフィール
            </h2>
            <div className="mt-6 rounded-lg border border-gray-200 p-6 bg-white">
              <div className="grid gap-6 sm:grid-cols-3 sm:items-start">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder-user.jpg"
                    alt="代表の顔写真"
                    className="h-40 w-40 rounded-full object-cover ring-1 ring-gray-200"
                  />
                </div>
                <div className="sm:col-span-2">
                  <p className="text-gray-700 leading-7">
                    九州大学工学部を卒業後、プログラミングスクール事業の立ち上げに携わる。その後、国内の総合コンサルティングファームにてDXコンサルタントとして
                    企業の業務改革・システム刷新を支援。現在はプロジェクト全体の品質と技術選定をリードし、ビジネス要件を満たす現実解への落とし込みを重視しています。
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700">
                    <li>学歴: 九州大学 工学部 卒</li>
                    <li>
                      職歴: プログラミングスクール事業の立ち上げ →
                      国内総合コンサルでDXコンサルタント
                    </li>
                    <li>
                      役割: 技術/品質の最終レビュー、スコープ定義、進行管理
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        <section id="contact">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="rounded-2xl bg-black px-6 py-10 sm:px-10 sm:py-14">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                ご相談・お見積りはお気軽に
              </h2>
              <p className="mt-3 max-w-3xl text-gray-300">
                現状の課題や実現したいことをお聞かせください。最適な体制と進め方をご提案します。
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                  href="/contact"
                  target="_blank"
                >
                  メールで問い合わせる
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
