import React from 'react'
import '../styles/Projects.css'

const Projects = (props) => {
  return (
    <>
      {props.data.map((project, index) => (
        <div key={index} className="card cardSizeSmall">
          <div className="card-image img-container">
            <img className="full" src={project.img} alt="Picture of deployed site"/>
            <div className="overlay">
              <div className="overlay-content">
                <a href={project.deployed}><h3>{project.title}</h3></a>
                <a href={project.github}><i className="fa fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;