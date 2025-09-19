import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen p-6 sm:p-12 font-sans mx-auto max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold">All Posts</h1>
        <p className="mt-2 text-gray-600">Browse our car stories and reviews.</p>
      </header>

      <main className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/posts/${post.slug}`} className="block sm:flex">
              {post.cover && (
                <div className="sm:w-1/3 w-full h-48 sm:h-auto overflow-hidden">
                  <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="p-4 sm:flex-1">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                <p className="mt-3 text-gray-700">{post.excerpt}</p>
                <p className="mt-4 text-sm text-blue-600">Read more →</p>
              </div>
            </Link>
          </article>
        ))}
      </main>
    </div>
  );
}
