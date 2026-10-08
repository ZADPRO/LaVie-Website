import React, { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

const locations = [
  {
    id: 1,
    type: 'REGISTERED OFFICE',
    address: '2, Casa Grand Tiara,\nAerodrome Road,\nCoimbatore - 641005',
    city: 'Coimbatore',
    mapEmbed: 'https://maps.google.com/maps?q=Aerodrome+Road+Coimbatore+641005&output=embed&z=15',
  },
  {
    id: 2,
    type: 'CORPORATE OFFICE',
    address: '41, P M Nagar,\nSeelanaickanpatty,\nSalem - 636201',
    city: 'Salem',
    mapEmbed: 'https://maps.google.com/maps?q=PM+Nagar+Seelanaickanpatty+Salem+636201&output=embed&z=15',
  },
  {
    id: 3,
    type: 'MANUFACTURING FACILITY',
    address: '1/51-1, Mettukadu,\nKoneripatty,\nNamakkal District - 637408',
    city: 'Namakkal',
    mapEmbed: 'https://maps.google.com/maps?q=Mettukadu+Koneripatty+Namakkal+637408&output=embed&z=15',
  },
  {
    id: 4,
    type: 'GODOWN',
    address: '10/1, 10/2A, Kattuvelananthal,\nThiruvannamalai - 606755',
    city: 'Thiruvannamalai',
    mapEmbed: 'https://maps.google.com/maps?q=Kattuvelananthal+Thiruvannamalai+606755&output=embed&z=15',
  },
];

const CARDS_PER_PAGE = 2;
const totalPages = Math.ceil(locations.length / CARDS_PER_PAGE);

export const OurPresence: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPage = useCallback(
    (page: number) => {
      if (isAnimating || page === pageIndex) return;
      setIsAnimating(true);
      setTimeout(() => {
        setPageIndex(page);
        setIsAnimating(false);
      }, 380);
    },
    [pageIndex, isAnimating]
  );

  const goNext = useCallback(() => {
    const next = (pageIndex + 1) % totalPages;
    setIsAnimating(true);
    setTimeout(() => {
      setPageIndex(next);
      setIsAnimating(false);
    }, 380);
  }, [pageIndex]);

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  const visibleCards = locations.slice(
    pageIndex * CARDS_PER_PAGE,
    pageIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="presence-section" id="contact">
      <div className="presence-container">

        {/* ── Left 30% ── */}
        <div className="presence-left">
          <div className="presence-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>OUR PRESENCE</span>
          </div>

          <h2 className="presence-title">
            Four locations<br />across<br />Tamil Nadu
          </h2>

          <div className="presence-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={i === pageIndex ? 'presence-dot active' : 'presence-dot'}
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Right 70%: 2-card row ── */}
        <div className="presence-right">
          <div className={isAnimating ? 'presence-cards-row cards-exit' : 'presence-cards-row cards-enter'}>
            {visibleCards.map((loc) => (
              <div key={loc.id} className="presence-card">

                {/* Map */}
                <div className="presence-map-wrapper">
                  <iframe
                    src={loc.mapEmbed}
                    title={loc.type}
                    className="presence-map-iframe"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="presence-map-badge">
                    <MapPin size={14} strokeWidth={2.5} />
                    <span>{loc.city}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="presence-card-body">
                  <div className="presence-office-type">{loc.type}</div>
                  <p className="presence-address">
                    {loc.address.split('\n').map((line: string, idx: number, arr: string[]) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Counter */}
          <div className="presence-counter">
            <span className="presence-counter-current">{String(pageIndex + 1).padStart(2, '0')}</span>
            <span className="presence-counter-sep">/</span>
            <span className="presence-counter-total">{String(totalPages).padStart(2, '0')}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
