/** @type {import("prettier").Config} */
const config = {
  // 🔹 文末にセミコロンを付ける
  semi: true,

  // 🔹 シングルクォートを使用
  singleQuote: true,

  // 🔹 オブジェクトや配列、関数の引数の最後にもカンマを付ける
  // ESLintの「trailing comma」ルールと合わせる
  trailingComma: "all",

  // 🔹 1行あたりの最大文字数
  printWidth: 100,

  // 🔹 インデントはスペース2つ
  tabWidth: 2,
  useTabs: false,

  // 🔹 JSX内でもシングルクォートを使用
  jsxSingleQuote: false,

  // 🔹 オブジェクトの波括弧内にスペースを入れる { foo: bar }
  bracketSpacing: true,

  // 🔹 JSXの閉じタグを次の行に置かない
  bracketSameLine: false,

  // 🔹 短いアロー関数で括弧を常に付ける (x) => x
  arrowParens: "always",

  // 🔹 改行コードを LF に統一（WindowsでもLFを使う）
  endOfLine: "lf",

  // 🔹 Next.jsプロジェクト向けに自動検出
  plugins: [],
};

export default config;
