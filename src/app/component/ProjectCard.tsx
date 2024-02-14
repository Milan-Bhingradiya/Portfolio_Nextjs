import Image from 'next/image'
import React from 'react'
import img from "../../../public/tech.png"

// import { Project } from "../projects/page.tsx";


export default function ProjectCard({ project }) {
  return (

    // hight of card given in .css file in project folder so dont  try here to change hight..
    <div className="box border">
      <div className="content flex flex-col relative  text-white">
        <div className=" fonr absolute z-10 left-[20px] top-[10px] font-serif text-2xl">
          {/* Bus Trackin App */}
          {project.title}
        </div>

        <div className="absolute top-0   h-[300px]">
          <Image
            src={project.thumbnail[0]}
            alt="loading.."
            width={300}
            height={100}

            className=" h-[140px] rounded-t-2xl  mb-0"
          ></Image>
        </div>

        <div className="m-4 absolute bottom-10 font-thin text-wrap" style={{ fontSize: '14px' }}>
          {/* Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
        quia rem liqua maliquam libero quia rem ad eum. */}.

          {project.desc}
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
    </div>

  )
}
