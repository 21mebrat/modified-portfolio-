import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 text-left h-full px-3  md:w-1/2">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 sm:hidden xl:flex xl:max-w-none pointer-events-none select-none"
          >
            Hi, I'm <br /> Matebie {" "}
            <span className="text-green-400">Mebrat</span>
          </motion.h1>
          <h2 className="text-2xl md:text-3xl text-white">
            I’m a&nbsp;
            <span className="text-green-500 font-semibold">
              <Typewriter
                words={['Full Stack Developer', 'Creative Coder', 'Next.js Expert', 'Software Engineer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  text-justify text-white"
          >
            Passionate about building modern, scalable, and intuitive web applications that solve real-world problems.My expertise spans the entire development lifecycle - from crafting pixel-perfect UIs with React & Next.js to engineering robust backend systems with Node.js, Express, and PostgreSQL.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full flex-1 max-w-[737px] max-h-[678px] absolute -bottom-32 md:bottom-0 md:-right-44 lg:-right-10 xl:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;




const SecondHome = () => {
  return (
    <main className="bg-primary/60m min-h-full bg-[url('/homeMebrat.png')] bg-cover bg-[center_10%] xl:bg-none">
      <div
        id="home"
        className="bg-primary/60m min-h-full "
      >
        {/* text */}
        <div className="w-full min-h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pb-50">
          <div className="min-h-full text-center flex flex-col justify-center pt-20 pb-25 md:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Hi, I'm <br /> Mebrat {" "}
              <span className="text-green-400">Matebie</span>
            </motion.h1>
            <h2 className="text-2xl md:text-3xl text-white">
              I’m a&nbsp;
              <span className="text-green-500 font-semibold">
                <Typewriter
                  words={['Full Stack Developer', 'Creative Coder', 'Next.js Expert', 'Software Engineer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  text-justify text-white"
            >
              Passionate about building modern, scalable, and intuitive web applications that solve real-world problems.My expertise spans the entire development lifecycle - from crafting pixel-perfect UIs with React & Next.js to engineering robust backend systems with Node.js, Express, and PostgreSQL.
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1280px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />

          {/* particles */}
          <ParticlesContainer />

          {/* avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
      {/* About */}
      <div
        id="about"
      >
        about me
      </div>
    </main>
  );
};

