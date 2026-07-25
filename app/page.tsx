import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>JaupHub</h1>
      <p>Choose a workspace to explore.</p>
      <nav>
        <Link href="/command-center">Command Center</Link>
        <Link href="/drive">Drive</Link>
        <Link href="/office-agent">Office Agent</Link>
        <Link href="/swarm">Swarm</Link>
        <Link href="/security">Security</Link>
      </nav>
    </main>
  );
}
