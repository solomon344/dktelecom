import Carousel from "./Carousel";

const points = [
  {
    icon: "🚀",
    title: "Cutting-edge Technology",
    desc: "We deploy the latest fiber optic and 4G/5G infrastructure to deliver the fastest, most reliable connections in Gambia.",
  },
  {
    icon: "🤝",
    title: "Dedicated Customer Care",
    desc: "Our team is available around the clock to support your digital journey, from setup to troubleshooting.",
  },
  {
    icon: "🌍",
    title: "Nationwide Coverage",
    desc: "With over 27 cities served and 20,000+ satisfied clients, DK Telecom is Gambia's most trusted ISP.",
  },
];

const images = [
  '/dk-img1.webp',
  '/dk-img2.webp',
  '/dk-img3.webp',
  '/dk-img4.webp',
  '/dk-img5.webp',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image grid */}
        <Carousel className="h-125" images={images} />

        {/* Copy */}
        <div>
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            About DK Telecom
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand leading-tight tracking-tight mb-5">
            Connecting Gambia to the World
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
            At DK Telecom LTD, we’re dedicated to bridging the gap between
            innovation and connectivity. With our cutting-edge technology and
            unwavering commitment to customer satisfaction, we’re redefining
            telecommunications.
            <br />
            <br />
            From seamless network solutions to personalized customer care, we’re
            here to empower your digital journey. Join us as we pave the way for
            a connected future.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-32 bg-navy p-6 text-white">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-brand-light rounded-xl flex items-center justify-center text-lg">
              {p.icon}
            </div>
            <div>
              <p className="font-display font-bold text-lg  mb-1">
                {p.title}
              </p>
              <p className="text-sm leading-relaxed text-slate-200">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
