import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

const locations = [
  {
    id: 1,
    type: 'REGISTERED OFFICE',
    district: 'COIMBATORE',
    addressLines: [
      '2, Casa Grand Tiara,',
      'Aerodrome Road,',
      'Coimbatore - 641005'
    ],
    city: 'Coimbatore',
    mapEmbed: 'https://www.google.com/maps?cid=1774303926377452674&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed'
  },
  {
    id: 2,
    type: 'CORPORATE OFFICE',
    district: 'SALEM',
    addressLines: [
      '41, P M Nagar,',
      'Seelanaickanpatty,',
      'Salem - 636201'
    ],
    city: 'Salem',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.533056043397!2d78.16829827322775!3d11.630477444949071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf579858d39a7%3A0xb32f60367f0a1761!2sLAVIE%20AGRI%20SOLUTIONS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1791452720228!5m2!1sen!2sin'
  },
  {
    id: 3,
    type: 'MANUFACTURING FACILITY',
    district: 'NAMAKKAL',
    addressLines: [
      '1/51-1, Mettukadu,',
      'Koneripatty,',
      'Namakkal District - 637408'
    ],
    city: 'Namakkal',
    mapEmbed: 'https://www.google.com/maps?q=Mettukadu,+Koneripatti,+Namakkal,+Tamil+Nadu+637408&output=embed&z=15'
  },
  {
    id: 4,
    type: 'GODOWN',
    district: 'THIRUVANNAMALAI',
    addressLines: [
      '10/1, 10/2A, Kattuvelananthal,',
      'Thiruvannamalai - 606755'
    ],
    city: 'Thiruvannamalai',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15585.22451323601!2d79.21113350667473!3d12.225152728664595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf130bb371c6d9%3A0xdcd97c6f5923fd17!2sLavie%20Agri%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1791452946205!5m2!1sen!2sin'
  }
];

export const OurPresence: React.FC = () => {
  const baseLocations = locations;
  // Triple the array to enable infinite circular looping
  const extendedLocations = [...baseLocations, ...baseLocations, ...baseLocations];

  // Start in the middle set of items
  const initialIndex = baseLocations.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardOffset, setCardOffset] = useState(404);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const measureCardOffset = useCallback(() => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const firstCard = trackRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const style = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(style.gap) || 24;
      if (cardWidth > 0) {
        setCardOffset(cardWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    measureCardOffset();
    window.addEventListener('resize', measureCardOffset);
    const timer = setTimeout(measureCardOffset, 250);
    return () => {
      window.removeEventListener('resize', measureCardOffset);
      clearTimeout(timer);
    };
  }, [measureCardOffset]);

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
    if (currentIndex >= baseLocations.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - baseLocations.length);
    }
    // When moving backward past middle set start, silently jump forward to middle set end
    else if (currentIndex < baseLocations.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + baseLocations.length);
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoTimerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
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

  return (
    <section className="presence-section" id="contact">
      <div className="presence-container-row">
        {/* Left Column (30% Width): Tag, Title, Carousel Controls */}
        <div className="presence-left-30 reveal-left">
          <div className="presence-badge-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>OUR PRESENCE</span>
          </div>

          <h2 className="presence-main-heading">
            Four Locations<br className="desktop-heading-br" /> Across<br className="desktop-heading-br" /> Tamil Nadu
          </h2>

          {/* Desktop Carousel Arrow Controls */}
          <div className="presence-controls-area presence-controls-desktop">
            <button
              className="carousel-arrow-btn prev-btn"
              onClick={handleManualPrev}
              aria-label="Previous Location"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="carousel-arrow-btn next-btn"
              onClick={handleManualNext}
              aria-label="Next Location"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Right Column (70% Width): Carousel Track with exact original Card design */}
        <div
          className="presence-right-70 reveal-right delay-200"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="presence-carousel-wrapper">
            <div
              ref={trackRef}
              className="presence-carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * cardOffset}px)`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {extendedLocations.map((loc, idx) => (
                <div key={`${loc.id}-${idx}`} className="presence-card">
                  {/* Map Section */}
                  <div className="presence-map-wrapper">
                    <iframe
                      src={loc.mapEmbed}
                      title={loc.type}
                      className="presence-map-iframe"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Top-Left: District Badge */}
                    <div className="presence-district-badge">
                      {loc.district}
                    </div>

                    {/* Bottom-Left Notch Tab: Address Heading */}
                    <div className="presence-heading-tab">
                      <MapPin size={14} className="presence-tab-icon" />
                      <span>{loc.type}</span>
                    </div>
                  </div>

                  {/* Card Body: Address below */}
                  <div className="presence-card-body">
                    <h3 className="presence-address-title">
                      {loc.addressLines.map((line, lineIdx) => (
                        <React.Fragment key={lineIdx}>
                          {line}
                          {lineIdx < loc.addressLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Arrow Controls: Rendered after presence cards on mobile */}
          <div className="presence-controls-area presence-controls-mobile">
            <button
              className="carousel-arrow-btn prev-btn"
              onClick={handleManualPrev}
              aria-label="Previous Location"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="carousel-arrow-btn next-btn"
              onClick={handleManualNext}
              aria-label="Next Location"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
