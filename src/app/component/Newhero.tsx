import HeroSvg from "../heroSvg";

import { motion} from "framer-motion";
import { Playfair_Display, Dancing_Script } from 'next/font/google';

// Initialize fonts
const playfair = Playfair_Display({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function Newhero() {
    // Split the name into first and last name for mobile responsiveness
    const firstName = "Milan".split("");
    const lastName = "Bhingradiya".split("");
    const descriptionText = "FullStack Developer, Bringing Ideas to Life through Code and Design.".split("");

    // Simple animation for name
    const nameContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const nameLetterVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            rotate: -20,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                mass: 0.75,
                stiffness: 100
            }
        }
    };

    // Complex animation for description
    const descriptionContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.2
            }
        }
    };

    const descriptionLetterVariants = {
        hidden: {
            opacity: 0,
            y: -100,
            x: Math.random() * 50 - 25,
            rotate: Math.random() * 180,
            scale: 2,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                mass: 0.4,
                stiffness: 150,
                duration: 0.6
            }
        }
    };

    return (
      <div className="relative h-[92vh] md:h-[90vh] overflow-hidden ">
        <div className="p-48 mx-100 pt-45 ">
          <HeroSvg/>
          <motion.div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`${dancingScript.className} tracking-wide text-3xl md:text-4xl text-center font-medium text-[#e4e4e4] italic`}
              >
                Hii, I&apos;m
              </motion.span>

              <div className="overflow-hidden py-2">
                <motion.div
                  className="flex justify-center flex-col md:flex-row"
                  variants={nameContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* First Name */}
                  <div className="flex justify-center">
                    {firstName.map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={nameLetterVariants}
                        className={`${dancingScript.className} text-6xl md:text-7xl xl:text-8xl font-bold 
                                              relative cursor-pointer
                                              bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 
                                              bg-clip-text text-transparent`}
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: {
                            rotate: {
                              repeat: Infinity,
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Add space between first and last name on desktop */}
                  <motion.span 
                    variants={nameLetterVariants}
                    className="hidden md:inline text-6xl md:text-7xl xl:text-8xl"
                  >
                    &nbsp;
                  </motion.span>

                  {/* Last Name */}
                  <div className="flex justify-center">
                    {lastName.map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={nameLetterVariants}
                        className={`${dancingScript.className} text-6xl md:text-7xl xl:text-8xl font-bold 
                                              relative cursor-pointer
                                              bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 
                                              bg-clip-text text-transparent`}
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: {
                            rotate: {
                              repeat: Infinity,
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="flex justify-center flex-wrap"
              variants={descriptionContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {descriptionText.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={descriptionLetterVariants}
                  className={`${dancingScript.className} text-xl md:text-2xl text-[#c9c9c9]`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
}