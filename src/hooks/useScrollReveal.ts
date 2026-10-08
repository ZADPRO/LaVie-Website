import { useEffect } from 'react';

/**
 * Custom hook to activate smooth, high-performance scroll reveal animations
 * across all sections and components using IntersectionObserver.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: make all elements immediately visible
      document.querySelectorAll('.reveal-on-scroll, [data-reveal], .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .stagger-reveal')
        .forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once revealed, unobserve to maintain high performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const selector = `
      .reveal-on-scroll,
      [data-reveal],
      .reveal-up,
      .reveal-left,
      .reveal-right,
      .reveal-scale,
      .reveal-fade,
      .stagger-reveal,
      .reveal-portfolio-img
    `;

    const registerElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        // If element is already in viewport, reveal it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial registration
    registerElements();

    // Listen for DOM mutations in case dynamic content loads
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
