import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Promptlings",
  description:
    "Insights on AI literacy, education, and raising the next generation of AI creators.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // Mission Log
          </div>
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blog
            </span>
          </h1>
          <p className="text-white-dim text-lg max-w-[600px] mx-auto leading-relaxed">
            Dispatches from the frontier of AI education. Tips for parents,
            insights for educators, and updates from the Promptlings crew.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 relative z-2">
        <div className="max-w-[900px] mx-auto px-6">
          {posts.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <div className="text-4xl mb-4">🚧</div>
              <p className="text-white-dim text-lg">
                Blog posts coming soon. Check back after launch!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block no-underline group"
                >
                  <article className="glass-card p-8 hover:-translate-y-1 transition-all duration-300 group-hover:border-violet/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[0.65rem] font-medium tracking-wider uppercase bg-violet/15 text-violet-glow"
                          style={{
                            fontFamily:
                              "var(--font-jetbrains-mono), monospace",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2
                      className="text-cosmic-white text-xl font-bold mb-2 group-hover:text-violet-glow transition-colors"
                      style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-white-dim text-base leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white-dim/70">
                      <span>{post.author}</span>
                      <span>·</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
