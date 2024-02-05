"use client";
import React from "react";
import Navbar from "../component/Navbar";
import useApnaStore from "../store/store";
import img from "../../../public/tech.png";

import "./page.css";
import Image from "next/image";
import ProjectCard from "../component/ProjectCard";
export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  return (
    <>
      {/*  when side meu open and page showinf in left side bending at that time if 100vw width give then it take whole screen width and nav bar menu icon go to end so even when side menu open munu icon can still need to visile so i doen here 90vw so menu icon come to left side when side menu open  */}
      <div className={`${isWide ? "w-[90vw]" : "w-[99vw]"}  `}>
        <Navbar></Navbar>
        <div className=" h-min-[100vh]">
          <div className="flex  flex-row justify-center  text-white text-3xl font-serif ">
            My Project
          </div>

          {/*  --------------------------------------- */}
          <div className=" text-white font-serif text-2xl m-5 ">
            Front End Projects
          </div>

          <section>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start">
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>

             
            </div>
          </section>
          {/*  --------------------------------------- */}

          <section>
            <div className=" text-white font-serif text-2xl m-5 ">
              Back End Projects
            </div>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start ">
             
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
