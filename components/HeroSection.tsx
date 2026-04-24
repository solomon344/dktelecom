"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-navy flex items-center pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 text-blue-300 text-xs font-medium px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            Gambia&apos;s Leading Internet Provider
          </div>

          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Your Number One{" "}
            <span className="text-brand">Internet</span>{" "}
            Service Provider
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
           At DK Telecom LTD, we're dedicated to bridging the gap between innovation and connectivity. With our cutting-edge technology and unwavering commitment to customer satisfaction, we're redefining telecommunications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href={"/#plans"}>
            <Button
              // as={Link}
              // href="#plans"
              className="bg-brand text-white rounded-full px-8 font-medium hover:bg-brand-dark transition-colors"
              size="lg"
            >
              View Plans
            </Button>
            </Link>
           <Link href={"/#about"}>
            <Button
              // as={Link}
              variant={'outline'}
              className="text-white border-white/20 rounded-full px-8 font-medium hover:bg-white/5 transition-colors"
              size="lg"
            >
              Learn More
            </Button></Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/8">
            {[
              { num: "20,000+", label: "Clients" },
              { num: "27+", label: "Cities" },
              { num: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-extrabold text-3xl text-white tracking-tight">
                  {stat.num}
                </p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual cards */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Speed card */}
          <div className="bg-white/5 border border-white/8 rounded-2xl p-7">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs text-white/40 font-medium uppercase tracking-wide">
                Download Speed
              </span>
              <span className="bg-brand/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                Live
              </span>
            </div>
            <p className="font-display font-extrabold text-5xl text-white tracking-tighter">
              100 <span className="text-lg text-white/40 font-normal">Mbps</span>
            </p>
            <div className="h-1 bg-white/8 rounded-full mt-5 overflow-hidden">
              <div className="h-full w-4/5 bg-brand rounded-full" />
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌐", title: "Fiber Optic", sub: "Ultra-fast connectivity" },
              { icon: "📶", title: "4G / 5G", sub: "Mobile broadband" },
              { icon: "🏢", title: "Business Plans", sub: "Dedicated enterprise" },
              { icon: "🕐", title: "24/7 Support", sub: "Always available" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/8 rounded-xl p-5"
              >
                <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center text-base mb-3">
                  {card.icon}
                </div>
                <p className="font-display font-bold text-sm text-white mb-1">
                  {card.title}
                </p>
                <p className="text-xs text-white/40">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
