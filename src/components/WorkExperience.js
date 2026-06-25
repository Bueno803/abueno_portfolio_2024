import { TbBinaryTree } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Software Engineer (Part Time)",
    company: "Binary Holdings Group",
    date: "Dec 2023 – April 2026",
    description:
      "Designed and deployed an internal email server with SSL/TLS configuration. Configured Nginx reverse proxy to route RESTful and SOAP API integrations across multiple stacks. Enforced secure data delivery through API gateway configuration with encryption and credential management. Consulted directly with clients to scope backend integration requirements.",
    tags: [
      { label: "#Nginx", colors: "from-green-500 via-green-600 to-green-700" },
      { label: "#REST/SOAP APIs", colors: "from-blue-500 via-blue-600 to-blue-700" },
      { label: "#SSL/TLS", colors: "from-red-500 via-red-600 to-red-700" },
      { label: "#DevOps", colors: "from-purple-500 via-purple-600 to-purple-700" },
    ],
    icon: "binary",
    contentStyle: {
      background: "linear-gradient(#050816, #12314A)",
      color: "#fff",
    },
    iconStyle: {
      background: "linear-gradient(#050816, #12314A)",
      color: "#fff",
    },
  },
  {
    title: "Software Engineer (Contracted)",
    company: "PAFF.org — Mobile & Web Application",
    date: "Dec 2023 – May 2024; Nov 2024 – April 2026",
    description:
      "Designed UI/UX for mobile and web experiences. Developed a RESTful backend managing user authentication, tier subscription access, and Stripe payment processing with webhook listeners. Built a PHP API to sanitize and transform third-party data. Optimized performance through code refactoring to reduce load times.",
    tags: [
      { label: "#TypeScript", colors: "from-blue-400 via-blue-500 to-blue-600" },
      { label: "#PHP", colors: "from-indigo-400 via-indigo-500 to-indigo-600" },
      { label: "#Stripe", colors: "from-purple-400 via-purple-500 to-purple-600" },
      { label: "#Ionic", colors: "from-sky-400 via-sky-500 to-sky-600" },
      { label: "#REST APIs", colors: "from-green-400 via-green-500 to-green-600" },
    ],
    icon: "binary",
    contentStyle: {
      background: "linear-gradient(#050816, #B7B8BC)",
      color: "#fff",
    },
    iconStyle: {
      background: "linear-gradient(#050816, #B7B8BC)",
      color: "#fff",
    },
  },
  {
    title: "Software Engineer (Contracted)",
    company: "Goodnewsy.org — Web-Based Trivia Game",
    date: "Jun 2024 – July 2025",
    description:
      "Developed two prototypes (v1 in Phaser; v2 rewritten in Next.js with Tailwind CSS). Engineered a scalable backend using SQL and a custom WordPress plugin for an admin interface. Set up AWS deployment pipelines and Cloudflare CDN for global delivery. Refined UX/UI for game flow, visual feedback, and responsive interactions.",
    tags: [
      { label: "#Next.js", colors: "from-zinc-400 via-zinc-500 to-zinc-600" },
      { label: "#SQL", colors: "from-orange-400 via-orange-500 to-orange-600" },
      { label: "#AWS", colors: "from-yellow-400 via-yellow-500 to-yellow-600" },
      { label: "#Cloudflare", colors: "from-amber-400 via-amber-500 to-amber-600" },
      { label: "#WordPress", colors: "from-blue-300 via-blue-400 to-blue-500" },
      { label: "#Phaser", colors: "from-pink-400 via-pink-500 to-pink-600" },
    ],
    icon: "binary",
    contentStyle: {
      background: "linear-gradient(#050816, #12314A)",
      color: "#fff",
    },
    iconStyle: {
      background: "linear-gradient(#050816, #12314A)",
      color: "#fff",
    },
  },
  {
    title: "Software Engineer (Contracted)",
    company: "University of Personal Fitness",
    date: "April 2022 – Nov 2025",
    description:
      "Deployed a serverless Node.js backend using NestJS on Google Cloud Functions for client data management, authentication, and belt progression tracking. Built and deployed a custom Ionic web application for centralized client management. Developed a secure belt progression platform with role-based auth, automated test generation, and persistent performance metadata.",
    tags: [
      { label: "#NestJS", colors: "from-red-400 via-red-500 to-red-600" },
      { label: "#Google Cloud", colors: "from-blue-400 via-blue-500 to-blue-600" },
      { label: "#Ionic", colors: "from-sky-400 via-sky-500 to-sky-600" },
      { label: "#TypeScript", colors: "from-blue-300 via-blue-400 to-blue-500" },
      { label: "#Firebase", colors: "from-orange-300 via-orange-400 to-orange-500" },
    ],
    icon: "upf",
    contentStyle: {
      background: "linear-gradient(#050816, #B7B8BC)",
      color: "#fff",
    },
    iconStyle: {
      background: "linear-gradient(#050816, #B7B8BC)",
      color: "#fff",
    },
  },
];

function WorkExperience() {
  return (
    <div className="container mx-auto my-20 p-4">
      <motion.h2
        className="text-white text-3xl font-bold mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={exp.contentStyle}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date={exp.date}
            iconStyle={exp.iconStyle}
            icon={
              exp.icon === "upf" ? (
                <img
                  src="/upfsm.jpg"
                  alt={exp.company}
                  className="rounded-full object-cover h-16"
                />
              ) : (
                <TbBinaryTree />
              )
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm mt-1 opacity-80">
              {exp.company}
            </h4>
            <p className="text-sm mt-3 leading-relaxed">{exp.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tags.map((tag, tagIndex) => (
                <p
                  key={tagIndex}
                  className={`text-[14px] bg-gradient-to-r ${tag.colors} inline-block text-transparent bg-clip-text`}
                >
                  {tag.label}
                </p>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default WorkExperience;
