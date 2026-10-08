import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';
import portImg1 from '../assets/Portfolio/Portfolio-1.png';
import portImg2 from '../assets/Portfolio/Portfolio-2.jpeg';
import portImg3 from '../assets/Portfolio/Portfolio-3.jpeg';
import portImg4 from '../assets/Portfolio/Portfolio-4.jpeg';
import portImg5 from '../assets/Portfolio/Portfolio-5.jpeg';
import portImg6 from '../assets/Portfolio/Portfolio-6.png';

export const ProductPortfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = [
    {
      id: 'nutrition',
      badge: '01',
      title: 'CROP NUTRITION',
      subtitle: 'Macro, Secondary & Micro-Nutrients',
      description: '“Balanced nutrition is the foundation of productivity. Our nutrition range is formulated to meet the macro, secondary and micro-nutrient needs of diverse crops and soils.”',
      items: [
        'NPK and speciality fertilizers',
        'Micronutrients and secondary nutrients',
        'Organic manures',
        'PROM and PDM'
      ]
    },
    {
      id: 'biological',
      badge: '02',
      title: 'BIOLOGICAL & BIO-BASED INPUTS',
      subtitle: 'Revitalising Soil Biology & Plant Vigour',
      description: '“Living and naturally derived inputs that revitalise soil biology, stimulate plant vigour and reduce dependence on purely chemical approaches.”',
      items: [
        'Biostimulants and seaweed-based inputs',
        'Humic and fulvic substances',
        'Amino acids and plant extracts',
        'Microbial inputs'
      ]
    },
    {
      id: 'speciality',
      badge: '03',
      title: 'SPECIALITY CROP INPUTS',
      subtitle: 'Targeted Natural Crop-Care Solutions',
      description: '“Targeted crop-care solutions drawn from nature, supporting healthier crops through sustainable, practical and effective agricultural practices.”',
      items: [
        'Neem / Azadirachtin-based products',
        'Speciality crop-care products',
        'Natural and sustainable agricultural products'
      ]
    }
  ];

  // Wheel Auto-scroll Timer (3 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, categories.length]);

  const current = categories[activeIndex];

  return (
    <section
      className="portfolio-section"
      id="product"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background World Map Dot Matrix Accent */}
      <div className="portfolio-map-bg" aria-hidden="true"></div>

      <div className="portfolio-container">
        {/* Top Header */}
        <div className="portfolio-header reveal-up">
          <div className="portfolio-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>PRODUCT PORTFOLIO</span>
          </div>
          <h2 className="portfolio-title">Product Portfolio</h2>
          <p className="portfolio-subtitle">
            Comprehensive, science-backed inputs for the complete crop cycle
          </p>
        </div>

        {/* Floating Side Visuals & Floating Leaves */}
        {/* Left Side Floating Cards & Leaf Sprig */}
        <div className="port-floating-left">
          {/* Left top small image: Portfolio-6.png */}
          <div className="port-leaf-sprig port-leaf-mint reveal-portfolio-img port-pair-1">
            <img src={portImg6} alt="Portfolio Leaf" className="leaf-sample-img" />
          </div>
          {/* Next image: Portfolio-2.jpeg */}
          <div className="port-img-card port-img-back-left reveal-portfolio-img port-pair-2">
            <img src={portImg2} alt="Crop Nutrition" className="port-sample-img" />
          </div>
          {/* Next image: Portfolio-3.jpeg */}
          <div className="port-img-card port-img-front-left reveal-portfolio-img port-pair-3">
            <img src={portImg3} alt="Harvest Agriculture" className="port-sample-img" />
          </div>
        </div>

        {/* Right Side Floating Cards & Leaf Sprig */}
        <div className="port-floating-right">
          {/* Right top first image: Portfolio-4.jpeg */}
          <div className="port-img-card port-img-top-right reveal-portfolio-img port-pair-1">
            <img src={portImg4} alt="Farmer Spraying Nutrition" className="port-sample-img" />
          </div>
          {/* Next image: Portfolio-5.jpeg */}
          <div className="port-img-card port-img-far-right reveal-portfolio-img port-pair-2">
            <img src={portImg5} alt="Farmer In Field" className="port-sample-img" />
          </div>
          {/* Final last small image: Portfolio-6.png */}
          <div className="port-leaf-sprig port-leaf-basil reveal-portfolio-img port-pair-3">
            <img src={portImg1} alt="Portfolio Leaf" className="leaf-sample-img" />
          </div>
        </div>

        {/* Center Content Display Stage with Wheel Arc Rotation */}
        <div className="portfolio-center-stage wheel-arc-anim reveal-scale delay-200" key={activeIndex}>
          {/* <div className="port-cat-badge">{current.badge}</div> */}

          <h3 className="port-cat-title">{current.title}</h3>
          <h4 className="port-cat-subtitle">{current.subtitle}</h4>

          <p className="port-quote-text">
            {current.description}
          </p>

          {/* 4 Checklist Pill Badges */}
          <div className="port-items-grid">
            {current.items.map((item, idx) => (
              <div key={idx} className="port-item-pill">
                <span className="port-check-badge">
                  <Check size={14} className="port-check-icon" />
                </span>
                <span className="port-item-label">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wheel Auto-Scroll Pagination Dots */}
        <div className="portfolio-dots-nav">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              className={`port-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(idx);
              }}
              aria-label={`Switch to ${cat.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
