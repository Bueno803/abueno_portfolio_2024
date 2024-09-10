import React from "react";

function Projects() {
  const projects = [
    {
      title: "Professional Issues in Computer Science",
      point_1:
        "Studied professional issues in the information technology professions.",
      point_2: "Learned history and social context of computing.",
      point_3:
        "Studied professional responsibilities, privacy, intellectual property, risks and liabilities of computer-based systems.",
    },
    {
      title: "Advanced Programming Techniques",
      point_1:
        "Primarily a C++ based class with some focus on Unix programming.",
      point_2:
        "Studied concepts such as pointers, memory management, advanced programming language structures, operator overloading, iterators, multiple inheritance, polymorphism and virtual function.",
    },
    {
      title: "Cap Computing Project",
      point_1:
        "Collaborated with team of 5 to design and create Makelist: a web app that allows users to customize their grocery list based on preferences.",
      point_2:
        "Computer system implementation, testing, verification and validation of results.",
      point_3: "Written reports and oral presentations in a technical setting.",
    },
    {
      title: "Software Engineering",
      point_1:
        "Fundamentals of software design and development, software implementation strategies, object-oriented design techniques, functional design techniques, design patterns, design process, source control, testing.",
      point_2:
        "Conducted Comprehensive JUnit testing over a two-week period ensuring robustness and identifying and fixing bugs.",
      point_3:
        "Worked as a developer and worked with a team in the design, development and delivery of a Learning Management System using SCRUM methodology.",
    },
  ];

  return (
    <div className="bg-white-100 container mx-auto my-20 p-4">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">
        Relavent Course Work
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            data-aos="flip-up"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <ul>
              <li className="mt-2">{project.point_1}</li>
              <li className="mt-2">{project.point_2}</li>
              <li className="mt-2">{project.point_3}</li>
            </ul>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
