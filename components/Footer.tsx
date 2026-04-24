"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useTawkto } from "@/hooks/useTawkto";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "News"],
  Services: ["Home Internet", "Business Plans", "Fiber Optic", "Mobile Data"],
  Support: ["Help Center", "Contact Us", "Coverage Map", "Report Issue"],
};

export default function Footer() {
  const { openChat } = useTawkto();
  return (
    <footer className="bg-[#030812] px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5 mb-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo/>
              <span className="font-display font-bold text-white text-sm">
                DK <span className="text-brand">Telecom</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Gambia&apos;s number one internet service provider. Connecting people, businesses, and communities since day one.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    {link === "Contact Us" ? (
                      <button
                        onClick={openChat}
                        className="text-white/30 text-sm hover:text-white/80 transition-colors bg-transparent border-none p-0 cursor-pointer"
                      >
                        {link}
                      </button>
                    ) : (
                      <Link
                        href="#"
                        className="text-white/30 text-sm no-underline hover:text-white/80 transition-colors"
                      >
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-white/20">
          <p>© {new Date().getFullYear()} DK Telecom Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/20 hover:text-white/60 no-underline transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/20 hover:text-white/60 no-underline transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
