"use client";
import "../app/global.css";
import Navbar from "./component/Navbar";
import "../app/page.css";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

import Image from "next/image";
import menuImage from "../../../public/menu.png";
import useApnaStore from "./store/store";
import Link from "next/link";
import SideBar from "./component/SideBar";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {


  const { isSidebarWide, menuOnClick, updateisSidebarWide } = useApnaStore();
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if the clicked element is a descendant of #page_hold_div or SideBar
      if (!target.closest('#page_hold_div') && !target.closest('SideBar')) {
        menuOnClick(!isSidebarWide);
        updateisSidebarWide(); // Call menuOnclick function if clicked outside the specified elements
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [menuOnClick, isSidebarWide]);//idk why i put this here this time idk 
  return (
    <html lang="en">
      <body className="bg-newprimary  " >
        <div className="maindiv flex flex-row  ">
          <div id="page_hold_div" className="">{children}</div>
          <SideBar></SideBar>
        </div>
        {/* <div className='absolute -z-30 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div> */}
       
        
      </body>
      
    </html>
  );
}
