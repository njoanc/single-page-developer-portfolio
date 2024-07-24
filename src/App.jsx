import Header from "./components/header/Header";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <main className="overflow-x-clip">
      <Header />

      <div>
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
