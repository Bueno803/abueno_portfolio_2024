import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin, FiChevronDown } from "react-icons/fi";
import {
  SiGithub,
  SiGmail,
  SiFacebook,
  SiLinkedin,
  SiMinutemailer,
} from "react-icons/si";
import {
  FaFileDownload,
  FaStaylinked,
} from "react-icons/fa";
import emailjs from "emailjs-com";

// EmailJS initialization
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

// Typing animation roles
const ROLES = [
  "Fullstack Engineer",
  "Backend Developer",
  "Data Scientist",
  "Mobile Developer",
];

const Overview = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="container mx-auto my-20 p-4 flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="flex-1">
        <div className="min-h-screen bg-transparent px-4 py-12 text-zinc-50">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{
              staggerChildren: 0.05,
            }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
          >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
            <LocationBlock />
            <EmailListBlock />
          </motion.div>
        </div>
      </div>

      <div className="relative h-[500px] w-[400px] items-center shrink-0 hidden lg:flex">
        {cards.map((card) => (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        ))}
      </div>
    </div>
  );
};

// --- Swipeable Cards ---
const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => {
        const swipedCard = pv.find((card) => card.id === id);
        const remainingCards = pv.filter((card) => card.id !== id);
        return [swipedCard, ...remainingCards];
      });
    }
  };

  return (
    <motion.img
      src={url}
      alt="Swipe card"
      className="absolute h-96 w-72 origin-bottom rounded-lg bg-white object-cover shadow-xl"
      style={{
        x,
        rotate,
        transition: "0.125s transform",
        opacity,
        zIndex: isFront ? 1 : 0,
        scale: isFront ? 1 : 0.98,
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    />
  );
};

const cardData = [
  { id: 1, url: "/imgs/abueno_kick.jpg" },
  { id: 2, url: "/imgs/Abueno.jpg" },
  { id: 3, url: "/imgs/abueno_grad.jpg" },
];

// --- Typing Animation ---
const TypingAnimation = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentRole.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          }, 80);
        } else {
          // Pause at full text, then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 40);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    handleTyping();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-zinc-400">
      I'm a <br/>{displayText}
      <span className="inline-block w-[2px] h-[1em] bg-zinc-400 ml-1 animate-pulse" />
    </span>
  );
};

