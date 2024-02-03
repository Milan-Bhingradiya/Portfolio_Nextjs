"use client";
import React from "react";
import Navbar from "../component/Navbar";

import useApnaStore from "../store/store";

export default function Page() {
  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  return (
    <>
      <div className={`${isWide ? "w-[90vw]" : "w-[100vw]"}  border`}>
        <Navbar></Navbar>
        <div
          className="h-max border h-[100%]"
        >
          smnmnm
        </div>
      </div>
    </>
  );
}
