import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Mes compétences ?</h5>
      <h2>Mes experiences</h2>
        <div className='container experience__container'>
          <div className='experience__frontend'>

            <h3>Developpement Frontend</h3>

              <div className='experience__content'>
                <article className='experience__details'>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Bootstrap & Tailwind</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
              </div>
          </div>
        {/*FIN DU FRONTEND */}
          <div className='container experience__backend'>
          <div className='experience__backend'>

          <h3>Developpement Backend</h3>

          <div className='experience__content'>
                <article className='experience__details'>
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Laravel</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Mongo DB</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
                <article className='experience__details'>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermédiare</small>
                </div>
                </article>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default experience
