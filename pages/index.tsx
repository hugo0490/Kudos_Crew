import Link from 'next/link'
export default function Home(){return (
  <main style={{padding:24}}>
    <h1 style={{color:'#fff'}}>KudosCrew Prototype</h1>
    <p style={{color:'#9aa0a6'}}>Prototype KudosPrime-like cars listing for The Crew Motorfest.</p>
    <div style={{marginTop:12}}><Link href='/cars'><a className="page-btn">Voir les voitures</a></Link></div>
  </main>
)}
