"use client";
// import meImage from "../../../public/me.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  GraduationCap,
  Heart,
  Code,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import meImage from "../../../public/me.png";
import milan from "../../../public/milan.jpg";

export default function WhoAmI1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);




  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [titleText, setTitleText] = useState("WHO AM I ?");

  const titleVariants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 1.2,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 20,
      rotateX: 90,
      color: "#60A5FA",
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      color: ["#60A5FA", "#F9FAFB", "#818CF8", "#F9FAFB"],
      transition: {
        duration: 0.8,
        ease: "easeOut",
        color: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
        },
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      color: "#60A5FA",
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    if (isVisible) {
      let iteration = 0;
      const interval = setInterval(() => {
        setTitleText((prev) =>
          "WHO AM I ?"
            .split("")
            .map((_, index) => {
              if (iteration > index) {
                return "WHO AM I ?".split("")[index];
              }
              return letters[Math.abs(Math.floor(Math.random() * 26))];
            })
            .join("")
        );

        iteration += 1;
        if (iteration > "WHO AM I ?".length + 1) {
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="p-12 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[320px,1fr] gap-20 items-center"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-square rounded-full overflow-hidden flex justify-center items-center bg-gray-900 p-2">
            <Image
              src={milan}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////// */}

        <div className="space-y-8">
          <div ref={sectionRef}>
            <motion.div
              className="mt-5 mb-5 flex flex-row justify-left items-center space-x-2"
              variants={titleVariants}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
            >
              <motion.div className=" flex space-x-1 text-4xl font-extrabold sm:text-xl md:2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                {titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    whileHover="hover"
                    className="cursor-pointer inline-block"
                    onMouseEnter={() => {
                      let iteration = 0;
                      const interval = setInterval(() => {
                        setTitleText((prev) =>
                          prev
                            .split("")
                            .map((letter, i) => {
                              if (i === index) {
                                return letters[
                                  Math.abs(Math.floor(Math.random() * 26))
                                ];
                              }
                              return letter;
                            })
                            .join("")
                        );
                        iteration += 1;
                        if (iteration > 5) {
                          clearInterval(interval);
                          setTitleText((prev) =>
                            prev
                              .split("")
                              .map((letter, i) => {
                                if (i === index) {
                                  return "WHO AM I ?".split("")[i];
                                }
                                return letter;
                              })
                              .join("")
                          );
                        }
                      }, 50);
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mt-3"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4 }}
            />
          </div>

          <motion.div
            className="space-y-5 text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <p>AI/ML Engineering Student at LDCE</p>
            </div>
            <div className="flex items-center gap-4">
              <Code className="w-6 h-6 text-blue-400" />
              <p>Full Stack Developer with 1 years of experience</p>
            </div>
            <div className="flex items-center gap-4">
              <Heart className="w-6 h-6 text-blue-400" />
              <p>Passionate about Machine Learning and Deep Learning</p>
            </div>
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <p>Always learning and exploring new technologies</p>
            </div>
          </motion.div>
          {/* 
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="pt-6"
           >
             <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md text-lg font-medium transition-all duration-200 transform hover:scale-105">
               Learn More
               <ChevronDown className="ml-3 h-5 w-5" />
             </button>
           </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
}
