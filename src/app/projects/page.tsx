"use client";
import React from "react";
import Navbar from "../component/Navbar";
import useApnaStore from "../store/store";
import img from "../../../public/tech.png";

import "./page.css";
import Image from "next/image";
export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  return (
    <>
      {/*  when side meu open and page showinf in left side bending at that time if 100vw width give then it take whole screen width and nav bar menu icon go to end so even when side menu open munu icon can still need to visile so i doen here 90vw so menu icon come to left side when side menu open  */}
      <div className={`${isWide ? "w-[90vw]" : "w-[99vw]"}  `}>
        <Navbar></Navbar>
        <div className=" h-min-[100vh]">
          <div className="flex  flex-row justify-center  text-white text-3xl font-serif ">
            My Project
          </div>

          {/*  --------------------------------------- */}
          <div className=" text-white font-serif text-2xl m-5 ">
            Front End Projects
          </div>

          <section>
            <div className="flex flex-row flex-wrap ">
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/*  --------------------------------------- */}

          <section>
            <div className=" text-white font-serif text-2xl m-5 ">
              Back End Projects
            </div>
            <div className="flex flex-row flex-wrap ">
            <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="content flex flex-col relative  text-white">
                  <div className=" fonr relative left-[20px] top-[10px] font-serif text-2xl">
                    Bus Trackin App
                  </div>

                  <div>
                    <Image
                      src={img}
                      alt="loading.."
                      className=" h-[80px] w-[250px] m-4 mb-0"
                    ></Image>
                  </div>

                  <div className="m-4 font-thin text-wrap ">
                    Lorem ipsum, dolor ss aliquama liquama liqua maliquam libero
                    quia rem liqua maliquam libero quia rem ad eum.
                  </div>

                  <div className="flex flex-row m-4 mt-0 ">
                    <div className="m-1 text-teal-500">#Flutter</div>
                    <div className="m-1 text-orange-600">#Firebase</div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
