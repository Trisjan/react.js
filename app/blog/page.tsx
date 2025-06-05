import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function BlogPage() {
  return (
    <main>
      <h1>Blogoverzicht</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
