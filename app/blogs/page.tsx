import fs from "fs/promises";
import path from "path";

import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export const runtime = "nodejs";

interface BlogListItem {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  imageSrc: string;
}

async function getPosts(): Promise<BlogListItem[]> {
  const postsDir = path.join(process.cwd(), "public", "blogs", "posts");
  const imagesDir = path.join(process.cwd(), "public", "blogs", "images");
  const files = await fs.readdir(postsDir);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  // Build a case-insensitive map of available images: basename(lowercased) -> actual filename
  let imageMap: Record<string, string> = {};

  try {
    const imageFiles = await fs.readdir(imagesDir);

    for (const f of imageFiles) {
      const base = path.parse(f).name.toLowerCase();

      imageMap[base] = f;
    }
  } catch {
    imageMap = {};
  }

  const items: BlogListItem[] = [];

  for (const file of mdFiles) {
    const slug = file.replace(/\.md$/, "");
    const raw = await fs.readFile(path.join(postsDir, file), "utf-8");
    const { content, data } = matter(raw);
    const body = typeof content === "string" ? content : "";
    const blocks = body.trim().split(/\n\n+/);
    const firstBlock = blocks.at(0) ?? body.trim();
    const firstParagraph = firstBlock.replace(/[#>*_`\-]/g, "").slice(0, 140);
    const imageFile = imageMap[slug.toLowerCase()];
    const imageSrc = imageFile
      ? `/blogs/images/${imageFile}`
      : "/placeholder.jpg";

    items.push({
      slug,
      title: (data as any)?.title || slug.replace(/-/g, " "),
      date: (data as any)?.date,
      excerpt: firstParagraph,
      imageSrc,
    });
  }

  items.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (a.date) return -1;
    if (b.date) return 1;

    return a.slug.localeCompare(b.slug);
  });

  return items;
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        ブログ一覧
      </h1>
      <p className="mt-2 text-gray-600">最新の記事から順に表示します。</p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <div className="mb-4">
              <Image
                alt={post.title}
                className="h-auto w-full rounded-md object-cover"
                height={360}
                src={post.imageSrc}
                width={640}
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.date && (
              <time className="mt-1 block text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("ja-JP")}
              </time>
            )}
            {post.excerpt && (
              <p className="mt-3 line-clamp-3 text-gray-700">{post.excerpt}</p>
            )}
            <div className="mt-4">
              <Link
                className="text-sm font-medium text-black hover:underline"
                href={`/blogs/${post.slug}`}
              >
                記事を読む →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
