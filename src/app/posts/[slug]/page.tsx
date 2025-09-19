import React from "react";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-6 sm:p-12 font-sans mx-auto max-w-3xl">
      <article>
        <header className="mb-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
        </header>

        {post.cover && (
          <div className="mb-6">
            <img src={post.cover} alt={post.title} className="w-full h-64 object-cover rounded" />
          </div>
        )}

        <div className="prose dark:prose-invert text-gray-800 dark:text-gray-200">
          <p>{post.content}</p>
        </div>

        <div className="mt-8">
          <a href="/posts" className="text-blue-600 text-sm">← Back to posts</a>
        </div>
      </article>
    </div>
  );
}
