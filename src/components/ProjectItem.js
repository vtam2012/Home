import React from 'react';
import '../styles/ProjectItem.scss';
import Button from './Button';

const ProjectItem = (props) => {
  return (
    <div className="projectitem">
        <img src={props.Imgurl} alt={props.name} />
        <Button>
          <a href={props.Codeurl}>
              <span className="btn-text">Github Repo</span>
          </a>
        </Button>
        <Button>
          <a href={props.Demourl}>
            <span className="btn-text">Application Demo</span>
          </a>
        </Button>
    </div>
  );
}

export default ProjectItem;
