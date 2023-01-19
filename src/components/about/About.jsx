import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>A savoir !</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
            <div className='about__cards'>
              <article className='about__card'>
                <h5>Experience</h5>
                <small>Lycense 3 ESTI</small>
              </article>

              <article className='about__card'>
                <h5>Realisation</h5>
                <small>10 +</small>
              </article>

              <article className='about__card'>
                <h5>Contribution Projet</h5>
                <small>ESTI & Equipes(amis)</small>
              </article>
            </div>

            <p>
            "Actuellement en 3eme année a l'ESTI Antanimena, je suis actuellement a la recherche d'une alternance. Passionné par
le monde de la technologie et du développement je veux contribuez a améliorer le monde."
            </p>
            
            <a href='#contact' className='btn btn-primary'>Discuter avec moi </a>
        </div>
      </div>
    </section>
  )
}

export default About
