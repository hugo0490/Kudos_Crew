import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Garage() {
  const { data, error } = useSWR('/api/user/1/garage', fetcher)
  if (error) return <div>Erreur</div>
  if (!data) return <div>Chargement...</div>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Mon garage</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.cars.map((c: any) => (
          <div key={c.id} className="border rounded p-3">
            <img src={c.image || '/placeholder.png'} alt="car" className="w-full h-40 object-cover" />
            <h3 className="mt-2 font-medium">{c.brand} {c.model}</h3>
            <p className="text-sm">{c.category} • {c.rarity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}