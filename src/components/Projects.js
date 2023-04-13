import React from 'react'
import '../styles/Projects.css'

const Projects = (props) => {
  return (
        <>
          {props.data.map((project, index) => (
            <div key={index} className="card cardSizeSmall">
              <div className="card-image ">
              <a href={project.deployed}><img className="full" src={project.img} alt="Picture of deployed site"/></a>
              <br/>
              <a href={project.deployed}> {project.title}</a>
              <br />
             <a href={project.github}><i className="fa fa-github"></i></a>
            </div>
            </div>
            
          ))}
        </>
      );
    };

export default Projects
