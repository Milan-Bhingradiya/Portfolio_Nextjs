"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

import useApnaStore from "../store/store";

import { Chrono } from "react-chrono";

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
  }, [])

  if (!isMounted) {
    return null;
  }
  if (isMounted) {
    return (
      <>
        <div className={`${isWide ? "w-[90vw]" : "w-[100vw]"} `}>
          <Navbar></Navbar>
          <div
            className="h-[100%]"
          >

            <div className=" flex flex-row justify-center text-white text-2xl ms:text-3xl font-bold m-5">My Education </div>
            <Chrono
              activeItemIndex={2}
              hideControls="true"
              mode="VERTICAL_ALTERNATING"
              slideItemDuration={5000} slideShow
              theme={{
                primary: "#343A46",
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
                  cardSubtitle:
                    "1 to 10TH",
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
                  cardTitle: "B.E in Artificial Intelligenceand Machine Learning",
                  cardSubtitle: `lalbhai dalpatbhai college of engineering,Ahmedabad`,
                  cardDetailedText: "sep May 2023 to August 2026  new journey by pursuing a Bachelor of Engineering (BE) degree at LD College of Engineering in Ahmedabad. Stepping into this esteemed institution, I found myself immersed in a highly competitive environment, surrounded by new friends hailing from every corner of Gujarat. The prospect of learning cutting-edge technologies such as Artificial Intelligence (AI) and Machine Learning (ML) fills me with excitement and anticipation. I am eager to delve deeper into these subjects and expand my knowledge.",
                },
              ]}

            />

          </div>
        </div>
      </>
    );
  }

}



















