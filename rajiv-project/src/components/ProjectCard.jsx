import React from "react";
const ProjectCard = ({ title, description, link}) => {
    return(

       <div className="project-card">
       <h2>{title}</h2>
       <p>{description}</p>
       <a href="link" target="black" rel="noopener noreferrer">

       Visit Site

       </a>
       </div>

    );
}
export default ProjectCard;