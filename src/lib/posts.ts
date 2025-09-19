export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  cover?: string;
  content: string;
};

const POSTS: Post[] = [
  {
    slug: "ferrari-488",
    title: "Ferrari 488 — Thrill of the V8",
    date: "2024-06-01",
    excerpt: "A look at the Ferrari 488: performance, handling, and design cues that keep it a modern classic.",
    cover: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    content: `The Ferrari 488 continues the marque's tradition of combining ferocious performance with exquisite design. Under the hood sits a twin-turbocharged V8 that delivers explosive acceleration, while the chassis and aerodynamics keep the car composed through fast corners.

In this article we examine what makes the 488 special: the engineering details, driving character, and where it fits in a rapidly evolving sports car market.`
  },
  {
    slug: "porsche-911-gt3",
    title: "Porsche 911 GT3 — Precision and Purity",
    date: "2023-10-15",
    excerpt: "Why the 911 GT3 remains the benchmark for track-focused road cars.",
    cover: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1200&q=80",
    content: `The GT3 takes everything pure about the 911 and sharpens it. Naturally aspirated engines, razor-sharp steering, and a chassis tuned for the limit. We explore the lineage and the engineering choices that keep the GT3 at the top.`
  }
];

export function getAllPosts(): Post[] {
  // Return a shallow copy sorted by date desc
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
