import React from 'react'
import Projects from '../Projects'

const Portfolio = () => {
  const info = [{
  title: "Bootcamp-Work-Finder",
  img: "https://bulma.io/images/placeholders/640x480.png",
  link: "https://github.com/DaveEstey/bootcamp-work-finder/",
  },
  {
  title: "Investment Solutions",
  img: "https://bulma.io/images/placeholders/640x480.png",
  link: "https://github.com/DaveEstey/Investment-Solutions",
  },
  {
  title: "Investment Solutions",
  img: "https://bulma.io/images/placeholders/640x480.png",
  link: "https://github.com/DaveEstey/Investment-Solutions",
  }]
  
  return (
    <div className='container horizontalFlex'>
      <Projects data= {info}/>
    </div>
  )
}

export default Portfolio


