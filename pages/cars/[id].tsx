import { GetStaticPaths, GetStaticProps } from 'next'
import cars from '../../data/cars.json'
export const getStaticPaths:GetStaticPaths = async ()=>{
  const paths = cars.map((c:any)=>({params:{id: String(c.id)}}))
  return { paths, fallback:false }
}
export const getStaticProps:GetStaticProps = async (ctx)=>{
  const id = Number(ctx.params?.id)
  const car = cars.find((c:any)=>c.id===id) || null
  return { props: { car } }
}
export default function CarPage({ car }: any){
  if(!car) return <div>Not found</div>
  return (
    <div style={{padding:18,color:'#e6eef6',background:'#111',minHeight:'100vh'}}>
      <a href="/cars" style={{color:'#9aa0a6'}}>&larr; Retour</a>
      <h1 style={{marginTop:12}}>{car.year} {car.brand} {car.model}</h1>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <div style={{width:320,height:200,background:'#040404',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={car.image} alt={car.model} style={{maxWidth:'100%',maxHeight:'100%',borderRadius:8}}/>
        </div>
        <div style={{flex:1}}>
          <p style={{color:'#9aa0a6'}}>{car.division} • {car.rarity} • {car.transmission}</p>
          <p style={{marginTop:6}}>Source: {car.source}</p>
          <h3 style={{marginTop:12}}>Stats</h3>
          <ul>
            {Object.entries(car.stats).map(([k,v])=> (<li key={k}><strong>{k}</strong>: {String(v)}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}
