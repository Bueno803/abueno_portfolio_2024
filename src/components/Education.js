// import StarCanvas from "./Starcanvas";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-primary">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      {/* <StarCanvas /> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[600px] overflow-hidden bg-neutral-200 flex rounded-lg"
    >
      {/* Left side: Description and Button */}
      <div className="relative z-10 w-3/5 p-6 flex flex-col justify-center rounded-l-lg">
        <h2 className="text-3xl font-bold uppercase mb-4 text-neutral-800">
          {card.title}
        </h2>
        <p className="mb-6 text-neutral-600">
          This is a brief description of the project. It can provide an overview
          or key details about what the project does.
        </p>
        <a
          href={card.repoLink}
          className="self-start py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repo
        </a>
      </div>

      {/* Right side: Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative right-2 top-1 w-6/12 h-72 transition-transform duration-300 hover:scale-105 rounded-r-lg"
      ></div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/galleryshooter.png",
    title: "Shooting Gallery",
    repoLink: "https://github.com/your-repo/shooting-gallery",
    id: 1,
  },
  {
    url: "/imgs/makelist.png",
    title: "Title 2",
    repoLink: "https://github.com/your-repo/project-2",
    id: 2,
  },
  {
    url: "/imgs/mobileEmulator.png",
    title: "Title 3",
    repoLink: "https://github.com/your-repo/project-3",
    id: 3,
  },
  {
    url: "/imgs/NFA.png",
    title: "Title 4",
    repoLink: "https://github.com/your-repo/project-4",
    id: 4,
  },
  {
    url: "/imgs/platformer.png",
    title: "Title 5",
    repoLink: "https://github.com/your-repo/project-5",
    id: 5,
  },
  {
    url: "/imgs/UPFapp.png",
    title: "Title 6",
    repoLink: "https://github.com/your-repo/project-6",
    id: 6,
  },
];
