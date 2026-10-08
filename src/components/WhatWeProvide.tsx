import React, { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  ChevronLeft,
  ChevronRight,
  Award,
  Sprout,
  FlaskConical,
  Droplets,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import productsData from '../data/products.json';
import leafIconImg from '../assets/common/Leaf.png';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  image: string;
}

export const WhatWeProvide: React.FC = () => {
  const baseProducts: Product[] = productsData;
  // Triple the array to enable infinite circular looping
  const extendedProducts = [...baseProducts, ...baseProducts, ...baseProducts];

  // Start in the middle set of items
  const initialIndex = baseProducts.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const renderCategoryIcon = (iconName: string) => {
    const props = { className: "product-category-icon", size: 22 };
    switch (iconName) {
      case 'Sprout': return <Sprout {...props} />;
      case 'Leaf': return <Leaf {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // When reaching the end of the middle set, silently jump back to middle set start
    if (currentIndex >= baseProducts.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - baseProducts.length);
    }
    // When moving backward past middle set start, silently jump forward to middle set end
    else if (currentIndex < baseProducts.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + baseProducts.length);
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoTimerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleManualPrev = () => {
    prevSlide();
    startAutoSlide();
  };

  const handleManualNext = () => {
    nextSlide();
    startAutoSlide();
  };

  // Card width (340) + gap (24) = 364
  const cardOffset = 364;

  return (
    <section className="what-we-provide-section" id="products">
      <div className="provide-container-row">
        {/* Left Column (30% Width): Title, Badge, Controls */}
        <div className="provide-left-30">
          <div className="provide-badge-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>PRODUCT</span>
          </div>

          <h2 className="provide-main-heading">
            What We<br />Provide
          </h2>



          {/* Carousel Arrow Controls */}
          <div className="provide-controls-area">
            <button
              className="carousel-arrow-btn prev-btn"
              onClick={handleManualPrev}
              aria-label="Previous Product"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="carousel-arrow-btn next-btn"
              onClick={handleManualNext}
              aria-label="Next Product"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Right Column (70% Width): Product Cards Carousel */}
        <div
          className="provide-right-70"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="product-carousel-wrapper">
            <div
              className="product-carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * cardOffset}px)`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {extendedProducts.map((product, idx) => (
                <div key={`${product.id}-${idx}`} className="product-card-item">
                  <div className="product-card-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-img"
                    />
                  </div>

                  {/* White Content Box Overlap */}
                  <div className="product-card-content">
                    {/* Category icon placed in top-right notch badge */}
                    <div className="product-badge-corner">
                      {renderCategoryIcon(product.icon)}
                    </div>

                    <h3 className="product-card-title">{product.name}</h3>
                    <span className="product-card-category">{product.category}</span>
                    {/* <p className="product-card-desc">{product.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
