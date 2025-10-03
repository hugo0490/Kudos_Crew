import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">KudosCrew — Explore Motorfest</h1>
      <p className="mt-4">Prototype alpha — connecte ton garage, partage ta collection.</p>
      <div className="mt-6">
        <Link href="/garage"><a className="btn">Mon garage</a></Link>
      </div>
    </main>
  )
}