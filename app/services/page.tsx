export const metadata = {
  title: "事業内容",
  description: "TS Primeの事業内容のご紹介",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        事業内容
      </h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">教育事業</h2>
          <p className="mt-2 text-gray-700">
            エンジニア育成・デジタル人材育成に関する講座/教材/運営支援を提供しています。
          </p>
          <div className="mt-4">
            <a
              href="https://sc.alt-prime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              事業サイトへ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
