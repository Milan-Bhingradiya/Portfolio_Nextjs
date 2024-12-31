// "use client";
// import { getDocumentById } from "@/services/fireStoreOperations";
// import React, { useEffect, useState } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { useRouter } from 'next/router'
// import { useSearchParams } from "next/navigation";

// // interface propsProject {
// //   id: string;
// //   title: string;
// //   desc: string;
// //   thumbnail: string[];
// //   photos: string[];
// //   technology: string[];
// // }

// export default function Page({ params }: any) {
//   const images = [
//     {
//       original: "https://picsum.photos/id/1018/1000/600/",
//       thumbnail: "https://picsum.photos/id/1018/250/150/",
//     },
//     {
//       original: "https://picsum.photos/id/1015/1000/600/",
//       thumbnail: "https://picsum.photos/id/1015/250/150/",
//     },
//     {
//       original: "https://picsum.photos/id/1019/1000/600/",
//       thumbnail: "https://picsum.photos/id/1019/250/150/",
//     },
//   ];

//   const [project, setProject] = useState({
//     id: "",
//     title: "",
//     desc: "",
//     thumbnail: [],
//     photos: [],
//     technology: []
//   });

//   useEffect(() => {
//     if (params.id) {
//       getDocumentById("projects", params.id).then((res) => {

//         if (res) {
//           const projectData = {
//             id: res.id || "",
//             title: res.title || "",
//             desc: res.desc || "",
//             thumbnail: res.thumbnail || [],
//             photos: res.photos || [],
//             technology: res.technology || []
//           };
//           setProject(projectData);
//         }
//       });
//     }
//   }, []);

//   return (
//     <div className="w-screen min-h-screen">
//       <div className="w-screen text-white">
//         <div className="mx-5 xs:mx-15 md:mx-20 mb-10">
//           <div className="m-10 font-extrabold text-4xl flex flex-row justify-center">
//             Milan Project (page under construction)
//           </div>

//           <div className="w-full flex flex-row justify-center">
//             <div className="md:w-[60vw] border border-white">
//               <ImageGallery items={images} showPlayButton={false} />
//             </div>
//           </div>

//           <div className="">
//             <div className="my-8 font-extrabold text-3xl">Detail</div>
//             <div className="font-normal">
//               {project.desc}
//             </div>
//             <div className="my-8 font-extrabold text-3xl">Project Duration</div>
//             <div className="font-extrabold">1/24 to 4/24</div>

//             <div className="my-8 font-extrabold text-3xl">Technology</div>
//             {project.technology.map((tech, index) => (
//               <span key={index} className="font-extrabold m-2">{tech}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getDocumentById } from "@/services/fireStoreOperations";


// const projectData = {
//   title: "E-commerce Platform",
//   description:
//     "A full-stack e-commerce platform with real-time inventory management and AI-powered product recommendations.",
//   images: [
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce2.jpg?alt=media&token=cc1f2134-0b7e-429d-a91e-ed2b62ae039a",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce.jpg?alt=media&token=0caa2c9c-4719-4bad-9080-1d7e2a29c523",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce2.jpg?alt=media&token=cc1f2134-0b7e-429d-a91e-ed2b62ae039a",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce.jpg?alt=media&token=0caa2c9c-4719-4bad-9080-1d7e2a29c523",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce2.jpg?alt=media&token=cc1f2134-0b7e-429d-a91e-ed2b62ae039a",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce.jpg?alt=media&token=0caa2c9c-4719-4bad-9080-1d7e2a29c523",
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-a8760.appspot.com/o/ecommerce2.jpg?alt=media&token=cc1f2134-0b7e-429d-a91e-ed2b62ae039a",
//   ],
//   video:
//     "https://www.youtube.com/watch?si=yCw90qMkVMHrcPyC&v=kHckQekd-LU&feature=youtu.be",
//   technologies: [
//     "Next.js",
//     "React",
//     "Node.js",
//     "MongoDB",
//     "TailwindCSS",
//     "Redux",
//   ],
//   features: [
//     "User authentication and authorization",
//     "Product catalog with search and filter functionality",
//     "Shopping cart and checkout process",
//     "Order tracking and history",
//     "Admin dashboard for inventory management",
//     "AI-powered product recommendations",
//   ],
//   challenges:
//     "Implementing real-time inventory updates across multiple servers and ensuring data consistency was a significant challenge. We overcame this by using WebSockets and a robust caching strategy.",
//   outcome:
//     "The platform has seen a 200% increase in user engagement and a 150% boost in sales conversion rate since launch.",
// };

export default function ProjectPage({ params }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const [projectData, setprojectData] = useState({
    title: "",
    description: "",
    images: [],
    video: [],
    technology: [],
    features: [],
    challenges: "",
    outcome: "",
  });

  useEffect(() => {
    if (params.id) {
      getDocumentById("projects", params.id).then((res) => {
        if (res) {
          const projectData = {
            title: res.title || "",
            description: res.description || "",
            images: res.photos || [],
            video: res.video || [],
            technology: res.technology || [],
            features: res.features || [],
            challenges: res.challenges || "",
            outcome: res.outcome || "",
          };
          setprojectData(projectData);
        }
      });
    }
  }, []);

  const nextImage = () => {
    setSlideDirection("right");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSlideDirection("left");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectData.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{projectData.title}</h1>

        {/* Image carousel */}
        <div className="relative mb-12 h-[400px] overflow-hidden">
          {projectData.images.map((src, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentImageIndex
                  ? "translate-x-0"
                  : index < currentImageIndex ||
                    (currentImageIndex === 0 &&
                      index === projectData.images.length - 1)
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          ))}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full z-10"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full z-10"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Project details */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-slate-300">{projectData.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {projectData.technology.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              {projectData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-slate-300">{projectData.challenges}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
            <p className="text-slate-300">{projectData.outcome}</p>
          </section>

          {/* Video section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
            <div className="aspect-w-16 aspect-h-9">
              <video
                controls
                className="rounded-lg shadow-lg w-full"
                poster="/placeholder.svg?height=400&width=600"
              >
                <source
                  src={
                    "https://www.youtube.com/watch?si=yCw90qMkVMHrcPyC&v=kHckQekd-LU&feature=youtu.be"
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* 
                <iframe
                className="rounded-lg shadow-lg w-full"
                width="600"
                height="400"
                src="https://www.youtube.com/embed/kHckQekd-LU?si=yCw90qMkVMHrcPyC"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe> */}
          </section>
        </div>
      </div>
    </div>
  );
}
