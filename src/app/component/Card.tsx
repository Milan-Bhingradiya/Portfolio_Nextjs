import Image from 'next/image'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "../../app/page.css" 
// import "./Card.css"

export default function Card(props: any) {
  return (
    <AnimatePresence>
      <motion.div
        className={`
          h-[300px] w-[300px] m-8 xs:m-4 sm:m-10 
          bg-[#14161A] 
          rounded-[30px]
          transition-shadow duration-300 ease-in-out
          shadow-[10px_10px_20px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(255,255,255,0.1)]
          hover:shadow-[20px_20px_40px_rgba(0,0,0,0.6),-15px_-15px_30px_rgba(255,255,255,0.1)]
          flex flex-col items-center
        `}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        whileHover={{ 
          scale: 1.05,
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 300
          }
        }}
        whileTap={{ 
          scale: 0.95,
          rotate: -2
        }}
      >
        <motion.div 
          className="flex flex-row justify-center items-center h-[80%]"
          whileHover={{ 
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }}
        >
          <motion.div
            whileHover={{
              scale: [1, 1.1, 1],
              rotate: [0, -10, 10, -10, 0],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }
            }}
          >
            <Image
              src={props.img}
              alt="reactimg"
              className="object-contain border-blue-400 h-[250px]"
            />
          </motion.div>
        </motion.div>
        <motion.p 
          className="text-2xl"
          whileHover={{
            scale: [1, 1.2, 1.1],
            transition: {
              duration: 0.3
            }
          }}
          whileTap={{ scale: 0.9 }}
        >
          {props.name}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
