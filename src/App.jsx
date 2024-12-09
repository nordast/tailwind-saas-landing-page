import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";

const App = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;
