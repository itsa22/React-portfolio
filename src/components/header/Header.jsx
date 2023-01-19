import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour ! Moi c'est</h5>
        <h1>Iantsa Ny Aina</h1>
        <h5 className="text-light">Etudiant en Indegration et Devellopement</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>scroll down</a>
      </div>     
    </header>
  )
}

export default Header
