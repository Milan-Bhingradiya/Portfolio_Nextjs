import HeroSvg from "../heroSvg";

import { motion} from "framer-motion";
import { Playfair_Display, Dancing_Script } from 'next/font/google';

// Initialize fonts
const playfair = Playfair_Display({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function Newhero() {
    // New animation variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            z: -100,
            rotateX: 180,
            scale: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            z: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 8,
                mass: 0.3,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const nameText = "Milan Bhingradiya".split("");

    return (
        <div className="relative overflow-hidden">
            {/* <div className="p-60 pt-45 bg-gradient-to-b from-black via-[#111111] to-[#0a0a0a] 

                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#1e3a5f]/10 before:to-transparent
                after:absolute after:inset-0 after:bg-gradient-to-l after:from-transparent after:via-[#1e3a5f]/10 after:to-transparent"> */}
            <div className="p-60 pt-45 "
>
                <HeroSvg />
                <motion.div
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    initial={{ y: -30, opacity: 0 }}
                    className="max-w-7xl mx-auto px-4 flex flex-col gap-6 items-center justify-center"
                >
                    <div className="flex flex-col items-center justify-center">
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`${dancingScript.className} tracking-wide text-3xl md:text-4xl text-center font-medium text-[#e4e4e4] italic`}
                        >
                            Hii, I&apos;m
                        </motion.span>
                        
                        <div className="overflow-hidden py-2 perspective-[1000px]">
                            <motion.div 
                                className="flex justify-center"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {nameText.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        variants={letterVariants}
                                        className={`${dancingScript.className} text-6xl md:text-7xl xl:text-8xl font-bold 
                                            relative cursor-pointer
                                            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 
                                            bg-clip-text text-transparent
                                            hover:animate-glitch`}
                                        whileHover={{
                                            scale: 1.5,
                                            rotateY: [0, 360],
                                            transition: {
                                                duration: 0.6,
                                                ease: "backOut"
                                            }
                                        }}
                                        style={{
                                            textShadow: "2px 2px 20px rgba(0, 100, 255, 0.2)",
                                        }}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className={`${dancingScript.className} text-xl md:text-2xl text-center text-[#c9c9c9] max-w-2xl`}
                    >
                        FullStack Developer, Bringing Ideas to Life through Code and Design.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}