// --- Resume Dropdown ---
const ResumeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const resumes = [
    {
      label: "General Resume",
      file: "/resumes/9-28-25_New_ABUENO_RESUME.docx",
      download: "Abdullah_Bueno_Resume.docx",
    },
    {
      label: "Backend Resume",
      file: "/resumes/ABUENO_RESUME_backend_copy.docx",
      download: "Abdullah_Bueno_Backend_Resume.docx",
    },
    {
      label: "Data Science Resume",
      file: "/resumes/9-28-25_ABUENO_RESUME_DATASCIENCE.docx",
      download: "Abdullah_Bueno_DataScience_Resume.docx",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FaFileDownload /> Download Resume <FiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-zinc-700 bg-zinc-800 shadow-xl z-20 overflow-hidden"
          >
            {resumes.map((resume, idx) => (
              <a
                key={idx}
                href={resume.file}
                download={resume.download}
                className="block px-4 py-3 text-sm text-zinc-200 hover:bg-zinc-700 transition-colors border-b border-zinc-700 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {resume.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Bento Grid Block ---
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

// --- Terminal Greeting ---
const TerminalGreeting = () => (
  <div className="mb-6 font-mono text-sm bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 w-full">
    <div className="flex items-center gap-2 mb-2">
      <span className="w-3 h-3 rounded-full bg-red-500" />
      <span className="w-3 h-3 rounded-full bg-yellow-500" />
      <span className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <div className="text-zinc-400">
      <span className="text-green-400">$</span> whoami
    </div>
    <div className="text-zinc-200 mt-1">
      <span className="text-purple-400">&gt;</span> abdullah_bueno
      <span className="inline-block w-[6px] h-[14px] bg-zinc-400 ml-1 animate-pulse align-middle" />
    </div>
  </div>
);

// --- Header Block with Typing Animation ---
const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <TerminalGreeting />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Abdullah.{" "}
      <TypingAnimation />
    </h1>
    <ResumeDropdown />
  </Block>
);

// --- Socials Block ---
const SocialsBlock = () => {
  const [gmailOpen, isGmailOpen] = useState(false);
  const [linkOpen, isLinkOpen] = useState(false);
  const [gitOpen, isGitOpen] = useState(false);
  const [faceOpen, isFaceOpen] = useState(false);

  return (
    <>
      <Block
        onClick={() => isLinkOpen(true)}
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-violet-400 md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        onClick={() => isGitOpen(true)}
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        onClick={() => isGmailOpen(true)}
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <SiGmail />
        </a>
      </Block>
      <Block
        onClick={() => isFaceOpen(true)}
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiFacebook />
        </a>
      </Block>
      <GmailModal isOpen={gmailOpen} setIsOpen={isGmailOpen} />
      <GitModal isOpen={gitOpen} setIsOpen={isGitOpen} />
      <FaceModal isOpen={faceOpen} setIsOpen={isFaceOpen} />
      <LinkModal isOpen={linkOpen} setIsOpen={isLinkOpen} />
    </>
  );
};

// --- About Block ---
// --- Skills Data ---
const skillCategories = [
  {
    title: "Languages",
    color: "from-blue-400 to-cyan-400",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C#", "Java", "PHP", "SQL", "R", "Kotlin"],
  },
  {
    title: "Frameworks",
    color: "from-purple-400 to-pink-400",
    skills: ["React", "Angular", "Next.js", "NestJS", "Node.js", "Express", "Ionic", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    color: "from-orange-400 to-yellow-400",
    skills: ["Google Cloud", "AWS", "Cloudflare", "Nginx", "Firebase", "Git", "WordPress", "Power BI"],
  },
  {
    title: "Soft Skills",
    color: "from-green-400 to-emerald-400",
    skills: ["Problem Solving", "Communication", "Creative Thinking", "Adaptability", "Attention to Detail", "Time Management"],
  },
];

// --- About Block (Floating Tag Cloud) ---
const AboutBlock = () => (
  <Block className="col-span-12 overflow-hidden">
    <div className="space-y-6">
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                className="px-3 py-1.5 text-sm rounded-full border border-zinc-600 bg-zinc-700/50 text-zinc-200 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: catIndex * 0.1 + skillIndex * 0.03,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(99, 102, 241, 0.3)",
                  borderColor: "rgba(99, 102, 241, 0.6)",
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                // Gentle floating animation with staggered timing
                style={{
                  animationName: "float",
                  animationDuration: `${3 + (skillIndex % 3)}s`,
                  animationDelay: `${skillIndex * 0.2}s`,
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Block>
);

// --- Location Block ---
const LocationBlock = () => (
  <Block className="h-40 col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">
      Columbia, South Carolina
    </p>
  </Block>
);

// --- Email Block ---
const EmailListBlock = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send your message. Please try again.");
      }
    );
  };

  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Send me a message!</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col w-1/2">
            <label className="mb-1 text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="mb-1 text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
              required
            />
          </div>
        </div>

        {/* Message input field */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
            required
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
          >
            <FiMail /> Send
          </button>
        </div>
      </form>
    </Block>
  );
};

// --- Modals ---
const GmailModal = ({ isOpen, setIsOpen }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <SiMinutemailer className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <SiMinutemailer />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">Gmail</h3>
              <p className="text-center mb-6">buenobusiness803@gmail.com</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setNotifications((pv) => [
                      copyToClipboard("buenobusiness803@gmail.com"),
                      ...pv,
                    ]);
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Copy email to clipboard
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};

const LinkModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 bg-violet-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FaStaylinked className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <SiLinkedin />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">LinkedIn</h3>
              <p className="text-center mb-6">Visit my LinkedIn page!</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    openNewPage("https://www.linkedin.com/in/abueno803/");
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Visit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const GitModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-green-300 bg-green-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <SiGithub className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-green-600 grid place-items-center mx-auto">
                <SiGithub />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">GitHub</h3>
              <p className="text-center mb-6">Visit my GitHub!</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    openNewPage("https://github.com/Bueno803");
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Visit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FaceModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-blue-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <SiFacebook className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blue-500 grid place-items-center mx-auto">
                <SiFacebook />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">Facebook</h3>
              <p className="text-center mb-6">Visit my Facebook!</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    openNewPage("https://www.facebook.com/abdullah.bueno");
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Visit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overview;

// --- Utilities ---
const NOTIFICATION_TTL = 5000;

const Notification = ({ id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      {/* <FiCheckSquare className=" mt-0.5" /> */}
      <span>copied to clipboard</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        {/* <FiX /> */}
      </button>
    </motion.div>
  );
};

function copyToClipboard(copiedText) {
  navigator.clipboard.writeText(copiedText);
  return { id: Math.random().toString(36).slice(2) };
}

function openNewPage(url) {
  window.open(url, "_blank").focus();
}
