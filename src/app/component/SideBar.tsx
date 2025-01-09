import React from "react";
import Link from "next/link";
import useApnaStore from "../store/store";
export default function SideBar() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const currentPage = useApnaStore((state) => state.currentPage);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  const updatePage = useApnaStore((state) => state.updatePage);

  let handleOnClick = (pagename: string) => {
    updatePage(pagename);
  };
  return (
    <>
      {/* menubar */}

      {/* old */}
      {/* <div className={` h-[100vh] ${isWide ? "w-[150px]" : "w-[0px]"} sm:${isWide ? "w-[300px]" : "w-[0px]"}  transition-all duration-700 ease-out  overflow-hidden  text-2xl text-white flex flex-col justify-center items-center  absolute top-0 right-0 `}> */}

      <div
        className={`
        fixed top-0 right-0 h-[100vh] 
        ${isWide ? "w-[150px]" : "w-[0px]"} 
        sm:${isWide ? "w-[300px]" : "w-[0px]"}  
        transition-all duration-700 ease-out 
        overflow-hidden text-2xl text-white 
        flex flex-col justify-center items-center
        z-50
      `}
      >
        {/* ------------------------------------------------------------------------------------------------------------- */}
        <Link
          href={"/"}
          onClick={() => {
            handleOnClick("/");
          }}
        >
          {" "}
          <div
            className={`m-4 ${
              currentPage == "/"
                ? "font-bold text-3xl  transition-all duration-300"
                : ""
            }`}
          >
            Home
          </div>
        </Link>

        {/* ------------------------------------------------------------------------------------------------------------- */}
        <Link
          href={"/projects"}
          onClick={() => {
            handleOnClick("Projects");
          }}
        >
          <div
            className={`m-4 ${
              currentPage == "Projects"
                ? "font-bold text-3xl  transition-all duration-300"
                : "hover:font-semibold"
            } `}
          >
            Projects
          </div>
        </Link>

        {/* ------------------------------------------------------------------------------------------------------------- */}

        <Link
          href={"/Education"}
          onClick={() => {
            handleOnClick("Education");
          }}
        >
          <div
            className={`m-4 ${
              currentPage == "Education"
                ? "font-bold text-3xl  transition-all duration-300"
                : "hover:font-semibold"
            }`}
          >
            Education
          </div>
        </Link>

        {/* ------------------------------------------------------------------------------------------------------------- */}

        <Link
          href={"/Contact"}
          onClick={() => {
            handleOnClick("Contact");
          }}
        >
          <div
            className={`m-4 ${
              currentPage == "Contact"
                ? "font-bold text-3xl  transition-all duration-300"
                : "hover:font-semibold"
            }`}
          >
            Contact
          </div>
        </Link>

        {/* ------------------------------------------------------------------------------------------------------------- */}
      </div>
      {/*  */}
    </>
  );
}
