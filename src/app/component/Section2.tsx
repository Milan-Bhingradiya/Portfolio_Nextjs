import Image from "next/image";
import meImage from "../../../public/me.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Section2() {
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

  const paragraphs = [
    "I am a passionate and dynamic AI/ML Engineering student currently in the fourth semester at LDCE College of Engineering",
    "I love exploring every detail, no matter how small. My passion is digging into how things work – uncovering the hidden details that often get overlooked.",
    "I started this learning journey eager to know more,driven by a strong curiosity about the endless possibilities of AI and ML. During my studies, I've gotten better at the latest technologies, dived into tricky algorithms, and untangled the secrets of data science.",
  ];

  const TypewriterEffect = ({ text, delay = 0 }: any) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      text.slice(0, latest)
    );

    useEffect(() => {
      if (!isVisible) return;

      const controls = animate(count, text.length, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      });
      return controls.stop;
    }, [text, isVisible]);

    return <motion.p>{displayText}</motion.p>;
  };

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
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        iteration += 1;
        if (iteration > "WHO AM I ?".length + 1) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="h-[90vh] md:h-[120vh] ">
      {" "}
      <div className="mt-28 md:mt-48"></div>
      <div ref={sectionRef}>
        <motion.div
          className="sm:mt-20 mb-5 flex flex-row justify-center"
          variants={titleVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div className="flex space-x-2 text-4xl font-extrabold sm:text-xl md:2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
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
                            return letters[Math.floor(Math.random() * 26)];
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

        <div className="flex flex-row justify-center items-center m-2 ">
          {/* //flex justify-center */}
          <div className=" w-[100%] sm:w-[70%] ">
            {/* Image below */}
            {/* <div className="bg-primary2 float-left md:mr-10 bordr  flex flex-row justify-center items-center  h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px] "> */}
            <Image
              className="  object-contain h- p-0 float-left xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6    h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px]"
              src={meImage}
              alt="myimage"
            ></Image>
            {/* </div> */}

            <div className="">
              {/* discription */}
              <motion.div
                className="text-white p-1 xs:p-2 sm:p-5 text-justify font-sans sm:font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {paragraphs.map((text, index) => (
                  <div key={index} className="mb-4">
                    <TypewriterEffect text={text} delay={index * 2.5} />
                  </div>
                ))}
                {/*               
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 8 }}
              >
                Email : milanbhingradiya00@gmail.com
                <br />
                Phone : 9016064322
              </motion.div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
