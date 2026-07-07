import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FrontendStrength from '@/components/FrontendStrength';
import Skills from '@/components/Skills';
import ProjectsTable from '@/components/ProjectsTable';
import Career from '@/components/Career';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <FrontendStrength />
        <Skills />
        <ProjectsTable />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
