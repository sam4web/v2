import { aboutImage } from '../assets';
import { createReactIcon } from '../utils';
import {
  socialInfo,
  personalInfo as infoArr,
  skills,
} from '../assets/data.json';

const About = () => {
  const infoChunk1 = infoArr.slice(0, infoArr.length / 2);
  const infoChunk2 = infoArr.slice(infoArr.length / 2, infoArr.length);

  return (
    <section className='about' id='about'>
      <div className='section-container'>
        <p className='section-subtitle'>Get to know me</p>
        <h2 className='section-title'>About Me</h2>
        <p className='section-desc'>
          Here you will find more information about me and my current skills
          mostly in terms of programming and technology
        </p>

        <div className='content-container'>
          <div
            className='content__image'
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>
          {/* /content-image */}
          <div className='content__info'>
            <div className='content-info__section content-info__section-top'>
              <h3 className='content__info-title'>Sijal Manandhar</h3>
              <h4 className='content__info-subtitle'>
                A <span>Frontend</span> web developer based in{' '}
                <span>Nepal</span>
              </h4>
              <p className='content__info-desc'>
                I&#39;m a dedicated Front-end Web Developer with 2 years of
                experience in designing and developing websites and web
                applications. Actively seeking a dynamic work environment to
                refine my skills, I bring a passion for continuous learning and
                innovation. My proven track record showcases a commitment to
                excellence, adaptability, and a proactive approach to
                problem-solving. Eager to contribute my skills and enthusiasm to
                a forward-thinking team.
              </p>
              {/* /info-desc */}

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
              {/* /social-icons */}
            </div>
            {/* content-info__section */}

            <hr className='line-break' />

            <div className='content-info__section content-info__section-bottom'>
              <h4 className='content-info__section-title'>Personal Info</h4>
              <div>
                <ul>
                  {infoChunk1.map((info) => (
                    <li key={info.id}>
                      <span>{info.title}: </span>
                      {info.href ? (
                        <a href={info.href}>{info.detail}</a>
                      ) : (
                        info.detail
                      )}
                    </li>
                  ))}
                </ul>
                <ul>
                  {infoChunk2.map((info) => (
                    <li key={info.id}>
                      <span>{info.title}: </span>
                      {info.href ? (
                        <a href={info.href}>{info.detail}</a>
                      ) : (
                        info.detail
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* /contact-info */}
        </div>
        {/* /content-container */}

        <div className='skills-container'>
          <div className='skills-container__title'>My Skills</div>
          <ul className='skills-list'>
            {skills.map((skill) => (
              <li key={skill.id} title={skill.title}>
                <a
                  href={skill.redirect_url}
                  className='skills-list__item'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={skill.image_url}
                    title={skill.title}
                    alt={skill.title}
                    className='skill-image'
                  />
                </a>
              </li>
            ))}
          </ul>
          {/* /skills-list */}
        </div>
        {/* /skills-container */}
      </div>
      {/* section-container */}
    </section>
  );
};

export default About;
