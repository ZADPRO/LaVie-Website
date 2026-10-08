import React from 'react';
import { ArrowRight } from 'lucide-react';
import homeBgImg from "../assets/Home/HOME.jpeg";

export const Hero: React.FC = () => {
  const bgImageUrl = homeBgImg;

  const handleViewProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('products');
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
    <section className="hero-section" id="home">
      {/* Background Image & Overlay */}
      <div className="hero-bg-container">
        <img
          src={bgImageUrl}
          alt="Agricultural Farmland & Spraying Drone"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Floating Animated Leaf Accent */}
      <div className="floating-leaf-wrapper">
        <svg className="leaf-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 52C12 52 16 28 44 14C44 14 52 36 28 48C20 52 12 52 12 52Z" fill="#52C41A" />
          <path d="M12 52C24 44 38 30 52 10" stroke="#73D13D" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hero-container">
        {/* Left Side Content */}
        <div className="hero-content">
          <div className="hero-headline-wrapper">
            <h1 className="hero-title">
              <span className="hero-line-1">Science For</span>
              <br />
              <div className="hero-line-2-container">
                <span className="hero-word-better">Better </span>
                <span className="hero-word-agriculture">Agriculture</span>
                {/* Solid Color #e6c05d Arc Underline Stroke spanning Better Agriculture */}
                <svg className="hero-arc-stroke" viewBox="0 0 400 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 12 20 Q 210 3 408 20" stroke="#e6c05d" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </h1>
          </div>

          <p className="hero-subtitle">
            Science driven solutions for healthier soil, stronger crops and a more sustainable agricultural future.
          </p>

          <div className="hero-cta-wrapper">
            <a 
              href="#products" 
              className="btn-start"
              onClick={handleViewProducts}
            >
              <span>View Products</span>
              <ArrowRight className="arrow-icon" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
