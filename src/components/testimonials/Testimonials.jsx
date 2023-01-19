import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'
import AVTR8 from '../../assets/avatar8.jpg'

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar : AVTR1,
    name: 'Aina',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR2,
    name: 'Iantsa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR3,
    name: 'Aiki',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR4,
    name: 'Ny',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR5,
    name: 'Rak',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR6,
    name: 'Kitagawa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR7,
    name: 'Haru',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
  {
    avatar : AVTR8,
    name: 'Luffu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam dicta amet error alias impedit totam veniam assumenda. Soluta quae temporibus similique suscipit ullam nihil totam voluptate? Distinctio, voluptatem?'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Retour sur mes projets</h5>
      <h2>Témoignage</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
            <SwiperSlide key={index}className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=''/>
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
