

import Image from 'next/image'
import React, { useState } from 'react'
import img from "../../../public/tech.png"
import Link from 'next/link';
import "./ProjectCard.css";
import "./Card.css";

// import { Project } from "../projects/page.tsx";
interface propsProject {
  _id: string;
  title: string;
  desc: string;
  thumbnail: string[];
  photos: string[];
  technology: string[];
}
interface ProjectCardProps {
  project: propsProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {


  const [isHovered, setIsHovered] = useState(false);
  const currentPath = window.location.href;
  const newPath = `${currentPath}/moredetail`;

  return (

    // hight of card given in .css file in project folder so dont  try here to change hight..


    <div className="box  card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {/* content start  */}

      <div className="content flex flex-col relative  text-red ">


        {/* first page data start */}



        <div className="  h-[300px] overflow-hidden" >
          <Image
            src={project.thumbnail[0]}
            alt="loading.."
            width={300}
            height={100}

            className=" h-[140px] rounded-t-2xl  mb-0"
          ></Image>

          {/* biju box jema text hase badha    */}
          <div className="m-2 mt-4   font-thin text-wrap text-white" style={{ fontSize: '14px' }}>

            <h2 className="text-xl ml-2 font-bold  text-white ">   {project.title}</h2>

            <h3 className="text-[15px]  mt-2 ml-2 font-normal font-sans bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Technology</h3>

            <div className=" flex flex-row  mt-0  flex-wrap ">
              {
                // project.technology &&  console.log(project.technology)
                // card class  css come from card.css of main page 
                project.technology && project.technology.map((tech: string) => {
                  return <div key={tech} className=" bg-gray-800  m-1  rounded-md font-semibold  h-auto  px-2 w-auto  text-teal-500">{"#" + tech}</div>
                })

              }
            </div>

          </div>

        </div>




        {/* first page data end */}


        {/* second page data */}
        <div className={`absolute bottom-0 left-0 w-full rounded-[19px] text-white   bg-[#011522] transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 h-full' : 'opacity-0 h-0'} overflow-hidden `}>


          <div className=' flex flex-col'>

            <div className="flex flex-row justify-start">
              <div className='p-4'>
                <span className="  m-1 bg-[#ff605c] h-[10px] w-[10px] p-1 rounded-[50%] inline-block"></span>
                <span className="  m-1 bg-[#ffbd44] h-[10px] w-[10px] p-1 rounded-[50%] inline-block"></span>
                <span className="  m-1 bg-[#00ca4e] h-[10px] w-[10px] p-1 rounded-[50%] inline-block"></span>
              </div>
            </div>



            <div className="line-clamp-6 m-4">
              {project.desc}
              
              </div>
          </div>

          <div className='flex flex-row justify-center'>
            <Link href={newPath} className="relative inline-flex items-center justify-center px-8 py-[10px] overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">More :) </span>
            </Link>
          </div>
        </div>



        {/* second page  end */}


      </div>

      {/* content end  */}
    </div>



  )
}
