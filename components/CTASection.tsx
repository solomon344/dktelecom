"use client";

import { Button, Input } from "@heroui/react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-navy py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="inline-block bg-brand/15 border border-brand/30 text-blue-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          Get Connected Today
        </span>
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-5">
          We Have All the Service{" "}
          <span className="text-brand">You Need</span>
        </h2>
        <p className="text-white/50 text-base leading-relaxed mb-10">
          No need to worry — DK Telecom covers all your connectivity needs. Reach out and our team will get you set up quickly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <Input
            placeholder="Your phone number or email"
            className="flex-1"
            
            // classNames={{
            //   inputWrapper: "bg-white/10 border-white/20 text-white rounded-full px-5",
            //   input: "text-white placeholder:text-white/40",
            // }}
          />
          <Button className="bg-brand text-white rounded-full px-8 font-medium hover:bg-brand-dark whitespace-nowrap">
            Contact Us
          </Button>
        </div>

        <p className="text-white/30 text-xs">
          Or call us directly: <span className="text-white/60">+220 000 0000</span>
        </p>
      </div>
    </section>
  );
}
