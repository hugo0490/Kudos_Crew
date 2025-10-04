import { GetStaticProps } from 'next'
import Link from 'next/link'
import cars from '../../data/cars.json'

export const getStaticProps:GetStaticProps = async ()=>{
  return { props: { cars } }
}

export default function CarsPage({ cars }: any){
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo"><div className="k">K'</div><div><strong style={{color:'#fff'}}>KUDOSCREW</strong><br/><small style={{color:'#9aa0a6'}}>hugo04</small></div></div>
        <div className="controls">
          <h3>SEARCH</h3>
          <input className="search" placeholder="Chercher une voiture..." />
          <h3>FILTERS</h3>
          <select className="select"><option>-- Marque --</option></select>
          <select className="select"><option>-- Division --</option></select>
          <h3>SOURCE</h3>
          <select className="select"><option>Toutes voitures</option></select>
        </div>
      </aside>
      <main className="main">
        <div className="header"><h1>Voitures FH5</h1></div>
        <div className="instructions">
          Voici la base de données voitures. Cliquez sur une voiture pour voir sa fiche.
        </div>
        <div className="cards">
          {cars.map((c:any)=> (
            <div key={c.id} className="card">
              <div className="thumb"><img src={c.image} alt={c.model} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:6}}/></div>
              <div className="info">
                <div className="title"><Link href={`/cars/${c.id}`}><a>{c.year} {c.brand} {c.model}</a></Link></div>
                <div className="meta">{c.division} • {c.source}</div>
              </div>
              <div className="price">{c.price.toLocaleString()} Cr</div>
            </div>
          ))}
        </div>
        <div className="pagination"><button className="page-btn">1</button><button className="page-btn">2</button><div style={{color:'#9aa0a6'}}>next &gt;&gt;</div></div>
      </main>
    </div>
  )
}
