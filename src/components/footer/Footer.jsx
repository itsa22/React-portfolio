import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'
import {GiBirdTwitter} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>IANTSA</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portofolio'>Portofolio</a></li>
          <li><a href='#temoignages'>Temoignages</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://facebook.com'><FaFacebook/></a>
          <a href='https://instagram.com'><ImInstagram/></a>
          <a href='https://twitter.com'><GiBirdTwitter/></a>
        </div>
      <div className='footer__copyright'>
        <small>&copy; IANTSA CV. Tout droit reserver</small>
      </div>
    </footer>
  )
}

export default Footer
