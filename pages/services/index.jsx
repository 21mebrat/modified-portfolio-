import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text Section */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl xl:hidden"
          >
            My Services <span className="text-accent">.</span>
          </motion.h2>
          <div className="text-center hidden xl:flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-3xl md:text-4xl xl:text-5xl xl:mt-8"
            >
              Web Expertise <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base"
            >
              I specialize in crafting responsive websites and engaging user interfaces.
              From concept to deployment, I deliver modern web solutions using cutting-edge
              technologies like React and Next.js, ensuring optimal performance across all devices.
            </motion.p>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] lg:max-w-[75%] md:max-w-[85%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;