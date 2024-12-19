import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin } from "react-icons/fi";
import {
  SiGithub,
  SiGmail,
  SiFacebook,
  SiLinkedin,
  SiMinutemailer,
} from "react-icons/si";
import {
  FaFileDownload,
  FaLaptop,
  FaStaylinked,
  FaDatabase,
  FaMobileAlt,
  FaRegCheckSquare,
  FaRegFileCode,
  FaLinode,
} from "react-icons/fa";
import { Md4gPlusMobiledata } from "react-icons/md";
import emailjs from "emailjs-com"; // Import emailjs

// EmailJS initialization
const SERVICE_ID = "service_9v61gpl";
const TEMPLATE_ID = "template_nstq0ql";
const USER_ID = "TB8B0wKlKLnanOpkz";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="container mx-auto my-20 p-4 flex justify-between items-center">
      <div>
        <div className="min-h-screen bg-transparent px-4 py-12 text-zinc-50">
          <Logo />
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

      <div className="relative h-[500px] w-[400px] flex items-center">
        {cards.map((card, index) => (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        ))}
      </div>
    </div>
  );
};

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
        return [swipedCard, ...remainingCards]; // Move the swiped card to the back
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

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Abdullah.{" "}
      <span className="text-zinc-400">I am a fullstack software engineer!</span>
    </h1>
    <a
      href="AbdullahBueno_resume_onepage.pdf"
      download="AbdullahBueno_Resume.pdf"
    >
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FaFileDownload /> Download Resume
      </button>
    </a>
  </Block>
);

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
        className="col-span-6 bg-violet-400 md:col-span-3"
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
        className="col-span-6 bg-green-600 md:col-span-3"
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
        className="col-span-6 bg-red-500 md:col-span-3"
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
        className="col-span-6 bg-blue-500 md:col-span-3"
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

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaLaptop style={{ color: "orange", fontSize: "1.2rem" }} />
          <span>Frontend</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaDatabase style={{ color: "violet", fontSize: "1.2rem" }} />
          <span>Backend</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaMobileAlt style={{ color: "purple", fontSize: "1.2rem" }} />
          <span>Mobile Development</span>
        </li>
      </ul>

      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegFileCode style={{ fontSize: "1.2rem" }} />
          <span>JS/TS/C++/C#</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaLinode style={{ color: "#3f64e2", fontSize: "1.2rem" }} />
          <span>
            Node/Nest
            <br />
            ExpressJS/Flask
          </span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <Md4gPlusMobiledata
            style={{ color: "#f0f01a", fontSize: "1.2rem" }}
          />
          <span>Ionic/Kotlin</span>
        </li>
      </ul>

      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Problem Solving</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Creative Thinking</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Communication</span>
        </li>
      </ul>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="h-40 col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">
      Columbia, South Carolina
    </p>
  </Block>
);

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
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
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

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};
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
export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "/imgs/abueno_kick.jpg",
  },
  {
    id: 2,
    url: "/imgs/Abueno.jpg",
  },
  {
    id: 3,
    url: "/imgs/abueno_grad.jpg",
  },
];

const NOTIFICATION_TTL = 5000;

const Notification = ({ id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

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
  return "buenobusiness803@gmail.com";
}

function openNewPage(url) {
  window.open(url, "_blank").focus();
}
