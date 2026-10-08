import React, { useState, useEffect } from 'react';
import {
  Mail,
  Headphones,
  Phone,
  User,
  FileText,
  Calendar,
  Sprout,
  ChevronUp
} from 'lucide-react';
import logoWhiteImg from '../assets/Logo/La Vie Logo_white.png';
import farmerImg from '../assets/Home/farmer.png';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user starts scrolling down the page
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <footer className="footer-section">
      {/* Decorative top corner leaf accent */}
      <div className="footer-top-leaf-shape" aria-hidden="true" />

      <div className="footer-container">
        {/* Left Column: Corporate Information Card (Overhanging) */}
        <div className="footer-corporate-card">
          <div className="corp-card-header">
            <h3 className="corp-card-subtitle">La Vie Agri Solutions Pvt. Ltd.</h3>
          </div>

          <div className="corp-card-content">
            {/* Year of Establishment */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <Calendar size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Year of Establishment / Reg.</span>
                <span className="corp-item-value highlight">2023</span>
              </div>
            </div>

            {/* Nature of Business */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <Sprout size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Nature of Business</span>
                <span className="corp-item-value">
                  Agricultural inputs and crop sciences: manufacturing and supply
                </span>
              </div>
            </div>

            {/* Corporate Identification Number */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <FileText size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Corporate Identification Number (CIN)</span>
                <span className="corp-item-value cin-code">U20129TZ2023PTC030221</span>
              </div>
            </div>

            <div className="corp-divider" />

            {/* Primary Contact Person */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <User size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Primary Contact Person</span>
                <span className="corp-item-value">Mahendran Ramasamy</span>
              </div>
            </div>

            {/* Official Phone Number */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <Phone size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Official Phone Number</span>
                <a href="tel:9003227469" className="corp-item-link">
                  9003227469
                </a>
              </div>
            </div>

            {/* Official Email Address */}
            <div className="corp-info-item">
              <div className="corp-item-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="corp-item-text">
                <span className="corp-item-label">Official Email Address</span>
                <a href="mailto:info@laviecrop.com" className="corp-item-link">
                  info@laviecrop.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contacts, Farmer, Navigation & Brand */}
        <div className="footer-main-content">
          {/* Top Bar: Quick Enquiries & Call + Farmer Artwork */}
          <div className="footer-top-bar">
            <div className="footer-quick-contacts">
              {/* General Enquiries */}
              <div className="quick-contact-card">
                <div className="quick-contact-icon">
                  <Mail size={22} />
                </div>
                <div className="quick-contact-info">
                  <span className="quick-contact-label">General enquiries</span>
                  <a href="mailto:info@laviecrop.com" className="quick-contact-value">
                    info@laviecrop.com
                  </a>
                </div>
              </div>

              {/* Give us a call */}
              <div className="quick-contact-card">
                <div className="quick-contact-icon">
                  <Headphones size={22} />
                </div>
                <div className="quick-contact-info">
                  <span className="quick-contact-label">Give us a call</span>
                  <a href="tel:+919003227469" className="quick-contact-value">
                    +91 9003227469
                  </a>
                </div>
              </div>
            </div>

            {/* Farmer visual matching sample */}
            <div className="footer-farmer-container">
              <img
                src={farmerImg}
                alt="Farmer with agricultural expertise"
                className="footer-farmer-img"
              />
            </div>
          </div>

          <div className="footer-divider" />

          {/* Bottom Grid: Navigation Links & Brand Info */}
          <div className="footer-bottom-grid">
            {/* Useful Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Useful Links</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#foundation" onClick={(e) => handleNavClick(e, 'foundation')}>
                    Our Foundation
                  </a>
                </li>
                <li>
                  <a href="#manufacture" onClick={(e) => handleNavClick(e, 'manufacture')}>
                    Manufacturing Facility
                  </a>
                </li>
                <li>
                  <a href="#vision-mission" onClick={(e) => handleNavClick(e, 'vision-mission')}>
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')}>
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Explore</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#product" onClick={(e) => handleNavClick(e, 'product')}>
                    Product Portfolio
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>
                    Product
                  </a>
                </li>
                <li>
                  <a href="#approach" onClick={(e) => handleNavClick(e, 'approach')}>
                    Strategic Approach
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                    Our Presence
                  </a>
                </li>
              </ul>
            </div>

            {/* Brand Logo & About (Social Media removed per instructions) */}
            <div className="footer-brand-col">
              <div className="footer-brand-header">
                <img
                  src={logoWhiteImg}
                  alt="La Vie Crop Science Pvt Ltd"
                  className="footer-brand-logo"
                />
              </div>
              <p className="footer-brand-desc">
                We carry out our mission based on sustainable agricultural inputs,
                cutting-edge crop sciences, and farmer-first partnerships — nurturing
                higher yields and healthier soil across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll to Top Button */}
      <button
        type="button"
        className={`footer-scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={22} />
      </button>

      {/* Bottom Sub-bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-bar-container">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} La Vie Agri Solutions Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
