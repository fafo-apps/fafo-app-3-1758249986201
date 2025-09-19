import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen p-6 sm:p-12 mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4">We could not find the article you were looking for.</p>
        <p className="mt-6">
          <Link href="/">← Back to home</Link>
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6 sm:p-12 mx-auto max-w-4xl">
      <article>
        {post.cover && (
          <div className="mb-6 overflow-hidden rounded-lg">
            <img src={post.cover} alt={post.title} className="w-full h-64 object-cover" />
          </div>
        )}

        <header className="mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
        </header>

        <div className="prose max-w-none text-gray-800 dark:text-gray-200">
          <p>{post.content}</p>
        </div>

        <footer className="mt-8">
          <Link href="/">← Back to home</Link>
        </footer>
      </article>
    </main>
  );
}
