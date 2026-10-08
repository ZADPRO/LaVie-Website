import React, { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';
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

                {/* Map Section */}
                <div className="presence-map-wrapper">
                  <iframe
                    src={loc.mapEmbed}
                    title={loc.type}
                    className="presence-map-iframe"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Top-Left: District Badge (replacing date badge) */}
                  <div className="presence-district-badge">
                    {loc.district}
                  </div>

                  {/* Bottom-Left Notch Tab: Address Heading (replacing Ha Ei & comment) */}
                  <div className="presence-heading-tab">
                    <MapPin size={14} className="presence-tab-icon" />
                    <span>{loc.type}</span>
                  </div>
                </div>

                {/* Card Body: Address below (replacing article title, More details removed) */}
                <div className="presence-card-body">
                  <h3 className="presence-address-title">
                    {loc.addressLines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < loc.addressLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
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
