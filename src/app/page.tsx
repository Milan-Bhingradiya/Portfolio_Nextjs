"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import useApnaStore from "./store/store";
import Navbar from "./component/Navbar";

// import "@/app/x.scss";
import OldHero from "./component/oldhero";
import Newhero from "./component/Newhero";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Footer from "./component/Footer";


export default function Home() {

  //store
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);

  // data

  // Add typing animation state with individual letter tracking
  const [letters, setLetters] = useState<{ char: string; visible: boolean }[]>([]);
  const fullText = "Milan Bhingradiya";
  
  useEffect(() => {
    // Initialize letters array
    const initialLetters = fullText.split('').map(char => ({
      char,
      visible: false
    }));
    setLetters(initialLetters);

    // Animate each letter
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setLetters(prev => prev.map((letter, index) => ({
          ...letter,
          visible: index <= currentIndex
        })));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* HOme page--start */}
      {/* old not read.. */}
      {/* below line why not use cause using this we can do like this class apply or not but i want to apply init class then onlcick i want that this class apply or not ,.. here from starting this class apply or not logic work so thats why i have to write menuclick function ... */}
      {/*  <div className={`bg-primary ${isWide?'open_homepagediv h-[100vh] ':'close_homepagediv h-[100vh]  '} overflow-hidden  border`} id="homepagediv"> */}

      {/* HOme page--End */}

      <div className={`bg-newprimary   h-full`} id="homepagediv">
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center h-full w-full">
          {/* <OldHero></OldHero> */}

          <Newhero letters={letters} />
          {/* <OldHero></OldHero> */}

          <Section2></Section2>

          <Section3></Section3>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
