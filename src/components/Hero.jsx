import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {isMobile ? (
        // Mobile-specific content
        <div className="absolute inset-0 top-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aly</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I'm a Software Developer who specializes in creating innovative solutions for web and mobile platforms.
          </p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-[#915EFF] text-white rounded-lg shadow-lg"
          >
            Learn More About Me
          </motion.a>
        </div>
      ) : (
        // Desktop content
        <>
          <div
            className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Aly</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I'm a Software Developer <br className="sm:block hidden" />
                bringing ideas to life with code.
              </p>
            </div>
          </div>
          <ComputersCanvas />
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
