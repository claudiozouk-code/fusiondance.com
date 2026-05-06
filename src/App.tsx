/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ExperienceAccordion from './components/ExperienceAccordion';
import About from './components/About';
import Methodology from './components/Methodology';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MeshBackground from './components/MeshBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <MeshBackground />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Introduction />
        <ExperienceAccordion />
        <About />
        <Methodology />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
