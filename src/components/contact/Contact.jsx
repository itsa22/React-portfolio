import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glq3i5g', 'template_wo9jk8m', form.current, 'PaT61U7BFBGTmfz8e')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Prenez conact avec moi</h5>
      <h2>Contactez-moi</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>iantsa.nyaina22@gmail.com</h5>
            <a href="mailto:iantsa.nyaina22@gmail.com">Envoyez un message</a>
        </article>
        <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>IantsaNyAina</h5>
            <a href="https://m.me/iantsa.rakotoarison">Contactez-moi sur messenger</a>
        </article>
        <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+261325337121</h5>
            <a href="https://api.whatsapp.com/send?phone=0325337121">Envoyez un message</a>
        </article>
        </div>
          {/*End Of Contact*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Saisissez votre nom' required />
            <input type="email" name='email' placeholder='Saisissez votre Email' required />
            <textarea name='message' rows="7" placeholder='Entrer un commentaire' required></textarea>
            <button type='submit' className='btn btn-primary'>Envoyer</button>
          </form>
      </div>
    </section>
  )
}

export default Contact