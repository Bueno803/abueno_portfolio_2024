import React from 'react';

function Projects() {
    const projects = [
        { title: "Personal Project 1", description: "Description of personal project 1" },
        { title: "Personal Project 2", description: "Description of personal project 2" },
        { title: "Personal Project 3", description: "Description of personal project 3" },
        { title: "Personal Project 4", description: "Description of personal project 4" },
        { title: "Personal Project 5", description: "Description of personal project 5" },
      ];

  return (
    <div className="container mx-auto my-20 p-4">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg" data-aos="flip-up">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
