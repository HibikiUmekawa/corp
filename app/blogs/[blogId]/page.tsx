import fs from 'fs/promises';
import path from 'path';

import clsx from 'clsx';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export const runtime = 'nodejs';

interface PageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { blogId } = await params;

  const mdPath = path.join(process.cwd(), 'public', 'blogs', 'posts', `${blogId}.md`);

  let fileRaw: string;

  try {
    fileRaw = await fs.readFile(mdPath, 'utf-8');
  } catch {
    return notFound();
  }

  const { content, data } = matter(fileRaw);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const html = processed.toString();
  const title = (data as any)?.title ?? blogId.replace(/-/g, ' ');
  const date = (data as any)?.date as string | undefined;
  const description = (data as any)?.description as string | undefined;
  const tags = (data as any)?.tags as string[] | undefined;

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link className="hover:underline" href="/blogs">
            ブログ一覧
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{title}</span>
        </nav>

        <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <Image
            alt={title}
            className="h-auto w-full object-cover"
            height={630}
            src={`/blogs/images/${blogId}.png`}
            width={1200}
          />
        </div>

        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          {date && (
            <time className="mt-2 block text-sm text-gray-500">
              {new Date(date).toLocaleDateString('ja-JP')}
            </time>
          )}
          {description && <p className="mt-3 text-gray-700">{description}</p>}
          {Array.isArray(tags) && tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                >
                  #{t}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={clsx(
            'prose prose-lg prose-neutral max-w-none',
            // 見出しスタイル
            'prose-headings:font-bold prose-headings:tracking-tight',
            'prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8',
            'prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2',
            'prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-5',
            'prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4',
            // 段落・テキスト
            'prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4',
            'prose-strong:text-gray-900 prose-strong:font-semibold',
            // リンク
            'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium',
            // リスト
            'prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6',
            'prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6',
            'prose-li:text-gray-700 prose-li:my-1',
            // コードブロック
            'prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-4',
            'prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono',
            'prose-pre:prose-code:bg-transparent prose-pre:prose-code:text-gray-100 prose-pre:prose-code:p-0',
            // 引用
            'prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600',
            // テーブル
            'prose-table:w-full prose-table:my-4',
            'prose-thead:bg-gray-50 prose-thead:border-b prose-thead:border-gray-200',
            'prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold',
            'prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-gray-200',
            // 画像
            'prose-img:rounded-lg prose-img:shadow-md prose-img:my-6',
            // 水平線
            'prose-hr:my-8 prose-hr:border-gray-300',
          )}
        />
      </div>
    </article>
  );
}
