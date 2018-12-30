import React from 'react';
import '../styles/ProjectItem.scss';


const ProjectItem = (props) => {
  return (
    <div className="projectitem">
        <img src={props.Imgurl} alt={props.name} />
        <a href={props.URL}>{props.name}</a>
    </div>
  );
}

export default ProjectItem;
