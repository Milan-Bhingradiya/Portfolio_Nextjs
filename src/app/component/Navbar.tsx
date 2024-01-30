import React from "react";

import Image from "next/image";
import menuImage from "../../../public/menu.png";
import useApnaStore from "../store/store";

export default function Navbar() {
  let menuclick = (wide: boolean): void => {
    let targetElement: any = document.getElementById("page_hold_div");
    // after close menu hight shoulf be max so i change here... inline css not possible because after some 0.5 sec we have to max hight and in inlie css instant hight is changing...
    if (wide) {
      targetElement.classList.remove("h-full");
      targetElement.classList.add("h-[100vh]");
      targetElement.classList.add("overflow-hidden");
      targetElement.classList.remove("close_page_hold_div");
      targetElement.classList.add("open_page_hold_div");
      targetElement.classList.add("blueborder");
    } else {
      targetElement.classList.remove("open_page_hold_div");
      targetElement.classList.add("close_page_hold_div");
      setTimeout(() => {
        targetElement.classList.add("h-full");
        targetElement.classList.remove("blueborder");
      }, 500);

      //0.5s beacuse closing animaiton speed is 0.5s..
    }
  };

  const isWide = useApnaStore((state) => state.isSidebarWide);
  const updatewide = useApnaStore((state) => state.updateisSidebarWide);
  return (
    <>
      {/*  */}

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
