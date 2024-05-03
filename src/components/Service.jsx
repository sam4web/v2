import { services } from '../assets/data.json';

const Service = () => {
  return (
    <section className='service' id='service'>
      <div className='section-container'>
        <p className='section-subtitle'>Services</p>
        <h2 className='section-title'>
          I provide wide range of digital services
        </h2>
        <p className='section-desc'>
          Pleased to offer a comprehensive range of digital services, tailored
          to meet your diverse needs
        </p>

        <div className='service-container'>
          {services.map((service, idx) => (
            <div className='service-item' key={service.id}>
              <p className='service-item__idx'>{idx + 1}</p>
              <h3 className='service-item__title'>{service.title}</h3>
              <p className='service-item__description'>{service.description}</p>
            </div>
          ))}
        </div>
        {/* /service-container */}
      </div>
      {/* /section-container */}
    </section>
  );
};

export default Service;
