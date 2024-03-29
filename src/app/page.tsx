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
import postmanImage from "../../public/postman.png";
import reactImage from "../../public/react.png";

import "./page.css";

import Link from "next/link";
import Card from "./component/Card";
import useApnaStore from "./store/store";
import Navbar from "./component/Navbar";

// import "@/app/x.scss";

// states

export default function Home() {
  //store
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);

  // data
  const myservicesArr: string[] = [
    "Web Devlopment",
    "App Devlopment",
    "Backend Devlopment",
  ];
  const myservicesImgArr = [reactImage, flutterImage, postmanImage];

  const learningImgArr = [cpuImage, dsaImage, lockImage];
  const learningArr = ["Machine learning", "DSA", "College Subjects"];

  return (
  <>
      {/* HOme page--start */}
      {/* old not read.. */}
      {/* below line why not use cause using this we can do like this class apply or not but i want to apply init class then onlcick i want that this class apply or not ,.. here from starting this class apply or not logic work so thats why i have to write menuclick function ... */}
      {/*  <div className={`bg-primary ${isWide?'open_homepagediv h-[100vh] ':'close_homepagediv h-[100vh]  '} overflow-hidden  border`} id="homepagediv"> */}


      {/* HOme page--End */}
  
      <div className={`bg-primary  h-full`} id="">
        {/* --------------------------------nav bar---------------------------------------------- */}
        <Navbar></Navbar>
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
            <div className="   hidden xs:block    flex-row justify-center h-[200px] w-[500px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px]">
              <Image
                className=" blueshadow object-contain h-[200px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px] o"
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
            {/* <div className="bg-primary2 float-left md:mr-10 bordr  flex flex-row justify-center items-center  h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px] "> */}
              <Image
                className="object-contain h- p-0 float-left xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6    h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px]"
                src={meImage}
                alt="myimage"
              ></Image>
            {/* </div> */}

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
          {myservicesArr.map((name, index) => {
            return (
              <Card
                key={index}
                name={name}
                img={myservicesImgArr.at(index)}
              ></Card>
            );
          })}
        </div>

        {/* --------END------section 3---------------------------- */}

        {/* --------start------section 4---------------------------- */}

        <div className="  text-3xl font-bold text-white xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2   xs:mr-4  sm:mr-20 ">
          Learning
        </div>

        <div className="flex flex-row justify-center md:justify-center  flex-wrap text-white  ml-2 mr-2   xs:ml-3 xs:mr:mr-3  sm:ml-20 sm:mr-20">
          {learningArr.map((name, index) => {
            return (
              <Card
                key={index}
                name={name}
                img={learningImgArr.at(index)}
              ></Card>
            );
          })}
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
  </>
  );
}
