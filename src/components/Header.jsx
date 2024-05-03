import { useEffect, useState } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { NAV_LINKS } from '../constants';

const Header = () => {
  const [headerToggleActive, setHeaderToggleActive] = useState(false);
  const [headerScrollActive, setHeaderScrollActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResizeAndScroll = () => {
      setHeaderToggleActive(false);
      setScrollY(window.scrollY);
    };
    window.addEventListener('resize', handleResizeAndScroll);
    window.addEventListener('scroll', handleResizeAndScroll);
    return () => {
      window.removeEventListener('scroll', handleResizeAndScroll);
      window.removeEventListener('resize', handleResizeAndScroll);
    };
  }, []);

  useEffect(() => {
    setHeaderScrollActive(scrollY > 130);
  }, [scrollY]);

  return (
    <header
      className={`header ${headerToggleActive ? 'header-toggle-active' : ''} 
      ${headerScrollActive ? 'header-scroll-active' : ''}`}
    >
      <div className='section-container'>
        <h3
          className='logo'
          onClick={() => {
            animateScroll.scrollToTop({
              duration: 0,
              smooth: true,
            });
          }}
        >
          <span>S</span>
          am4Web
          <span>.</span>
        </h3>
        {/* logo */}

        <nav className='nav'>
          <ul className='nav-list'>
            {NAV_LINKS.map((link, idx) => (
              <li className='nav-item' key={idx}>
                <Link
                  className='nav-link'
                  activeClass='nav-link__active'
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={10}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* nav */}
      </div>
      {/* section-container */}

      <button
        className='toggle-btn'
        onClick={() => {
          setHeaderToggleActive((prevState) => !prevState);
        }}
      >
        <div className='bar'></div>
      </button>
      {/* toggle-btn */}
    </header>
  );
};

export default Header;
