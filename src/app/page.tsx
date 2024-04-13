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


import "../app/component/Card.css"
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

      <div className={`bg-newprimary   h-full`} id="">
        {/* --------------------------------nav bar---------------------------------------------- */}
        <Navbar></Navbar>
        {/* ------------------------------------------------------------------------------------ */}

        {/* --------------section 1---------------------------- */}
        <div
          style={{ minHeight: "calc(100vh - 60px)" }}
          className="  w-full text-white flex flex-col  justify-center     "
        >
          <div className="    flex flex-row sm:justify-center   h-[500px] m-4 xs:m-10 ">
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

              {/* <div className="h-[10px]"></div> */}

              {/* <div className="  hover:scale-95 h-[30px] w-[90px]    md:h-[33px] sm:w-[120px] sm:h-[35px] lg:h-[38px] lg:w-[140px] xl:h-[40px] xl:w-[150px]  mt-2 sm:mt-4 rounded-md   bg-primary2 flex flex-row justify-center items-center ">
                <p className="text-[10px]  sm:text-sm md:text-md lg:text-lg xl:text-xl">
                  {" "}
                  Explore More
                </p>
              </div> */}

              {/* <div className=" flex flex-row  mt-2 sm:mt-4 ">
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
              </div> */}


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

        <div className="flex flex-row justify-center items-center m-2 ">
          {/* //flex justify-center */}
          <div className=" w-[100%] sm:w-[70%] ">
            {/* Image below */}
            {/* <div className="bg-primary2 float-left md:mr-10 bordr  flex flex-row justify-center items-center  h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px] "> */}
            <Image
              className="  object-contain h- p-0 float-left xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6    h-[180px] w-[170px] m-2 xs:h-[320px] xs:w-[300px] sm:h-[360px] sm:w-[300px] md:h-[380px] md:w-[320px] lg:h-[390px]   lg:w-[350px]  xl:h-[400px]  xl:w-[400px]"
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

        <div className="  text-3xl font-bold text-white  xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2   xs:mr-4  sm:mr-20 ">
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
        {/*  card is custom css ./compnonet/card.css */}
        <div className="  flex justify-center">
          <div className=" card w-[90%] sm:w-[80%] mt-10 mb-10 rounded-lg bg-primary2 h-[180px] sm:h-[150px] flex flex-col justify-center">
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




        {/* social media section start */}
        <div className="social-buttons">
          <a href="https://github.com/Milan-Bhingradiya" target="_blank" className="social-button github">
            <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/milanbhingradiya" target="_blank" className="social-button linkedin">
            <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Icons" stroke="none" stroke-width="1">
                <g transform="translate(-702.000000, -265.000000)">
                  <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                  </path>
                </g>
              </g>
            </svg>
          </a>

          <a href="https://www.instagram.com/milan__bhingradiya" target="_blank" className="social-button instagram">
            <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        {/* social media section end  */}
      </div>
    </>
  );
}
