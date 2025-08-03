import React from 'react';
import { useState, useEffect } from 'react';

function ScrollArrow() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow when scrolled 200px down
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="scroll-arrow-fixed"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollArrow;
