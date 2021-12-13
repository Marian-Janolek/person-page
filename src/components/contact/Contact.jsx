import './contact.css';
import Phone from '../../assets/phone.png';
import Email from '../../assets/email.png';
import Address from '../../assets/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_USER_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 123 12 11
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@example.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              245 King Street, Toronto
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && 'Thank you ...'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
