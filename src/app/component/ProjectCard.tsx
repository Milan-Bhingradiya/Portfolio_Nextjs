import Image from 'next/image'
import React from 'react'
import img from "../../../public/tech.png"

export default function ProjectCard() {
  return (
    <div className="box">
    <div className="content flex flex-col relative  text-white">
      <div className=" fonr absolute z-10 left-[20px] top-[10px] font-serif text-2xl">
        Bus Trackin App
      </div>

      <div className="absolute top-0   h-[300px]">
        <Image
          src={img}
          alt="loading.."
          
          className=" h-[140px] rounded-t-2xl  mb-0"
        ></Image>
      </div>

      <div className="m-4 absolute bottom-10 font-thin text-wrap ">
        Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
        quia rem liqua maliquam libero quia rem ad eum.
      </div>

      <div className=" absolute bottom-0 flex flex-row m-4 mt-0 ">
        <div className="m-1 text-teal-500">#Flutter</div>
        <div className="m-1 text-orange-600">#Firebase</div>
      </div>
    </div>
  </div>

  )
}
