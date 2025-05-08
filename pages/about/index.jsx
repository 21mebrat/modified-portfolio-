import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import Image from "next/image";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          SiAdobephotoshop,
          SiMongodb,
          SiPostgresql,
          SiTailwindcss,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "React Developer ",
        stage: "2022 - 2025",
      },
      {
        title: "NextJs And Expressjs ",
        stage: "2023 - 2025",
      },
      {
        title: "Intern - Debre Markos University ICT Center",
        stage: "2024 - 2025",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Software Engineer - Debre Markos University",
        stage: "2025",
      },

    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex absolute top-10 bottom-0 -left-[90px]"
      >
        <div className="flex xl:max-w-none pointer-events-none select-none">
          <Image
            src="/mebratRight.png"
            alt="avatar"
            width={737}
            height={678}
            className="translate-z-0 w-full h-full"
          />
        </div>
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center relative xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 hidden xl:flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 "
          >
            Clean code sparks <span className='text-green-500'>brilliant</span> solutions
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-4 px-2 xl:px-0 text-justify text-white"
          >
            As a passionate Software Engineering student at Debre Markos University, I’ve been continuously growing my skills as a Full Stack Developer. Over the years, I’ve  built real-world applications that solve practical problems. From frontend design to backend development, I love turning ideas into impactful digital experiences.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={1} />
                </div>
                <div className="text-xs uppercase  max-w-[100px]">
                  Years of experience.
                </div>
              </div>


              {/* projects */}
              <div className="relative flex-1 after:w-[1px]">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase  max-w-[100px]">
                  Finished projects.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className=" 
                 grid 
                 grid-cols-3
  sm:grid-cols-3
  md:grid-cols-4
  gap-4
  md:gap-6
  lg:gap-8
  justify-items-center
  px-4
  sm:px-8
  py-6
  group">
                  {item.icons?.map((Icon, iconI) => (
                    <div
                      key={iconI}
                      className="relative inline-block transition-all duration-300 hover:duration-100"
                    >
                      <div className="
        text-4xl
        text-white
        hover:text-[#FFD700]
        transform
        transition-all
        duration-300
        hover:scale-125
        hover:-translate-y-2
        p-3
        rounded-2xl
        bg-gradient-to-br
        from-white/5
        to-transparent
        hover:from-white/10
        hover:shadow-glow
        cursor-pointer
        relative
        z-10
      ">
                        <Icon />
                      </div>

                      {/* Animated background effect */}
                      <div className="
        absolute
        inset-0
        rounded-2xl
        bg-[conic-gradient(from_90deg_at_50%50%,#ffffff80_0%,#ffffff00_50%)]
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        blur-[20px]
        -z-0
      " />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
