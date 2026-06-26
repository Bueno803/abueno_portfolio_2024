import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCode, FiDatabase, FiLayers } from "react-icons/fi";

const resumes = [
  {
    id: "general",
    label: "General",
    description: "Full-stack software engineer resume",
    file: "/resumes/9-28-25_New_ABUENO_RESUME.pdf",
    download: "Abdullah_Bueno_Resume.pdf",
    icon: FiLayers,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Backend-focused with API & systems design",
    file: "/resumes/ABUENO_RESUME_backend.pdf",
    download: "Abdullah_Bueno_Backend_Resume.pdf",
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "datascience",
    label: "Data Science",
    description: "Data engineering & analytics focus",
    file: "/resumes/9-28-25_ABUENO_RESUME_DATASCIENCE.pdf",
    download: "Abdullah_Bueno_DataScience_Resume.pdf",
    icon: FiDatabase,
    color: "from-orange-500 to-yellow-500",
  },
];

const ResumePicker = () => {
  const [activeResume, setActiveResume] = useState(resumes[0]);

  return (
    <div className="container mx-auto my-20 p-4">
      <motion.h2
        className="text-white text-3xl font-bold mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Resumes
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Tab Buttons */}
        <div className="flex gap-2 mb-6">
          {resumes.map((resume) => {
            const Icon = resume.icon;
            const isActive = activeResume.id === resume.id;
            return (
              <button
                key={resume.id}
                onClick={() => setActiveResume(resume)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-700 text-white border border-zinc-500"
                    : "bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                <Icon className="text-lg" />
                <span className="hidden sm:inline">{resume.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Resume Card */}
        <motion.div
          key={activeResume.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl border border-zinc-700 bg-zinc-800 p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${activeResume.color} text-white`}>
                {activeResume.label}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Abdullah Bueno
              </h3>
              <p className="text-zinc-400 text-sm">
                {activeResume.description}
              </p>
            </div>
            <a
              href={activeResume.file}
              download={activeResume.download}
              className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-50 text-zinc-900 font-medium text-sm hover:bg-zinc-300 transition-colors"
            >
              <FiDownload />
              Download
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumePicker;
