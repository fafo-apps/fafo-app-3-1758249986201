export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  cover?: string;
  content: string;
};

const posts: Post[] = [
  {
    slug: "ferrari-250-gt",
    title: "Restoring a Ferrari 250 GT: A Labor of Love",
    date: "1962-05-12",
    excerpt: "A behind-the-scenes look at bringing a classic 250 GT back to life.",
    cover: "https://images.unsplash.com/photo-1542367597-46d5d2fb0f9b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a2b6d1b3c3a2ee2a8f83f7c5e0b7a1a",
    content: "This is a short post about the challenges and joys of restoring a Ferrari 250 GT. It covers sourcing parts, bodywork, and the emotional payoff when the engine fires for the first time.",
  },
  {
    slug: "porsche-911-review",
    title: "2020 Porsche 911: Precision and Passion",
    date: "2020-08-21",
    excerpt: "A drive review of the 2020 Porsche 911 — balancing daily usability with track prowess.",
    cover: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7d4b3e1d6b7a9e3f6e8c1a9b5f2d8c3d",
    content: "Exploring the 2020 Porsche 911: feedback, handling, and what makes it such a benchmark for driving enthusiasts.",
  },
  {
    slug: "electric-vs-gas",
    title: "Electric vs Gas: The Future of Performance Cars",
    date: "2023-04-10",
    excerpt: "Can electric cars deliver the emotional experience of traditional combustion-engine sports cars?",
    cover: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f1b2e6b3a2d9d7c9f0a1b2c3d4e5f6a",
    content: "A discussion on torque delivery, sound, and the new engineering challenges that define what a 'performance car' will be in the coming decades.",
  }
];

export function getAllPosts(): Post[] {
  // return a shallow copy sorted by date descending
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
