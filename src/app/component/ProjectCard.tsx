import Image from 'next/image'
import React, { useState } from 'react'
import img from "../../../public/tech.png"

import "./ProjectCard.css";
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
  return (

    // hight of card given in .css file in project folder so dont  try here to change hight..


    <div className="box " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {/* content start  */}

      <div className="content flex flex-col relative  text-red ">


        {/* first page data start */}
        <div>
         

          <div className="absolute top-0   h-[300px]">
            <Image
              src={project.thumbnail[0]}
              alt="loading.."
              width={300}
              height={100}

              className=" h-[140px] rounded-t-2xl  mb-0"
            ></Image>
          </div>

          <div className="m-4 border border-white absolute bottom-10 font-thin text-wrap text-white" style={{ fontSize: '14px' }}>
            {project.title}

            {/* {project.desc} */}
          </div>

          <div className=" absolute bottom-0 flex flex-row m-4 mt-0 ">

            {
              // project.technology &&  console.log(project.technology)
              project.technology && project.technology.map((tech: string) => {
                return <div key={tech} className="m-1 text-teal-500">{tech}</div>
              })

            }
            <div className="m-1 text-orange-600">#Firebase</div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim temporibus dolorem impedit cum id aliquam doloremque adipisci. Modi reiciendis voluptatum odit, fuga in eos odio ut dicta cupiditate exercitationem nisi eligendi incidunt error quas facere nulla laudantium tempore porro quaerat provident explicabo officiis aliquam libero! Suscipit voluptates asperiores maxime.. Veniam suscipit vitae vero nam, doloremque dolorem sunt dolor ea quidem quisquam, sit a iusto odit, illo asperiores! Nemo, odio. Non quasi totam nostrum cumque voluptate mollitia nesciunt laboriosam necessitatibus reiciendis aliquam.</div>
          </div>

          <div className='flex flex-row justify-center'>
            <a href="#_" className="relative inline-flex items-center justify-center px-8 py-[10px] overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">More :) </span>
            </a>
          </div>
        </div>



        {/* second page  end */}


      </div>

      {/* content end  */}
    </div>



  )
}
