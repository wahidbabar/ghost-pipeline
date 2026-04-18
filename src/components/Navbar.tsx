import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex z-10">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-white">
                AutoInfra<span className="text-blue-600">.</span>
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-zinc-900 text-white rounded-md hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
