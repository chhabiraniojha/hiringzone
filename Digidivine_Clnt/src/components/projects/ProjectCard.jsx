import React from 'react';

const ProjectCard = ({ image, className }) => {
  return (
    <div className={`overflow-hidden ${className}`} data-aos="zoom-out" data-aos-duration="2000">
      <img src={image} alt="Project" className="w-full h-full object-cover" />
    </div>
  );
};

export default ProjectCard;
