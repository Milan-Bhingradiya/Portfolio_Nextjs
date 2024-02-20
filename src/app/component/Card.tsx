import Image from 'next/image'
import React from 'react'
import "../../app/page.css"

export default function Card(props:any) {
  return (
    <div className="h-[300px] w-[300px] m-2 xs:m-4  sm:m-10 bg-primary2 hover:animate-spin transition-transform duration-1000 flex flex-col  items-center">
    <div className="flex flex-row justify-center items-center   h-[80%]">
      <Image
        src={props.img}
        alt="reactimg"
        className="object-contain border-blue-400 h-[250px]"
      ></Image>
    </div>
    <p className="text-2xl">{props.name}</p>
  </div>
  )
}
