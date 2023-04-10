import React from 'react'
import '../../styles/About.css'
import mugshot from '../../images/mugshot.jpg'

function About() {
  return (

    <div >
      <img src={mugshot} alt="Mugshot of David Estey" className="" />
      
      <p>
      <br />
      <br />
      <br /> 
        Hello to whom is interested! My name is David Estey, born and raised in Fredericton, NB.
        <br />
        I am just about to complete a Full Stack Developer Boot camp through UNB, and am ready to expand my knowledge in the feild of technology.
        <br />
        So far I have dipped my toes in game development, server development and website development. Hoping to get knowledge in ever expanding feilds such as: Quantum computing and AI integration.
        <br /> 
        If you have any other questions about me, feel free to use the icon in the top right of the page and click the Contact page to get in touch.
        <br /> <br />
        Thank you for taking an interest in me!
      </p>
    </div>
  )
}

export default About;
