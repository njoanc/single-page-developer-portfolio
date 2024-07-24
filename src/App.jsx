import Header from "./components/header/Header";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <main className="overflow-x-clip">
      <Header />
      <div>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
