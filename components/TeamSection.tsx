const team = [
  { name: "Lamin Drammeh", role: "Founder & CEO", initials: "LD",img:"/dk-founder1.webp" },
  { name: "Lamin AK Jammeh", role: "Commercial Director", initials: "LJ", img:"/dk-founder2.webp" },
  { name: "Ya Ida Drammeh", role: "HR and Legal Manager", initials: "YD", img:"/dk-founder3.webp" },
  { name: "Alagie Mboob", role: "", initials: "NM", img:"/dk-founder4.webp" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Leadership
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand leading-tight tracking-tight mb-4">
            Meet the Management Team
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
            Our staff are highly experienced and driven by a passion for excellence — committed to delivering the best for Gambia&apos;s digital future.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white  rounded-2xl p-7 text-center transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div style={{backgroundImage:`url(${member.img})`}} className=" w-16 h-16 bg-contain bg-brand-light rounded-full mx-auto flex items-center justify-center">
               
              </div>
              <p className="font-display font-bold text-sm text-navy mb-1">
                {member.name}
              </p>
              <p className="text-xs text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
