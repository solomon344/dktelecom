"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of internet connections do you offer?",
    a: "We offer a variety of internet connection types including DSL, cable, fiber-optic, satellite, and fixed wireless, catering to different needs and locations.",
  },
  {
    q: "What are the download and upload speeds available with your internet plans?",
    a: "Our internet plans offer a range of download and upload speeds to suit various usage requirements. Speed options may vary depending on the type of connection and your location.",
  },
  {
    q: "Do you have data caps or limits on internet usage?",
    a: "We offer both capped and unlimited data plans. Capped plans have a set data allowance, while unlimited plans provide unrestricted usage. Customers can choose the plan that best fits their needs.",
  },
  {
    q: "How does the billing process work?",
    a: "To secure your booking, we request a 50% down payment with the remaining 50% to be paid 24 hours prior to your event.",
  },
  {
    q: "What is your process for troubleshooting internet outages or disruptions?",
    a: "Our technical support team is available 24/7 to assist with any internet-related issues. We employ advanced monitoring systems to quickly identify and resolve outages, ensuring minimal disruption to your service.",
  },
  {
    q: "What additional services or features do you offer with your internet plans?",
    a: "In addition to internet access, we offer a range of supplementary services such as email accounts, web hosting, Wi-Fi hotspot access, and premium tech support to enhance your online experience.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-navy leading-tight tracking-tight mb-4">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Everything you need to know about our services and plans.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 transition-colors duration-200 hover:border-brand/20"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-semibold text-navy text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-brand transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
