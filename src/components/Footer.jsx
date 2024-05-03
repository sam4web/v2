import { createReactIcon } from '../utils';
import { socialInfo } from '../assets/data.json';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='section-container'>
        <div className='footer-top'>
          <div className='info-container'>
            <h3 className='footer-title'>Sijal Manandhar</h3>
            <p className='info-desc'>
              A <strong>web developer</strong> specializing in frontend design
              and development for web applications. Dedicated to creating
              user-friendly digital experiences.
            </p>
          </div>
          {/* info-container */}

          <div className='social-container'>
            <h3 className='footer-title'>Social</h3>
            <ul className='social-icons'>
              {socialInfo.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    title={social.title}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {createReactIcon(social.icon)}
                  </a>
                </li>
              ))}
            </ul>
            {/* social-list */}
          </div>
          {/* social-container */}
        </div>
        {/* footer-top */}

        <div className='footer-bottom'>
          &copy; Copyright {new Date().getFullYear()}. Made by{' '}
          <a href='https://github.com/sam4web/'>Sam4Web</a>.
        </div>
        {/* footer-bottom  */}
      </div>
      {/* social-container  */}
    </footer>
  );
};

export default Footer;
