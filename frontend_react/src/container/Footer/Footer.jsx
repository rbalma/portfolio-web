import { useState } from 'react';
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className='app__footer-container'>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <RiMailSendLine />
          <span>Correo</span>
          <a href="mailto:balmarodrigo@hotmail.com" className="p-text">balmarodrigo@hotmail.com</a>
        </div>
        <div className="app__footer-card">
          <FaWhatsapp />
          <span>Whatsapp</span>
          <a href="https://api.whatsapp.com/send?phone=3517179968&text=Hola, me gustaría contactarme con vos." className="p-text">(351) 717-9968</a>
        </div>
      </div>


      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input required type="text" placeholder="Ingresa tu nombre" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input required type="email" placeholder="Ingresa tu correo" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              required
              placeholder="Escribe un mensaje"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'} <FaArrowRight /></button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);