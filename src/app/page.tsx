import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Scale your infrastructure with <span className="text-blue-600">confidence.</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
          We provide expert B2B consulting for automated deployments, scalable infrastructure, and robust devops pipelines. Stop managing servers and start building your product.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-colors bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Book a Consultation
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-colors bg-white text-zinc-900 border border-zinc-200 rounded-lg hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
