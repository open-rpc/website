import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { UsedBy } from './components/landing/UsedBy';
import { Sponsors } from './components/landing/Sponsors';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <UsedBy />
      <Sponsors />
    </main>
  );
}
