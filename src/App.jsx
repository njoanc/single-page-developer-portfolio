import Header from "./components/header/Header";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <main className="overflow-x-clip">
      <Header />

      <div>
        <HeroSection />
        <SkillsSection />
      </div>
    </main>
  );
}

export default App;
