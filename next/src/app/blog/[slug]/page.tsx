import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXContent } from "./mdx-content";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post)
    return {
      title: "Post Not Found — Promptlings",
    };

  return {
    title: `${post.title} — Promptlings Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-32 pb-20 relative z-2">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-violet-glow text-sm hover:text-cosmic-white transition-colors no-underline inline-flex items-center gap-2 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <article>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[0.65rem] font-medium tracking-wider uppercase bg-violet/15 text-violet-glow"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight mb-4"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white-dim mb-10">
            <span className="font-medium">{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* MDX Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-white-dim prose-p:leading-relaxed prose-strong:text-cosmic-white prose-a:text-violet-glow prose-a:no-underline hover:prose-a:text-cosmic-white prose-li:text-white-dim prose-em:text-white-dim/80 prose-hr:border-glass-border prose-blockquote:border-violet/30 prose-blockquote:text-white-dim/80">
            <MDXContent source={post.content} />
          </div>
        </article>
      </div>
    </section>
  );
}
