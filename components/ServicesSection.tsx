const services = [
  {
    icon: "🏠",
    title: "Home Internet",
    desc: "Fast, reliable broadband for your household. Stream, game, and work from home without interruption.",
  },
  {
    icon: "🏢",
    title: "Business Broadband",
    desc: "Dedicated enterprise plans with guaranteed uptime, static IPs, and priority technical support.",
  },
  {
    icon: "📱",
    title: "Mobile Data",
    desc: "Stay connected on the go with our 4G and 5G mobile broadband packages across Gambia.",
  },
  {
    icon: "📡",
    title: "Fiber Optic",
    desc: "Ultra-fast fiber optic internet for residential and commercial clients who need the very best.",
  },
  {
    icon: "🔒",
    title: "Secure Hosting",
    desc: "Reliable web hosting and server solutions for businesses building their digital presence.",
  },
  {
    icon: "🌍",
    title: "International Roaming",
    desc: "Stay connected abroad with competitive international data and calling rates.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Services
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand leading-tight tracking-tight mb-4">
            Everything You Need,{" "}
            <br className="hidden lg:block" />
            All in One Place
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            From home broadband to enterprise solutions, DK Telecom has the right connectivity product for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-2xl p-8 transition-all duration-200 hover:bg-brand-light hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
