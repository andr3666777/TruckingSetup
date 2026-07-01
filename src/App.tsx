import { useTheme } from './lib/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-ink-950 dark:text-ink-100 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
