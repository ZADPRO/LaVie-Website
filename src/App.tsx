import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Foundation } from './components/Foundation';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Foundation />
      </main>
    </div>
  );
}

export default App;


