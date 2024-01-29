"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/bg.png";
import cpuImage from "../../public/cpuimg.png";

import discordImage from "../../public/discord.png";
import dsaImage from "../../public/dsa.png";
import flutterImage from "../../public/flutter.png";
import githubImage from "../../public/github.png";
import instaImage from "../../public/insta.png";
import linkedImage from "../../public/linkedin.png";
import lockImage from "../../public/lock.png";
import meImage from "../../public/me.png";
import menuImage from "../../public/menu.png";
import postmanImage from "../../public/postman.png";
import reactImage from "../../public/react.png";

import "./page.css";

import Link from "next/link";
// import "@/app/x.scss";

// states

export default function Home() {
  const [isWide, setIsWide] = useState(false);
  
  let menuclick = (wide: boolean): void => {
    let targetElement: any = document.getElementById("homepagediv");
    // after close menu hight shoulf be max so i change here... inline css not possible because after some 0.5 sec we have to max hight and in inlie css instant hight is changing...
    if (wide) {
      targetElement.classList.remove("h-full");
      targetElement.classList.add("h-[100vh]");
      targetElement.classList.add("overflow-hidden");
      targetElement.classList.remove("close_homepagediv");
      targetElement.classList.add("open_homepagediv");
      targetElement.classList.add("blueborder");
    } else {
      targetElement.classList.remove("open_homepagediv");
      targetElement.classList.add("close_homepagediv");
      setTimeout(() => {
        targetElement.classList.add("h-full");
        targetElement.classList.remove("blueborder");
      }, 500);

      //0.5s beacuse closing animaiton speed is 0.5s..
    }
  };

  return (
    <div className="maindiv flex flex-row justify-start">
      {/* HOme page--start */}

      {/* below line why not use cause using this we can do like this class apply or not but i want to apply init class then onlcick i want that this class apply or not ,.. here from starting this class apply or not logic work so thats why i have to write menuclick function ... */}
      {/*  <div className={`bg-primary ${isWide?'open_homepagediv h-[100vh] ':'close_homepagediv h-[100vh]  '} overflow-hidden  border`} id="homepagediv"> */}

      <div className={`bg-primary  h-full`} id="homepagediv">
        {/* --------------------------------nav bar---------------------------------------------- */}
        <div className="flex flex-row  justify-between h-[60px] ">
          <div className=" flex flex-row p-5">
            <div className="text-white ml-[5px]">Milan</div>
            <div className="text-primary ml-[5px] pl-1 pr-1 h-[25px]  bg-white">
              OP
            </div>
          </div>

          <div
            onClick={() => {
              //state change late so i change before setstate..at the end state will be chnage ..
              menuclick(!isWide);
              setIsWide(!isWide);
            }}
            className="text-white m-6"
          >
            <Image
              className="h-[20px] w-[30px] object-contain "
              src={menuImage}
              alt="menuimage"
            ></Image>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}

        {/* --------------section 1---------------------------- */}
        <div
          style={{ minHeight: "calc(100vh - 60px)" }}
          className="  w-full text-white flex flex-col  justify-center     "
        >
          <div className="    flex flex-row sm:justify-center  h-[500px] m-4 xs:m-10 ">
            {/* 1 */}
            <div className="   flex flex-col justify-center">
              <div className="sm:h-[20px]"></div>
              <div className="font font-semibold  leading-10 text-[20px]  sm:text-sm md:text-md lg:text-lg xl:text-3xl">
                {/* HELLO I &apos; M
              HELLO I &lsquo; M */}
                HELLO I &rsquo; M
              </div>
              <div className="h-[10px]"></div>
              <p className="font-extrabold leading-none text-[45px]  sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                Milan
              </p>
              <p className=" leading-none font-extrabold text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                Bhingradiya
              </p>
              <br></br>
              <div className="text-[15px] leading-8 sm:text-sm md:text-md lg:text-lg xl:text-xl">
                Web Devloper & App devloper
              </div>

              <div className="h-[10px]"></div>

              <div className="  hover:scale-95 h-[30px] w-[90px]    md:h-[33px] sm:w-[120px] sm:h-[35px] lg:h-[38px] lg:w-[140px] xl:h-[40px] xl:w-[150px]  mt-2 sm:mt-4 rounded-md   bg-primary2 flex flex-row justify-center items-center ">
                <p className="text-[10px]  sm:text-sm md:text-md lg:text-lg xl:text-xl">
                  {" "}
                  Explore More
                </p>
              </div>
              <div className=" flex flex-row  mt-2 sm:mt-4 ">
                <Image
                  className=" object-contain hover:scale-110 h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
                  src={linkedImage}
                  alt="LinkedIn"
                ></Image>

                <Image
                  className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
                  src={instaImage}
                  alt="Instagram"
                ></Image>
                <Image
                  className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
                  src={githubImage}
                  alt="GitHub"
                ></Image>
                <Image
                  className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
                  src={discordImage}
                  alt="Discord"
                ></Image>
              </div>
            </div>

            {/* 2 */}

            <div className="xs:w-32  "> </div>
            {/* 3*/}
            <div className="  hidden xs:block   flex-row justify-center h-[200px] w-[500px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px]">
              <Image
                className=" object-contain h-[200px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px] o"
                src={meImage}
                alt="my img"
              ></Image>
            </div>
          </div>
        </div>
        {/* ----------END----section 1---------------------------- */}

        {/* --------START------section 2---------------------------- */}
        <div className="sm:mt-20 mb-5 flex flex-row justify-center">
          <div className="text-4xl text-white font-bold  sm:text-xl md:2xl lg:text-3xl xl:text-4xl">
            WHO AM i ?
          </div>
        </div>

        <div className="flex flex-row justify-center items-center m-2">
          {/* //flex justify-center */}
          <div className=" w-[100%] sm:w-[70%] ">
            {/* Image below */}
            <div className="bg-primary2 float-left md:mr-10 bordr  flex flex-row justify-center items-center  h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px] ">
              <Image
                className="object-contain h-full p-0 float-left xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6"
                src={meImage}
                alt="myimage"
              ></Image>
            </div>

            <div className="">
              {/* discription */}
              <div className="text-white  p-1 xs:p-2 sm:p-5 text-justify font-sans sm:font-mono ">
                I am a passionate and dynamic AI/ML Engineering student
                currently in the fourth semester at LDCE College of Engineering
                <br className=" block xs:hidden"></br>
                <br className=" block xs:hidden"></br>
                <br className=" hidden xs:block"></br>
                <br></br>I love exploring every detail, no matter how small. My
                passion is digging into how things work – uncovering the hidden
                details that often get overlooked.
                <br></br>
                <br></br>I started this learning journey eager to know
                more,driven by a strong curiosity about the endless
                possibilities of AI and ML. During my studies, I&aposve gotten
                better at the latest technologies, dived into tricky algorithms,
                and untangled the secrets of data science.
                <div className="h-[10px]"></div>
                Email : milanbhingradiya00@gmail.com
                <br></br>
                Phone : 9016064322
              </div>
            </div>
          </div>
        </div>
        {/* --------END------section 2---------------------------- */}

        {/* --------start------section 3---------------------------- */}

        <div className="  text-3xl font-bold text-white xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2  xs:mr-4  sm:mr-20 ">
          My services
        </div>

        <div className="flex flex-row justify-center md:justify-center  flex-wrap text-white ml-2 mr-2   xs:ml-3 xs:mr:mr-3  sm:ml-20 sm:mr-20">
          {/* Box1 */}
          <div className="h-[300px] w-[300px] m-2 xs:m-4  sm:m-10 bg-primary2 hover:rotate-90 transition-transform duration-1000 flex flex-col  items-center">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image
                src={reactImage}
                alt="reactimg"
                className=" object-contain h-[100px]"
              ></Image>
            </div>
            <p className="text-2xl">Web Devlopment</p>
          </div>
          {/* Box2 */}
          <div className="h-[300px] w-[300px]  m-2 xs:m-4  sm:m-10 bg-primary2 flex flex-col  items-center">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image
                src={flutterImage}
                alt="flutter img"
                className=" object-contain h-[100px]"
              ></Image>
            </div>
            <p className="text-2xl">App Devlopment</p>
          </div>
          {/* Box3 */}
          <div className="h-[300px] w-[300px]   m-2 xs:m-4  sm:m-10 bg-primary2 flex flex-col  items-center">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image
                src={postmanImage}
                alt="postmanimg"
                className=" object-contain h-[100px]"
              ></Image>
            </div>
            <p className="text-2xl">Backend Devlopment</p>
          </div>
        </div>

        {/* --------END------section 3---------------------------- */}

        {/* --------start------section 4---------------------------- */}

        <div className="  text-3xl font-bold text-white xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2   xs:mr-4  sm:mr-20 ">
          Learning
        </div>

        <div className="flex flex-row justify-center md:justify-center  flex-wrap text-white  ml-2 mr-2   xs:ml-3 xs:mr:mr-3  sm:ml-20 sm:mr-20">
          {/* Box1 */}
          <div className="h-[300px] w-[300px] m-2 xs:m-4  sm:m-10 bg-primary2 flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image src={cpuImage} alt="cpuimg" className="h-[250px] "></Image>
            </div>
            <p className=" object-contain text-2xl">Machine learning</p>
          </div>
          {/* Box2 */}
          <div className="h-[300px] w-[300px] m-2 xs:m-4  sm:m-10 bg-primary2 flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image
                src={dsaImage}
                alt="dsaimg"
                className=" object-contain h-[200px]"
              ></Image>
            </div>
            <p className="text-2xl ">DSA </p>
          </div>
          {/* Box3 */}
          <div className="h-[300px] w-[300px]  m-2 xs:m-4  sm:m-10 bg-primary2 flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center h-[80%]">
              <Image
                src={lockImage}
                alt="lockimg"
                className=" object-contain h-[250px] "
              ></Image>
            </div>
            <p className="text-2xl ">College Subjects</p>
          </div>
        </div>

        {/* --------END------section 4---------------------------- */}

        {/* --------START------section 5---------------------------- */}

        <div className="flex justify-center">
          <div className="w-[90%] sm:w-[80%] mt-10 mb-10 rounded-lg bg-primary2 h-[180px] sm:h-[150px] flex flex-col justify-center">
            <div className=" flex  flex-col sm:flex-row justify-around text-white">
              {/* 1 */}
              <p className="flex  flex-row justify-center items-center m-5  mb-0">
                Let’s Connect Work Together or Ask and queries or suggestions
              </p>
              {/* 2 */}
              <div className=" flex justify-center   ">
                <div className="hover:scale-105 to-blue-500 m-4 h-12 w-[80%] sm:w-[150px] rounded-lg  border flex justify-center items-center">
                  Connect
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------END------section 5---------------------------- */}
      </div>

      {/* HOme page--End */}

      {/* menubar */}
      <div
        className={` h-[100vh] ${isWide ? "w-[150px]" : "w-[0px]"}
         sm:${
           isWide ? "w-[300px]" : "w-[0px]"
         }  transition-all duration-700 ease-out  overflow-hidden  text-2xl text-white flex flex-col justify-center items-center  absolute top-0 right-0 `}
      >
        <div className="m-4">Home</div>
        <Link href={"/projects"}>
          {" "}
          <div className="m-4">Projects</div>
        </Link>

        <div className="m-4">ABout</div>
        <div className="m-4">Gallry</div>
      </div>
    </div>
  );
}
