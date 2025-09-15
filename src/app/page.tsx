import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Partners from '@/sections/Partners';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {/* Content will go here - scroll will only appear if content exceeds viewport */}
        <Navbar />
        <Hero />
        <Partners />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
