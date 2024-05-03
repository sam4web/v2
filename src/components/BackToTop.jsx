import { animateScroll } from 'react-scroll';
import { BiSolidUpArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [buttonScrollActive, setButtonScrollActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setButtonScrollActive(scrollY > 750);
  }, [scrollY]);

  return (
    <button
      className={`back-to-top 
      ${buttonScrollActive ? 'back-to-top__active' : ''}`}
      onClick={() => {
        animateScroll.scrollToTop({
          duration: 0,
          smooth: true,
        });
      }}
    >
      <BiSolidUpArrow />
    </button>
  );
};

export default BackToTop;
