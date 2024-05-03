import { contactAddress } from '../assets/data.json';
import { createReactIcon } from '../utils';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-container'>
        <div className='content-container'>
          <p className='section-subtitle'>Contact</p>
          <h2 className='section-title'>Let&#39;s discuss your project</h2>
          <p className='section-desc'>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>

          <ul className='contact-list'>
            {contactAddress.map((address) => (
              <li key={address.id} title={address.title}>
                {createReactIcon(address.icon)}
                <span>
                  {address.href ? (
                    <a href={address.href}>{address.info}</a>
                  ) : (
                    address.info
                  )}
                </span>
              </li>
            ))}
          </ul>
          {/* /contact-list */}
        </div>
        {/* /content-container */}

        <div className='form-container'>
          <form>
            <div className='input-container'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name'
                required
              />
            </div>
            {/* input-container */}

            <div className='input-container__row'>
              <div className='input-container'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  required
                />
              </div>
              {/* input-container */}

              <div className='input-container'>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Enter your concern'
                  required
                />
              </div>
              {/* input-container */}
            </div>
            {/* /input-container-row */}

            <div className='input-container'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                placeholder='Enter your message...'
                required
              />
            </div>
            {/* input-container */}

            <button className='btn' type='button'>
              Submit
            </button>
          </form>
          {/* form */}
        </div>
        {/* form-container */}
      </div>
      {/* section-container */}
    </section>
  );
};

export default Contact;
