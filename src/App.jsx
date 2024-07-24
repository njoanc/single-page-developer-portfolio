import Header from "./components/header/Header";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <main className="overflow-x-clip">
      <Header />
      <div>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

export default App;
