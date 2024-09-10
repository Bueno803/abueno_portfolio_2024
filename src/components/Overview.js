import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiGmail, SiFacebook, SiLinkedin } from "react-icons/si";
import {
  FaLaptop,
  FaDatabase,
  FaMobileAlt,
  FaRegCheckSquare,
  FaRegFileCode,
  FaLinode,
} from "react-icons/fa";
import { Md4gPlusMobiledata } from "react-icons/md";
// import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
// import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

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
          {/* <Footer /> */}
        </div>
        {/* <h1 className="bg-gradient-to-r from-violet-400 via-rose-600 to-amber-300 inline-block text-transparent bg-clip-text text-4xl font-bold">
          Hi, I'm [Your Name]
        </h1>
        <p></p>
        <p className="bg-gradient-to-r from-amber-400 via-rose-600 to-violet-300 inline-block text-transparent bg-clip-text mt-4 text-lg">
          I’m a software engineer with experience in [Your Experience]...
        </p> */}
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
      class="flex group text-pink-500 transition-all duration-300 ease-in-out"
      href="#"
    >
      <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        Contact me
      </span>
      <FiArrowRight className="relative top-1.5 left-1" />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
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
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    {/* <p> */}

    <div className="flex flow-row space-x-2">
      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaLaptop style={{ color: "orange", fontSize: "1.2rem" }} />

          <span>Frontend</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaDatabase style={{ color: "violet", fontSize: "1.2rem" }} />
          <span>Backend</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaMobileAlt style={{ color: "purple", fontSize: "1.2rem" }} />
          <span>Mobile Development</span>
        </li>
      </ul>

      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegFileCode style={{ fontSize: "1.2rem" }} />
          <span>JS/TS/C++/C#</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaLinode style={{ color: "#3f64e2", fontSize: "1.2rem" }} />
          <span>Node/Nest/ExpressJS/Flask</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <Md4gPlusMobiledata
            style={{ color: "#f0f01a", fontSize: "1.2rem" }}
          />
          <span>Ionic/Kotlin</span>
        </li>
      </ul>
      {/* </div> */}
      {/* <div className="absolute flex items-end "> */}
      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Problem Solving</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Creative Thinking</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <FaRegCheckSquare style={{ color: "#34D399", fontSize: "1.2rem" }} />
          <span>Communication</span>
        </li>
      </ul>
    </div>

    {/* My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span> */}
    {/* </p> */}
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">
      Columbia, South Carolina
    </p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
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
export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
