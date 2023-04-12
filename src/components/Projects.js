import React from 'react'
import '../styles/Projects.css'


const Projects = (props) => {
    //props.data.*
  return (
        <>
          {props.data.map((project, index) => (
            <div key={index} className="card cardSizeSmall">
              <div className="card-image">
                <img className="full" src={project.img} alt="picture" />
              </div>
              <h3>{project.title}</h3>
            </div>
          ))}
        </>
      );
    };

export default Projects
