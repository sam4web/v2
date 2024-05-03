import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa6';
import { resume } from '../assets';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='section-container'>
        <p className='desc'>Hello, I&#39;m Sam</p>
        <h1 className='title'>
          I&#39;m a{' '}
          <TypeAnimation
            sequence={['Web Developer.', 1500, 'UI/UX Designer.', 1500]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='desc'>
          I create user-friendly websites for all kinds of businesses, big or
          small. Let me turn your ideas into reality!
        </p>

        <button className='btn'>
          <a href={resume} target='_blank' rel='noreferrer'>
            View Resume
          </a>
        </button>
      </div>

      <Link
        className='nav-link'
        activeClass='nav-link__active'
        to='about'
        spy={true}
        smooth={true}
        offset={-20}
        duration={10}
      >
        <button className='arrow-down'>
          <FaChevronDown />
        </button>
      </Link>
      {/* mouse-scroll-animation */}
    </section>
  );
};

export default Hero;
