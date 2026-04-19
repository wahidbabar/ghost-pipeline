import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | AutoInfra",
  description: "Automation & Infrastructure Consulting Pricing.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
