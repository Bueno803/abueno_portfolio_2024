import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tilt } from "react-tilt";
import { FiX, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    url: "/imgs/UPFapp.png",
    title: "UPF Client Management System",
    summary: "Full-stack web app for martial arts client management",
    content:
      "Built and deployed a custom Ionic web application with a serverless NestJS backend on Google Cloud Functions. Features include role-based authentication, belt progression tracking, automated test generation, class attendance management, and persistent performance metadata storage.",
    tags: ["TypeScript", "NestJS", "Ionic", "Google Cloud", "Firebase"],
    repoLink: "https://github.com/Bueno803/UPF_App",
  },
  {
    id: 2,
    url: "/imgs/goodnewsy.png",
    title: "Web-Based Trivia Game",
    summary: "Interactive trivia platform with admin CMS and daily content",
    content:
      "Developed two prototypes (v1 in Phaser; v2 rewritten in Next.js with Tailwind CSS). Engineered a scalable backend using SQL and a custom WordPress plugin serving as a headless CMS API. Set up AWS deployment pipelines and Cloudflare CDN for fast global delivery. Implemented user authentication, progression tracking, and raffle entry system.",
    tags: ["Next.js", "SQL", "AWS", "Cloudflare", "WordPress", "Phaser"],
    repoLink: null,
  },
  {
    id: 3,
    url: "/imgs/OFFICIAL_PAFF_LOGO_WHT.png",
    title: "PAFF Mobile Application",
    summary: "Mobile app for the Pan African Film & Arts Festival",
    content:
      "Designed UI/UX for mobile and web experiences. Developed a RESTful backend managing user authentication, tier subscription access, and Stripe payment processing with webhook listeners. Built a PHP API to sanitize and transform third-party data. Implemented SEO, accessibility best practices, and a favorites/bookmarking feature.",
    tags: ["TypeScript", "Ionic", "PHP", "Stripe", "Capacitor"],
    repoLink: null,
  },
  {
    id: 4,
    url: "/imgs/makelist.png",
    title: "Makelist",
    summary: "Collaborative grocery list app with dietary preferences",
    content:
      "Collaborated with a team of 5 to design and create a web app that allows users to create accounts and customize their grocery list based on dietary preferences. Handled computer system implementation, testing, verification, and validation of results.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    repoLink: "https://github.com/Bueno803/USCWebApp",
  },
  {
    id: 5,
    url: "/imgs/platformer.png",
    title: "Lua Platformer",
    summary: "2D platformer with physics engine and collision detection",
    content:
      "A Lua Platformer where I implemented challenging obstacles and enemies with a goal at the end, utilizing collision detection and a physics engine to offer responsive realistic interactions.",
    tags: ["Lua", "LÖVE2D", "Physics Engine"],
    repoLink: "https://github.com/Bueno803/lua-projects/tree/main/platformer",
  },
  // {
  //   id: 6,
  //   url: "/imgs/NFA.png",
  //   title: "No Epsilon Transition NFA",
  //   summary: "Automata theory implementation in C++",
  //   content:
  //     "Utilized basic theoretical principles of computing as modeled by formal languages, grammar, automata, and Turing machines to create a no-epsilon-transition NFA program.",
  //   tags: ["C++", "Automata Theory", "Algorithms"],
  //   repoLink: "https://www.youtube.com/watch?v=84oNUttWlN4",
  // },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="bg-primary" style={{ width: "100%" }}>
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-white text-3xl font-bold mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer"
            >
              <Tilt
                className="Tilt h-full"
                options={{ max: 15, scale: 1.02, speed: 400 }}
              >
                <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800 hover:border-zinc-500 transition-colors h-full">
                  {/* Project Image */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={project.url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-800 border border-zinc-600 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto cursor-default shadow-2xl"
              >
                {/* Header Image */}
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedProject.url}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Close project details"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-white text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    {selectedProject.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Repo Link */}
                  {selectedProject.repoLink && (
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700 text-white font-medium hover:bg-zinc-600 transition-colors"
                    >
                      <FiExternalLink /> View Project
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
