import React from 'react';
import '../styles/SkillItem.scss';

const ProjectItem = (props) => {
  return (
    <div className="skillitem">
        <img src={props.Imgurl} alt={props.name} />
        <p>{props.name}</p>
    </div>
  );
}

export default ProjectItem;
