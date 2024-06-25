"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function page({ name }: any) {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className=" w-screen  min-h-screen">
      <div className="w-screen  text-white">
        <div className=" mx-5 xs:mx-15 md:mx-20  mb-10">
          <div className=" m-10 font-extrabold text-4xl flex flex-row justify-center">
            Milan Project (page under construction){" "}
          </div>

          <div className="w-full flex flex-row justify-center">
            <div className="md:w-[60vw] border border-white">
              <ImageGallery items={images} showPlayButton={false} />
            </div>
          </div>

          <div className="">
            <div className="my-8 font-extrabold text-3xl">Detail</div>
            <div className="font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto natus reiciendis adipisci ipsa quod, ut itaque numquam
              eligendi vitae odit, quibusdam laborum rerum? Sed qui quis ipsum
              quia porro, voluptatum culpa dolorum magni illum enim quaerat
              voluptates quod deleniti delectus atque modi? Nisi vel neque esse
              impedit ut iusto illum ullam dicta harum dolorum delectus autem ab
              accusantium, sunt quisquam aliquam quae atque velit cum
              cupiditate, nemo deserunt corporis! Voluptatum consequatur
              pariatur asperiores? Recusandae molestias reiciendis mollitia
              laboriosam sunt, sit, dolores laborum dolore pariatur ducimus
              cupiditate architecto? Sed quia beatae, vero, accusantium fuga
              quis voluptatem magni minus dolorem ea dignissimos?lorem4999
            </div>
            <div className="my-8 font-extrabold text-3xl">Project Duration</div>
            <div className=" font-extrabold ">1/24 to 4/24</div>

            <div className="my-8 font-extrabold text-3xl">Technology</div>
            <span className=" font-extrabold m-2 ">React</span>
            <span className=" font-extrabold m-2 ">React</span>
            <span className=" font-extrabold m-2 ">React</span>
            <span className=" font-extrabold m-2 ">React</span>
            <span className=" font-extrabold m-2 ">React</span>
          </div>
        </div>
      </div>
    </div>
  );
}
