"use client";

import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import useApnaStore from "../store/store";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import timeline styles
import { motion } from "framer-motion";
import { School, GraduationCap } from "lucide-react"; // Icons for the timeline

const educationData = [
  {
    year: "2019",
    title: "Brilliant Vidhalaya Surat",
    subtitle: "1 to 10TH",
    description: "Chill days of my life... It was truly the best time of my life, filled with unforgettable memories and invaluable lessons.",
    // description: `Chill days of my life.., However, looking back, I realize that I was somewhat immature and unconscious about learning and career aspirations  during those years. Despite this, I cherish every moment spent at Brilliant Vidyalaya, as it laid the foundation for the person I am today. It was truly the best time of my life, filled with unforgettable memories and invaluable lessons`,
    icon: <School />,
  },
  {
    year: "2023",
    title: "Diploma in Information Technology",
    subtitle:
      "Dr. S. & S. S. Ghandhy College Of Engineering & Technology, Surat",
    description: "Completed my Diploma with a 9 CPI. Dedicated myself to learning various fundamentals of engineering concepts.",
    // description: `From May 2019 to August 2023, I completed my Diploma with a 9 CPI. During this period, I also experienced the most beautiful and fulfilling time of my life. I dedicated myself to learning various Fundamentals of engineering concepts, all from the comfort of my hometown. `,
    icon: <GraduationCap />,
  },
  {
    year: "2026",
    title: "B.E in Artificial Intelligence and Machine Learning",
    subtitle: "Lalbhai Dalpatbhai College of Engineering, Ahmedabad",
    // description:"sep May 2023 to August 2026  new journey by pursuing a Bachelor of Engineering (BE) degree at LD College of Engineering in Ahmedabad. Stepping into this esteemed institution, I found myself immersed in a highly competitive environment, surrounded by new friends hailing from every corner of Gujarat. The prospect of learning cutting-edge technologies such as Artificial Intelligence (AI) and Machine Learning (ML) fills me with excitement and anticipation. I am eager to delve deeper into these subjects and expand my knowledge.",
    description: "Pursuing a Bachelor of Engineering degree in a highly competitive environment. Excited to learn cutting-edge technologies such as AI and ML.",
    icon: <GraduationCap />,
  },
];

// const educationData2 = [
//   {
//     title: "2019",
//     cardTitle: "Brilliant Vidhalaya Surat",
//     url: "http://google.com",
//     cardSubtitle: "1 to 10TH",
//     description: `Chill days of my life.., However, looking back, I realize that I was somewhat immature and unconscious about learning and career aspirations  during those years. Despite this, I cherish every moment spent at Brilliant Vidyalaya, as it laid the foundation for the person I am today. It was truly the best time of my life, filled with unforgettable memories and invaluable lessons`,
//   },
//   {
//     title: "2023",
//     cardTitle: "Diploma in Information Technology",
//     cardSubtitle: `Dr. S. & S. S. Ghandhy College Of Engineering & Technology,Surat`,
//     description: `From May 2019 to August 2023, I completed my Diploma with a 9 CPI. During this period, I also experienced the most beautiful and fulfilling time of my life. I dedicated myself to learning various Fundamentals of engineering concepts, all from the comfort of my hometown. `,
//   },
//   {
//     title: "2026",
//     cardTitle: "B.E in Artificial Intelligenceand Machine Learning",
//     cardSubtitle: `lalbhai dalpatbhai college of engineering,Ahmedabad`,
//     description:       "sep May 2023 to August 2026  new journey by pursuing a Bachelor of Engineering (BE) degree at LD College of Engineering in Ahmedabad. Stepping into this esteemed institution, I found myself immersed in a highly competitive environment, surrounded by new friends hailing from every corner of Gujarat. The prospect of learning cutting-edge technologies such as Artificial Intelligence (AI) and Machine Learning (ML) fills me with excitement and anticipation. I am eager to delve deeper into these subjects and expand my knowledge.",
//   }
// ];

export default function Education() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`${
        isWide ? "w-[100vw]" : "w-[100vw]"
      } relative bg-[#0a192f] min-h-screen text-white`}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          <motion.h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 relative z-10"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Education Timeline
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline Section */}
        <VerticalTimeline>
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.year}
              iconStyle={{
                display: "none",
              }}
              icon={item.icon}
              contentStyle={{
                background: "rgba(10, 25, 47, 0.95)", // Darker blue background
                color: "white",
                border: "none", // Removed border
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Added subtle shadow
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(14, 165, 233, 0.8)", // Dark blue arrow
              }}
            >
              <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
              <h4 className="text-md text-blue-200 mb-2">{item.subtitle}</h4>
              <p className="text-blue-100">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Background Animation */}
      <motion.div


        animate={{
          background: [
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.21) 15.74%, rgba(232, 121, 249, 0.16) 56.49%, rgba(79, 70, 229, 0.2) 115.91%)",
            "linear-gradient(106.89deg, rgba(79, 70, 229, 0.2) 15.73%, rgba(192, 132, 252, 0.11) 15.74%, rgba(14, 165, 233, 0.21) 56.49%, rgba(232, 121, 249, 0.16) 115.91%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute mt-[100px] inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
      />
    </div>
  );
}
