const partners = [
  {name:"Brussels Airlines", img:"/dk-partner3.webp"},
  {name:"EFSTH", img:"/dk-partner2.webp"},
  {name:"Turkish Airlines", img:"/dk-partner4.webp"},
  {name:"SoS Child's Village", img:"/dk-partner1.webp"},
];

export default function Partners() {
  return (
    <section className="bg-gray-50 border-b border-black/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold whitespace-nowrap">
          In partnership with
        </p>
        <div className="flex flex-wrap items-center gap-10">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-4">
              <img src={p.img} alt={p.name} className="h-16 object-contain" />
              {/* <span className="text-sm text-gray-500">{p.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
