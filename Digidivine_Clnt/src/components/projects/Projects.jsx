import React from 'react';
import ProjectCard from './ProjectCard';
import priject1Img from "../../assets/ProjectsImages/project1.png" 
import priject2Img from "../../assets/ProjectsImages/project2.png" 
import priject3Img from "../../assets/ProjectsImages/project3.png" 
import priject4Img from "../../assets/ProjectsImages/project4.png" 

const Projects = () => {
  const projects = [
    priject1Img,
    priject4Img,
    priject2Img,
    priject3Img,
     
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center" >Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="zoom-out" data-aos-duration="2000">
        {projects.map((image, index) => (
          <ProjectCard
          
            key={index}
            image={image}
            className={`col-span-1 row-span-${index % 2 === 0 ? '2' : '1'} ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
