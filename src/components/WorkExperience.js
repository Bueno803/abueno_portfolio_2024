import React from 'react';
import {Tilt} from 'react-tilt';

function WorkExperience() {
    const projects = [
        { title: "Project 1", description: "Description for project 1" },
        { title: "Project 2", description: "Description for project 2" },
        { title: "Project 3", description: "Description for project 3" },
        { title: "Project 4", description: "Description for project 4" },
        { title: "Project 5", description: "Description for project 5" },
      ];

  return (
    <div className="container mx-auto my-20 p-4">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">Work Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Tilt className="Tilt" options={{ max: 25 }} key={index}>
            <div className="Tilt-inner bg-gray-200 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
