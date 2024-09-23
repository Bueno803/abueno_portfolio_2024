import React from "react";
import { Tilt } from "react-tilt";
import { TbBinaryTree } from "react-icons/tb";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiMaterialsScience } from "react-icons/gi";

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
      <h2 className=" text-white text-3xl font-bold mb-8" data-aos="fade-right">
        Work Experience
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(#050816, #12314A)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - 2024"
          iconStyle={{
            background: "linear-gradient(#050816, #B7B8BC)",
            color: "#fff",
          }}
          icon={
            <img
              src="/upfsm.jpg"
              className="rounded-full object-cover h-16"
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title">IT Support</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Personal Training
          </h4>
          <p>
            Managed the smooth operation of a diverse range of devices,
            including laptops, tablets, projectors, and audio equipment
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Hardware/Software management
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Attention To Detail
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Comminication
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{
            background: "linear-gradient(#050816, #B7B8BC)",
            color: "#fff",
          }}
          iconStyle={{
            background: "linear-gradient(#050816, #12314A)",
            color: "#fff",
          }}
          icon={
            <img
              src="/upfsm.jpg"
              className="rounded-full object-cover h-16"
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Desktop Application
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Personal Fitness
          </h4>
          <p>
            Created a desktop app that organizes client information, and a
            schedule feature that keeps track of client’s progression through a
            system for martial arts belt testing purposes
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #CSharp
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #SQL
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          contentStyle={{
            background: "linear-gradient(#050816, #12314A)",
            color: "#fff",
          }}
          iconStyle={{ background: "linear-gradient(#050816, #B7B8BC)" }}
          icon={
            <img
              src="/upfsm.jpg"
              className="rounded-full object-cover h-16"
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Web Application
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Personal Fitness
          </h4>
          <p>
            Created a web app with a fully integrated authentication system and
            backend to manage client’s and client progression for martials belt
            test purposes. Also implemented a tracking system to determine belt
            test readiness and autamated invitations.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Typescript
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Firebase
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Ionic
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Angular
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #NestJS
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Google Cloud
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          contentStyle={{
            background: "linear-gradient(#050816, #B7B8BC)",
            color: "#fff",
          }}
          iconStyle={{
            background: "linear-gradient(#050816, #12314A)",
            color: "#fff",
          }}
          icon={<TbBinaryTree />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Binary Holdings
          </h4>
          <p>
            Developed and integrated a new feature allowing users to favorite
            events within a mobile application
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Typescript
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Ionic
            </p>
            <p
              class={`text-[14px] bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 inline-block text-transparent bg-clip-text`}
            >
              #Capacitor
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Tilt className="Tilt" options={{ max: 25 }} key={index}>
            <div
              className="Tilt-inner bg-gray-200 p-6 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          </Tilt>
        ))}
      </div> */}
    </div>
  );
}

export default WorkExperience;
