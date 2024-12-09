import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
      </main>
    </div>
  );
};

export default App;
