import React, { useEffect } from "react";

import Image from "next/image";
import menuImage from "../../../public/menu.png";
import useApnaStore from "../store/store";
import Link from "next/link";

export default function Navbar() {
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  const { menuOnClick } = useApnaStore();
  const isSidebarWide = useApnaStore((state) => state.isSidebarWide);

  return (
    <>
      {/*  */}

      <div className="flex flex-row    justify-between h-[60px] w-[100%] ">
        <Link href={"/"}>
          <div className=" flex flex-row p-5">
            <div className="text-white ml-[5px]">Milan</div>
            <div className="text-primary ml-[5px] pl-1 pr-1 h-[25px]  bg-white">
              OP
            </div>
          </div>
        </Link>

        <div
          onClick={() => {
            //state change late so i change before setstate..at the end state will be chnage ..
            menuOnClick(!isSidebarWide);
            updatewide();
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
      {/*  */}
    </>
  );
}
