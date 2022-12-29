import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/web1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Word</h5>
      <h2> Portfolio </h2>

     <div className="container portfolio_container">
       <article className='porfolio)iten'>
        <div className="portfolio_item-image"></div>
        <h3>This is a portfolio items</h3>
        <a href="https://github.com/benattimj" className='btn btn-primary'>GitHub</a>
                <a href="https://dribbble.com/shots/20239671-Wallet-Desktop-app" className='btn btn-primary' target='{_blank}'>Live Demo</a>
        </article>
       </div>
    </section>
  )
}

export default Portfolio