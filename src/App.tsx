import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Foundation } from './components/Foundation';
import { Manufacturing } from './components/Manufacturing';
import { VisionMission } from './components/VisionMission';
import { WhyLaVie } from './components/WhyLaVie';
import { ProductPortfolio } from './components/ProductPortfolio';
import { WhatWeProvide } from './components/WhatWeProvide';
import { Approach } from './components/Approach';
import { OurPresence } from './components/OurPresence';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Foundation />
        <Manufacturing />
        <VisionMission />
        <WhyLaVie />
        <ProductPortfolio />
        <WhatWeProvide />
        <Approach />
        <OurPresence />
      </main>
      <Footer />
    </div>
  );
}

export default App;
