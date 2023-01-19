import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portofolio1.jpg'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import IMG4 from '../../assets/portofolio4.jpg'
import IMG5 from '../../assets/portofolio5.jpg'
import IMG6 from '../../assets/portofolio6.jpg'
import IMG7 from '../../assets/portofolio7.jpg'
import IMG8 from '../../assets/portofolio8.png'
import IMG9 from '../../assets/portofolio9.jpg'
import IMG10 from '../../assets/portofolio10.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Blog',
    github:'https://github.com', 
    demo:''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Site web local (Google Classroom) : HTML, CSS, Bootstrap & PHP',
    github:'', 
    demo:''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Site local de vente de téléphonie avec HTML, CSS, Bootstrap, PHP & phpMyAdmin',
    github:'', 
    demo:''
  },
  {
    id: 4,
    image: IMG4,
    title: 'ESTI Sécure avec Python & Mongo DB',
    github:'', 
    demo:''
  },
  {
    id: 5,
    image: IMG5,
    title: 'Gestion des absences des élèves avec Python & Mongo.',
    github:'', 
    demo:''
  },
  {
    id: 6,
    image: IMG6,
    title: 'React + Node + Express : CRUD sur la gestion de produit',
    github:'', 
    demo:''
  },
  {
    id: 7,
    image: IMG7,
    title: 'React + Node + Express : CRUD sur la gestion de produit',
    github:'', 
    demo:''
  },
  {
    id: 8,
    image: IMG8,
    title: 'Site-web sur la gestion d impot avec MERN',
    github:'', 
    demo:''
  },
  {
    id: 9,
    image: IMG9,
    title: 'calculatrice scientifique sur C++',
    github:'', 
    demo:''
  },
  {
    id: 10,
    image: IMG10,
    title: 'Projet avec Java & Pwa',
    github:'', 
    demo:''
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Mes Projets recent</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio__container'>
        {
          data.map(({id, image,title, github, demo})=>{
            return(
              <article key={id}className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={image} alt={title}></img>
          </div>
            <h3>{title}</h3>
              <div className='portofolio__item-cta'>
                <a href={github} className='btn' target='__blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='__blank'>Demonstration</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio
