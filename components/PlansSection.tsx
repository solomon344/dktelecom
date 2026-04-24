"use client";

import { Button } from "@heroui/react";

const plans = [
  {
    name: "Starter",
    price: "2,500",
    prev_price: "",
    currency: "D",
    period: "/month",
    description: "Two months free",
    featured: false,
    badge: null,
    features: [
      "5Mbps shared bandwidth",
      "Free Installation",
      "Free Router",
      "Hand picked vendors",
      "Premium support",
      "24/7 Helpdesk support"
    ],
  },
  {
    name: "Premium",
    price: "3,500",
    prev_price: "4,000",
    currency: "D",
    period: "/month",
    description: "Premium Option",
    featured: true,
    badge: "Most Popular",
    features: [
      "7Mbps Shared Bandwidth",
      "Free Installation",
      "Free Router",
      "Hand picked vendors",
      "Premium support",
      "24/7 Helpdesk support",
      "Make Payment using your mobile"
    ],
  },
  {
    name: "Superior",
    price: "5,000",
    currency: "D",
    period: "/month",
    description: "Ultimate speed and reliability for power users and businesses",
    featured: false,
    badge: null,
    features: [
      "Unlimited Speed Bandwidth",
      "Unlimited data",
      "24/7 premium support",
      "Free Router",
      "Free installation",
      "Hand picked vendors",
    ],
  },
];

export default function PlansSection() {
  return (
    <section id="plans" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Pricing
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand leading-tight tracking-tight mb-4">
            Simple, Transparent Plans
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Choose the plan that fits your needs. No hidden fees, no surprises — just fast, reliable internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-200 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-navy border-brand"
                  : "bg-white border-transparent hover:border-brand"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-5 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <p
                className={`font-display font-bold text-xs uppercase tracking-widest mb-4 ${
                  plan.featured ? "text-blue-300" : "text-brand"
                }`}
              >
                {plan.name}
              </p>

              <div className="mb-4">
                <p
                  className={`font-display font-extrabold text-5xl tracking-tight leading-none mb-1 ${
                    plan.featured ? "text-white" : "text-navy"
                  }`}
                >
                  <span className="text-xl align-super">{plan.currency}</span>
                  {plan.price}
                </p>
                {plan.prev_price && (
                  <p
                    className={`text-sm line-through items-center flex ${
                      plan.featured ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    <span className="text-xs ">{plan.currency}</span>
                    
                    <span>{plan.prev_price}</span>
                  </p>
                )}
                <p
                  className={`text-sm mb-2 ${
                    plan.featured ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </p>
                <p
                  className={`text-sm ${
                    plan.featured ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`h-px mb-6 ${
                  plan.featured ? "bg-white/10" : "bg-black/6"
                }`}
              />

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        plan.featured
                          ? "bg-brand/30 text-blue-300"
                          : "bg-brand-light text-brand"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                fullWidth
                className={`rounded-full font-semibold transition-all ${
                  plan.featured
                    ? "bg-brand text-white hover:bg-blue-500"
                    : "bg-brand-light text-brand hover:bg-brand hover:text-white"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
