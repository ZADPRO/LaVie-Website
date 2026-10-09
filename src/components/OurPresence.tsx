import React from 'react';
import { MapPin } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

const locations = [
  {
    id: 1,
    type: 'REGISTERED OFFICE',
    district: 'COIMBATORE',
    city: 'Coimbatore',
    addressLines: [
      '2, Casa Grand Tiara,',
      'Aerodrome Road,',
      'Coimbatore - 641005'
    ]
  },
  {
    id: 2,
    type: 'CORPORATE OFFICE',
    district: 'SALEM',
    city: 'Salem',
    addressLines: [
      '41, P M Nagar,',
      'Seelanaickanpatty,',
      'Salem - 636201'
    ]
  },
  {
    id: 3,
    type: 'MANUFACTURING FACILITY',
    district: 'NAMAKKAL',
    city: 'Namakkal',
    addressLines: [
      '1/51-1, Mettukadu,',
      'Koneripatty,',
      'Namakkal District - 637408'
    ]
  },
  {
    id: 4,
    type: 'GODOWN',
    district: 'THIRUVANNAMALAI',
    city: 'Thiruvannamalai',
    addressLines: [
      '10/1, 10/2A, Kattuvelananthal,',
      'Thiruvannamalai - 606755'
    ]
  }
];

export const OurPresence: React.FC = () => {
  return (
    <section className="presence-section" id="contact">
      <div className="presence-container-row">
        {/* Left Column (32% Width): Tag, Title, Description */}
        <div className="presence-left-30 reveal-left">
          <div className="presence-badge-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>OUR PRESENCE</span>
          </div>

          <h2 className="presence-main-heading">
            Four Locations<br className="desktop-heading-br" /> Across<br className="desktop-heading-br" /> Tamil Nadu
          </h2>

          <p className="presence-desc">
            Strategically located across Tamil Nadu to support enterprise operations, manufacturing, storage, and farmer-focused distribution.
          </p>
        </div>

        {/* Right Column: 4 Cards displayed together in a 2x2 Grid */}
        <div className="presence-right-70 reveal-right delay-200">
          <div className="presence-cards-grid">
            {locations.map((loc) => (
              <div key={loc.id} className="presence-card">
                {/* Card Top: Office Type & District Pill */}
                <div className="presence-card-header">
                  <div className="presence-type-badge">
                    <span className="presence-icon-dot"></span>
                    <span>{loc.type}</span>
                  </div>
                  <span className="presence-district-pill">{loc.district}</span>
                </div>

                {/* Card Content: Icon & Full Address */}
                <div className="presence-card-content">
                  <div className="presence-location-icon-wrapper">
                    <MapPin size={20} className="presence-pin-icon" />
                  </div>
                  <div className="presence-address-details">
                    <h3 className="presence-city-heading">{loc.city}</h3>
                    <p className="presence-address-text">
                      {loc.addressLines.map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < loc.addressLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
