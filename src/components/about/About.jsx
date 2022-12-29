import React from 'react'
import './about.css'
import ME from '../../assets/euuu.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
       <section id='about'>
      <h5> Get To Know  </h5>
      <h2> About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

    <div className="about_content">
      <div className="about_cards">
       
      <article className='about_card'>
          <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small> 2+ Years Working</small>
        </article>
     
        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small> 20+ Worldwide</small>
      </article>

      <article className='about_card'>
          <VscFolderActive className='about_icon'/>
          <h5>Projects</h5>
          <small> 5+ Completed </small>
      </article>

        <p className='P'>- Clear and effective objectives - The whole structure is analyzed and sustainable - Easy to implement, without limits - organized - 
        Clean clode  with little processing - Fast APIs and secure servers
          - The architecture is the focus a system in components.

        </p>

        <a href="#contact" className='btn'> Let's Talk
        </a>
      </div>
    </div>
</div>

     </section>
  )
}

export default About