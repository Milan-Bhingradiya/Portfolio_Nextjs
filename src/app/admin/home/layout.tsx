import React from 'react'

import Link from "next/link";

export default function layout({ children }:any) {
  return (
    <div className='h-[100vh] w-[100vw] bg-[#F2F3F5] flex flex-row'>
      <div className=' w-[16%] bg-[#181D19] text-white font-medium m-2 rounded-xl'    >

        <div className='h-24 flex flex-row justify-center items-center'><h1>MilanOp</h1></div>

        {/*.............................  */}

        <Link href="/admin/home/addproject">

        <div className='flex flex-row justify-center items-center m-4 hover:bg-[#343A46]  '>
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clipRule="evenodd" />
          </svg>
          {/*  */}
          <div className='h-10 ml-2 rounded-xl  hover:bg-[#343A46] rounded-sm flex flex-row justify-center items-center'>Add project</div>
        </div>
        </Link>







        {/*.............................  */}
        <Link href="/admin/home/addexperience">

        <div className='flex flex-row justify-center items-center m-4 hover:bg-[#343A46]  '>
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
          </svg>


          {/*  */}
          <div className='h-10 ml-2 rounded-xl  hover:bg-[#343A46] rounded-sm flex flex-row justify-center items-center'>Add experience</div>
        </div>
        </Link>


        {/*.........................................  */}
        <Link href="/admin/home/addeducation">

        <div className='flex flex-row justify-center items-center m-4 hover:bg-[#343A46]  '>
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>


          {/*  */}
          <div className='h-10 ml-2 rounded-xl  hover:bg-[#343A46] rounded-sm flex flex-row justify-center items-center'>Add education</div>
        </div>
        </Link>

        {/*.........................................  */}
        <Link href="/admin/home/addproject">

     
        <div className='flex flex-row justify-center items-center m-4 hover:bg-[#343A46]  '>
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
          </svg>


          {/*  */}
          <div className='h-10 ml-2 rounded-xl  hover:bg-[#343A46] rounded-sm flex flex-row justify-center items-center'>Add certificates</div>
        </div>
        </Link>

        {/*.........................................  */}


      </div>
      <div className='h-[100vh]  overflow-y-auto w-[84%]'> {children}</div>



    </div>
  )
}
