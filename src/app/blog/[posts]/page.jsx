import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { POSTS, getUserById } from "../../lib/posts";

export function generateStaticParams() {
  // يرجع slugs لكن بمفتاح اسمه posts عشان يطابق [posts]
  return POSTS.map((p) => ({ posts: p.slug }));
}

export const dynamic = "force-static";

export default function PostPage({ params }) {
  const { posts } = params; // اسم البارامتر = اسم المجلد [posts]
  const post = POSTS.find((p) => p.slug === posts);

  if (!post) return notFound();

  const author = getUserById(post.authorId);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 lg:px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-slate-500 mb-6">
            By {author?.name} • {post.date}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl mb-6 w-full aspect-video object-cover"
          />
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}