"use client";

import { useEffect } from "react";
import Link from "next/link";

const TIERS = [
  {
    name: "Free",
    id: "tier-free",
    href: "/book-demo",
    price: "$0",
    description: "Perfect for evaluating our expertise with a quick infrastructure audit.",
    features: [
      "30-minute consultation call",
      "High-level architecture review",
      "Cost optimization suggestions",
      "No commitments",
    ],
    cta: "Book Free Audit",
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "/book-demo",
    price: "$2,500",
    description: "Ideal for growing startups needing solid deployment pipelines.",
    features: [
      "Full CI/CD pipeline setup",
      "Dockerization of a core app",
      "AWS/GCP best practices audit",
      "1 month email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/book-demo",
    price: "Custom",
    description: "Dedicated consulting for complex or highly scalable setups.",
    features: [
      "Custom Kubernetes clusters",
      "Multi-region architecture",
      "Compliance & security audits",
      "24/7 dedicated support channel",
    ],
    cta: "Contact Us",
  },
];

export default function PricingPage() {
  useEffect(() => {
    // Fire once on mount — tells the server someone hit /pricing
    fetch("/api/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: "/pricing" }),
    }).catch(() => {}); // silent fail — never block the UI
  }, []);

  return (
    <div className="py-24 sm:py-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Choose the engagement level that fits your infrastructure needs. We build everything perfectly and pass the keys to you.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 bg-transparent lg:grid-cols-3 lg:gap-8">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`flex flex-col justify-between rounded-2xl p-8 border ${
              tier.popular
                ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/10"
                : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-xl font-semibold leading-8 text-zinc-900 dark:text-white">
                  {tier.name}
                </h3>
                {tier.popular && (
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-300">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 min-h-[48px]">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400">
                    /project
                  </span>
                )}
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={tier.href}
              className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                tier.popular
                  ? "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
