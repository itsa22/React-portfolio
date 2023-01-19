import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qu'est ce que je peu offrir ?</h5>
      <h2>Mes serices</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Simulation réseau</h3>
          </div>
          <ul className='service__list'>
            <li> <p>Simulation d'une maquette de reseau LAN & WAN sur Cisco Packet Tracer</p> </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Projet Web Developpement</h3>
          </div>
          <ul className='service__list'>
            <li> <p>HTML, CSS et PHP</p> </li>
            <li> <p>Laravel 8</p> </li> 
            <li> <p>JS, React Js , Node & EXPRESS, MERISE</p> </li> 
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>UX / UI</h3>
          </div>
          <ul className='service__list'>
          <li> <p>Mongo DB</p> </li>
          <li> <p>C++</p> </li>
          <li> <p>Java</p> </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Multimédia</h3>
          </div>
          <ul className='service__list'>
            <li> <p> Adobe Illustrator</p> </li>
            <li> <p> Photoshop</p> </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className='service__head'>
            <h3>Installation et configuration serveurs</h3>
          </div>
          <ul className='service__list'>
            <li> <p> VoIP & DHCP</p> </li>
            <li> <p> DNS</p> </li> 
          </ul>
          </article>

      </div>
    </section>
  )
}

export default Services
