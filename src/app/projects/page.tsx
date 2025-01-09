"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import useApnaStore from "../store/store";
import img from "../../../public/tech.png";

import Image from "next/image";
import ProjectCard from "../component/ProjectCard";
import { getAllDocuments } from "@/services/fireStoreOperations";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface propsProject {
  id: string;
  title: string;
  card_desc: string;
  thumbnail: string[];
  photos: string[];
  technology: string[];
}

export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);

  const [projects, setprojeccts] = useState<propsProject[]>([]);

 

  useEffect(() => {
    // callAPI();

    getAllDocuments("projects").then((res) => {
      setprojeccts(res!);
    });
  }, []);

  return (
    <>
      <div className={`${isWide ? "w-[100vw]" : "w-[100vw]"} min-h-screen bg-gradient-to-b from-gray-900 to-black`}>
        <Navbar />
        <div className="h-min-[100vh]">
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
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              My Projects
            </motion.h1>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent blur-3xl -z-10" />
            <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 px-6">
              {projects && projects.length != 0 &&
                projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
