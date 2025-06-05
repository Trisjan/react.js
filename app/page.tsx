import Link from 'next/link';

export const metadata = {
  title: 'Mijn blog',
  description: 'Welkom op mijn persoonlijke blog over webontwikkeling.',
};

export default function Home() {
  return (
    <main>
      <h1>Welkom op mijn blog</h1>
      <p>
        <Link href="/blog">Ga naar de blogpagina</Link>
      </p>
    </main>
  );
}
