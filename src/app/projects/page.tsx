"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import useApnaStore from "../store/store";
import img from "../../../public/tech.png";

import Image from "next/image";
import ProjectCard from "../component/ProjectCard";
import myaxios from "@/utils/axios";
import { GetProjectCall } from "@/services/htttp";
import { getAllDocuments } from "@/services/fireStoreOperations";

interface propsProject {
  id: string;
  title: string;
  desc: string;
  thumbnail: string[];
  photos: string[];
  technology: string[];
}

export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);

  const [projects, setprojeccts] = useState<propsProject[]>([]);

  const callAPI = async () => {
    const res = await GetProjectCall();
    if (res?.data.status) {
      setprojeccts(res?.data.projects);
    }
  };

  useEffect(() => {
    // callAPI();

    getAllDocuments("projects").then((res) => {
     

      setprojeccts(res!);
    });
  }, []);

  return (
    <>
      {/*  when side meu open and page showinf in left side bending at that time if 100vw width give then it take whole screen width and nav bar menu icon go to end so even when side menu open munu icon can still need to visile so i doen here 90vw so menu icon come to left side when side menu open  */}
      <div className={`${isWide ? "w-[90vw]" : "w-[99vw]"}  min-h-screen`}>
        <Navbar></Navbar>
        <div className=" h-min-[100vh]">
          <div className="flex  flex-row justify-center  text-white text-3xl font-serif ">
            My Project
          </div>

          {/*  --------------------------------------- */}
          {/* <div className=" text-white font-serif text-2xl m-5 ">
            Front End Projects
          </div> */}

          <section>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start">
              {projects && projects.length != 0 &&
                projects.map((project) => {
                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    ></ProjectCard>
                  );
                })}
            </div>
          </section>
          {/*  --------------------------------------- */}
        </div>
      </div>
    </>
  );
}
