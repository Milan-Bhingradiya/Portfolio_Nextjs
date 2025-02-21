import HeroSvg from "./hero/heroSvg";
import { motion } from "framer-motion";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Spotlight from "./hero/SpotLight";

// Initialize fonts
const playfair = Playfair_Display({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

// Function to generate deterministic random values
const seededRandom = (seed: number) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Function to precompute random transforms for a given string
const generateRandomTransforms = (text: string, seed: number) => {
  return text.split("").map((_, index) => {
    const transformSeed = seed + index;
    const x = Math.round(seededRandom(transformSeed) * 50 - 25); // Integer-based X
    const rotate = Math.round(seededRandom(transformSeed + 100) * 180); // Integer-based rotation
    return { x, rotate };
  });
};

export default function Newhero() {
  // Split the name into first and last name for mobile responsiveness
  const firstName = "Milan".split("");
  const lastName = "Bhingradiya".split("");
  const descriptionText =
    "Full@Stack@Developer,@Bringing@Ideas@to@Life@through@Code@and@Design.".split("");

  // Seed for deterministic randomization
  const seed = 1234;
  // const randomTransforms = generateRandomTransforms(descriptionText, seed);

  // Framer Motion Variants
  const nameContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const descriptionContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const nameLetterVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  const descriptionLetterVariants = {
    hidden: (custom: { x: number; rotate: number }) => ({
      opacity: 0,
      y: -100,
      x: custom.x || 0,
      rotate: custom.rotate || 0,
      scale: 2,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        mass: 0.4,
        stiffness: 150,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div className=" py-48 md:p-48 mx-1 md:mx-10 my-auto  ">
        <HeroSvg />
        <motion.div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`${dancingScript.className} tracking-wide text-3xl md:text-4xl text-center font-medium text-[#e4e4e4] italic`}
            >
              Hii, I&apos;m
            </motion.span>

            <div className="overflow-hidden pt-2 ">
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
                      className={`${dancingScript.className} text-6xl md:text-6xl xl:text-7xl font-bold
                        relative cursor-pointer bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
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
                      className={`${dancingScript.className} text-5xl md:text-6xl xl:text-7xl font-bold
                        relative cursor-pointer bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
                        bg-clip-text text-transparent`}
                      // goldan
                      // className={`${dancingScript.className} text-6xl md:text-7xl xl:text-8xl font-bold
                      //   relative cursor-pointer bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700
                      //   bg-clip-text text-transparent`}
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

              <motion.div
                className="flex justify-center flex-col md:flex-row py-4 md:py-0"
                variants={descriptionContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* lastine */}
                <div className="flex justify-center flex-wrap">
                  {descriptionText.map((letter, i) =>
                    letter === "@" ? (
                      <motion.span key={i}>&nbsp; &nbsp;</motion.span>
                    ) : (
                      <motion.span
                        key={i}
                        variants={nameLetterVariants}
                        // className={`${dancingScript.className} text-2xl md:text-3xl xl:text-4xl
                        //   relative cursor-pointer
                        //   bg-clip-text text-white`}
                        className={`${dancingScript.className} tracking-wide text-2xl md:text-3xl text-center font-medium text-[#e4e4e4] italic`}
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
                    )
                  )}
                </div>

                <motion.span
                  variants={nameLetterVariants}
                  className="hidden md:inline text-6xl md:text-7xl xl:text-8xl"
                >
                  &nbsp;
                </motion.span>
              </motion.div>
            </div>
          </div>

          {/* <motion.div
            className="flex justify-center flex-wrap"
            variants={descriptionContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {descriptionText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={randomTransforms[i]}
                variants={descriptionLetterVariants}
                className={`${dancingScript.className} text-xl md:text-2xl text-[#c9c9c9]`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
