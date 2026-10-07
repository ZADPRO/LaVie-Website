import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Foundation } from './components/Foundation';
import { VisionMission } from './components/VisionMission';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Foundation />
        <VisionMission />
      </main>
    </div>
  );
}

export default App;


