"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

import useApnaStore from "../store/store";

import { Chrono } from "react-chrono";
import { motion } from "framer-motion";

// import { Chrono as ChronoType } from "react-chrono";
// import dynamic from 'next/dynamic'

// export const Chronoo = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
//   ssr: false,
// }) as typeof ChronoType

export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);

  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  if (isMounted) {
    return (
      <>
        <div
          className={`${
            isWide ? "w-[90vw]" : "w-[100vw]"
          } relative bg-newprimary min-h-screen`}
        >
          <Navbar></Navbar>
          <div className="h-[100%] relative z-10">
          
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-16 relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
              <motion.h1
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 relative z-10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Education
              </motion.h1>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
            <Chrono
              activeItemIndex={2}
              hideControls="true"
              mode="VERTICAL_ALTERNATING"
              slideItemDuration={5000}
              slideShow
              theme={{
                primary: "#60A5FA",
                secondary: "#38598b",
                cardBgColor: "white",
                cardForeColor: "violet",
                titleColor: "white",
                titleColorActive: "lightblue",
              }}
              items={[
                {
                  title: "2019",
                  cardTitle: "Brilliant Vidhalaya Surat",
                  url: "http://google.com",
                  cardSubtitle: "1 to 10TH",
                  cardDetailedText: `Chill days of my life.., However, looking back, I realize that I was somewhat immature and unconscious about learning and career aspirations  during those years. Despite this, I cherish every moment spent at Brilliant Vidyalaya, as it laid the foundation for the person I am today. It was truly the best time of my life, filled with unforgettable memories and invaluable lessons`,
                },
                {
                  title: "2023",
                  cardTitle: "Diploma in Information Technology",
                  cardSubtitle: `Dr. S. & S. S. Ghandhy College Of Engineering & Technology,Surat`,
                  cardDetailedText: `From May 2019 to August 2023, I completed my Diploma with a 9 CPI. During this period, I also experienced the most beautiful and fulfilling time of my life. I dedicated myself to learning various Fundamentals of engineering concepts, all from the comfort of my hometown. `,
                },
                {
                  title: "2026",
                  cardTitle:
                    "B.E in Artificial Intelligenceand Machine Learning",
                  cardSubtitle: `lalbhai dalpatbhai college of engineering,Ahmedabad`,
                  cardDetailedText:
                    "sep May 2023 to August 2026  new journey by pursuing a Bachelor of Engineering (BE) degree at LD College of Engineering in Ahmedabad. Stepping into this esteemed institution, I found myself immersed in a highly competitive environment, surrounded by new friends hailing from every corner of Gujarat. The prospect of learning cutting-edge technologies such as Artificial Intelligence (AI) and Machine Learning (ML) fills me with excitement and anticipation. I am eager to delve deeper into these subjects and expand my knowledge.",
                },
              ]}
            />
          </div>

          <motion.div
            animate={{
              background: [
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                "linear-gradient(106.89deg, rgba(79, 70, 229, 0.4) 15.73%, rgba(192, 132, 252, 0.11) 15.74%, rgba(14, 165, 233, 0.41) 56.49%, rgba(232, 121, 249, 0.26) 115.91%)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute mt-60 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          />
        </div>
      </>
    );
  }
}
