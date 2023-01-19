import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {TfiInstagram} from 'react-icons/tfi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><GrLinkedin/></a>
      <a href="https://github.com" target="_blank"><BsGithub/></a>
      <a href="https://instagram.com" target="_blank"><TfiInstagram/></a>
    </div>
  )
}

export default HeaderSocials
