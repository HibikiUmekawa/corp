import clsx from "clsx";
import fs from "fs/promises";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export const runtime = "nodejs";

interface PageProps {
  params: { blogId: string };
}

export default async function BlogPage({ params }: PageProps) {
  const { blogId } = params;

  const mdPath = path.join(
    process.cwd(),
    "public",
    "blogs",
    "posts",
    `${blogId}.md`
  );

  let fileRaw: string;
  try {
    fileRaw = await fs.readFile(mdPath, "utf-8");
  } catch {
    return notFound();
  }

  const { content, data } = matter(fileRaw);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const html = processed.toString();
  const title = (data as any)?.title ?? blogId.replace(/-/g, " ");
  const date = (data as any)?.date as string | undefined;
  const description = (data as any)?.description as string | undefined;
  const tags = (data as any)?.tags as string[] | undefined;

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/blogs" className="hover:underline">
            ブログ一覧
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{title}</span>
        </nav>

        <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <Image
            src={`/blogs/images/${blogId}.png`}
            alt={title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
          />
        </div>

        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          {date && (
            <time className="mt-2 block text-sm text-gray-500">
              {new Date(date).toLocaleDateString("ja-JP")}
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
          className={clsx(
            "prose prose-neutral max-w-none",
            "prose-headings:scroll-mt-20",
            "prose-img:rounded-md prose-img:shadow",
            "prose-a:text-blue-600 hover:prose-a:underline"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  );
}
