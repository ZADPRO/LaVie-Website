import React, { useState, useEffect } from 'react';
import { LayoutGrid } from 'lucide-react';
import logoImg from '../assets/Logo/Logo.png';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'foundation', 'manufacture', 'why-us', 'product'];

    const handleScroll = () => {
      // Header background scroll toggle
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const scrollPosition = window.scrollY + 180;
      
      // Check sections
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (['foundation', 'manufacture', 'why-us'].includes(sectionId)) {
              setActiveSection('about');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="logo-link" 
          title="La Vie Crop Science Pvt Ltd."
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img src={logoImg} alt="La Vie Crop Science Pvt Ltd." className="logo-img" />
        </a>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#product" 
                className={`nav-link ${activeSection === 'product' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'product')}
              >
                Product
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">


          <button className="grid-menu-btn" aria-label="Menu Grid">
            <LayoutGrid size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};
