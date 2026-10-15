import { TopNav } from './components/TopNav';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { UsedBy } from './components/landing/UsedBy';
import { Sponsors } from './components/landing/Sponsors';

export default function LandingPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <UsedBy />
        <Sponsors />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Apache License 2.0 {new Date().getFullYear()} © OpenRPC.
      </footer>
    </>
  );
}
