
"use client"
import { LoginCall } from "@/services/htttp";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await LoginCall(Id, Password);
    console.log(res?.data.status);
    if (res?.data.status == true) {
      router.push("home");
    } else {
      alert("Wrong password");
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-white flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className=" h-[280px] md:h-[300px] w-[500px] bg-primary2 rounded-xl text-white m-4">
          <div className="flex justify-center p-4 font-bold text-sm md:text-2xl">
            Admin Panel
          </div>
          <div className="flex flex-col items-center">
            {/*  */}
            <div className="flex justify-center m-3 w-[70%] ">
              <div className="relative h-11 w-full ">
                <input
                  placeholder="Standard"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  onChange={(e) => setId(e.target.value)}
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  ID
                </label>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center m-3 w-[70%] ">
              <div className="relative h-11 w-full ">
                <input
                  placeholder="Standard"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            {/*           */}
            <input type="submit" value={"LOGIN"} className="bg-primary rounded-xl h-12 w-[70%] mt-4 flex flex-row justify-center items-center"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
