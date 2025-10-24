import Image from 'next/image';

import Footer from '@/components/footer';

export const metadata = {
  title: '対応可能な技術スタック | TS Prime',
  description:
    'TS Primeが対応可能な技術スタック一覧。JavaScript、TypeScript、Python、Next.js、Nest.js、FastAPI、Firestore、DynamoDB、GitHub、Figmaなど幅広い技術に対応しています。',
};

type TechItem = {
  name: string;
  icon: string;
  color?: string;
  localIcon?: boolean; // ローカルアイコンを使用する場合はtrue
};

type TechCategory = {
  title: string;
  description: string;
  items: TechItem[];
};

const techStack: TechCategory[] = [
  {
    title: '言語',
    description: '多様な言語に対応し、プロジェクトに最適な技術選定を行います',
    items: [
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'Java', icon: 'openjdk', color: '#007396' },
      { name: 'Kotlin', icon: 'kotlin', color: '#7F52FF' },
      { name: 'Swift', icon: 'swift', color: '#F05138' },
    ],
  },
  {
    title: 'フロントエンド',
    description: 'モダンなフロントエンド技術で高品質なUIを実現',
    items: [{ name: 'Next.js', icon: 'nextdotjs', color: '#000000' }],
  },
  {
    title: 'バックエンド',
    description: 'スケーラブルで保守性の高いバックエンドシステムを構築',
    items: [
      { name: 'Nest.js', icon: 'nestjs', color: '#E0234E' },
      { name: 'Express.js', icon: 'express', color: '#000000' },
      { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
    ],
  },
  {
    title: 'データベース',
    description: 'プロジェクトの要件に応じた最適なデータベースを選定',
    items: [
      { name: 'DynamoDB', icon: 'dynamodb', localIcon: true },
      { name: 'Azure Storage', icon: 'azure', localIcon: true },
      { name: 'Firestore', icon: 'firebase', color: '#FFCA28' },
      { name: 'MongoDB', icon: 'mongodb', localIcon: true },
    ],
  },
  {
    title: 'ツール',
    description: '効率的な開発・コミュニケーションを実現するツール群',
    items: [
      { name: 'Slack', icon: 'slack', color: '#4A154B' },
      { name: 'Notion', icon: 'notion', color: '#000000' },
      { name: 'Miro', icon: 'miro', color: '#050038' },
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
      { name: 'GitHub', icon: 'github', color: '#181717' },
      { name: 'GitLab', icon: 'gitlab', color: '#FC6D26' },
      { name: 'Gitea', icon: 'gitea', color: '#609926' },
    ],
  },
];

function TechCard({ item }: { item: TechItem }) {
  const iconSrc = item.localIcon
    ? `/icons/${item.icon}.svg`
    : `https://cdn.simpleicons.org/${item.icon}/${item.color?.replace('#', '') || '000000'}`;

  return (
    <div className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
      <div className="relative h-16 w-16 mb-4">
        <Image
          fill
          unoptimized
          alt={`${item.name} logo`}
          className="object-contain"
          src={iconSrc}
        />
      </div>
      <h3 className="text-center text-sm font-semibold text-gray-900 group-hover:text-black">
        {item.name}
      </h3>
    </div>
  );
}

function TechSection({ category }: { category: TechCategory }) {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {category.title}
        </h2>
        <p className="mt-2 text-gray-600">{category.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {category.items.map((item) => (
          <TechCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function TechStackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              対応可能な技術スタック
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              幅広い技術スタックに対応し、プロジェクトの要件に応じて最適な技術選定を行います。
              フロントエンドからバックエンド、データベース、各種ツールまで、モダンな技術を駆使して高品質なシステムを構築します。
            </p>
            <div className="mt-8">
              <a
                className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                href="/contact"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
            {techStack.map((category, index) => (
              <div key={category.title}>
                <TechSection category={category} />
                {index < techStack.length - 1 && <hr className="my-8 border-gray-200" />}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="rounded-2xl bg-black px-6 py-10 sm:px-10 sm:py-14 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                技術選定からお手伝いします
              </h2>
              <p className="mt-3 max-w-3xl mx-auto text-gray-300">
                プロジェクトの要件や規模に応じて、最適な技術スタックをご提案します。
                まずはお気軽にご相談ください。
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                  href="/contact"
                >
                  無料相談はこちら
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
