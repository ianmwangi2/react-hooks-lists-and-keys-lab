import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div id="projects">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;