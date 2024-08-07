"use client";
import { getDocumentById } from "@/services/fireStoreOperations";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRouter } from 'next/router'
import { useSearchParams } from "next/navigation";

// interface propsProject {
//   id: string;
//   title: string;
//   desc: string;
//   thumbnail: string[];
//   photos: string[];
//   technology: string[];
// }

export default function Page({ params }: any) {
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

  const [project, setProject] = useState({
    id: "",
    title: "",
    desc: "",
    thumbnail: [],
    photos: [],
    technology: []
  });

  useEffect(() => {
    if (params.id) {
      getDocumentById("projects", params.id).then((res) => {

        if (res) {
          const projectData = {
            id: res.id || "",
            title: res.title || "",
            desc: res.desc || "",
            thumbnail: res.thumbnail || [],
            photos: res.photos || [],
            technology: res.technology || []
          };
          setProject(projectData);
        }
      });
    }
  }, []);


  return (
    <div className="w-screen min-h-screen">
      <div className="w-screen text-white">
        <div className="mx-5 xs:mx-15 md:mx-20 mb-10">
          <div className="m-10 font-extrabold text-4xl flex flex-row justify-center">
            Milan Project (page under construction)
          </div>

          <div className="w-full flex flex-row justify-center">
            <div className="md:w-[60vw] border border-white">
              <ImageGallery items={images} showPlayButton={false} />
            </div>
          </div>

          <div className="">
            <div className="my-8 font-extrabold text-3xl">Detail</div>
            <div className="font-normal">
              {project.desc}
            </div>
            <div className="my-8 font-extrabold text-3xl">Project Duration</div>
            <div className="font-extrabold">1/24 to 4/24</div>

            <div className="my-8 font-extrabold text-3xl">Technology</div>
            {project.technology.map((tech, index) => (
              <span key={index} className="font-extrabold m-2">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
