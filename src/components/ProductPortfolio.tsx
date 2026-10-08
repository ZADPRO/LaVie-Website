import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

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
      ],
      // Sample image placeholders for user replacement
      backLeftImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      frontLeftImg: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80',
      topRightImg: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=500&q=80',
      farRightImg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
      mintLeafImg: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80',
      basilLeafImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80'
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
      ],
      backLeftImg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
      frontLeftImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      topRightImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
      farRightImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      mintLeafImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80',
      basilLeafImg: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80'
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
      ],
      backLeftImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      frontLeftImg: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80',
      topRightImg: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=500&q=80',
      farRightImg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
      mintLeafImg: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80',
      basilLeafImg: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80'
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

        {/* Floating Side Visuals & Floating Leaves (Fixed Position Images) */}
        {/* Left Side Floating Cards & Leaf Sprig */}
        <div className="port-floating-left">
          <div className="port-img-card port-img-back-left reveal-portfolio-img port-pair-1">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" alt="Sample Product Back Left" className="port-sample-img" />
          </div>
          <div className="port-img-card port-img-front-left reveal-portfolio-img port-pair-2">
            <img src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80" alt="Sample Product Front Left" className="port-sample-img" />
          </div>
          <div className="port-leaf-sprig port-leaf-mint reveal-portfolio-img port-pair-3">
            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80" alt="Mint Leaf Sample" className="leaf-sample-img" />
          </div>
        </div>

        {/* Right Side Floating Cards & Leaf Sprig */}
        <div className="port-floating-right">
          <div className="port-img-card port-img-top-right reveal-portfolio-img port-pair-1">
            <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=500&q=80" alt="Sample Product Top Right" className="port-sample-img" />
          </div>
          <div className="port-img-card port-img-far-right reveal-portfolio-img port-pair-2">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80" alt="Sample Product Far Right" className="port-sample-img" />
          </div>
          <div className="port-leaf-sprig port-leaf-basil reveal-portfolio-img port-pair-3">
            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80" alt="Basil Leaf Sample" className="leaf-sample-img" />
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
