"use client";
import React, { useState } from 'react'
import Navbar from '../component/Navbar'

export default function Page() {

  const [isOpen, setIsOpen] = useState(false);
  const [Category, setCategory] = useState("Select Category");

  var payload = {
    "title": "",
    "category": "",
    "desc": ""
  }
  const [Payload, setPayload] = useState(payload);
  return (

    <>
      <Navbar></Navbar>
      <div className=' w-[100vw] h-[100vh] text-white '>
        <div className='  m-4 p-2  rounded-xl text-white  md:m-32 md:mt-5'>

          <div className=" flex flex-row justify-center text-white text-2xl ms:text-3xl font-semibold m-5">Connect with Milan .. </div>


          <div>


            {/* ------------------------ */}
            <div className='m-5'>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white ">Title</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={(e) => { setPayload((payload) => { return { ...payload, "title": e.target.value } });  console.log(Payload) }  }></input>
          </div>
          {/* ------------------------ */}



          <div className="m-5">

            <div className="dropdown inline-block relative w-full">
              <button onClick={() => {
                setIsOpen(!isOpen);
              }} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                <span className="mr-1 text-sm">{Category}</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul className={`dropdown-menu  ${isOpen ? "" : "hidden"}  text-gray-700 pt-1`}>
                  <li onClick={() => { setPayload((payload) => { return { ...payload, category:"Project related"}}); setCategory("Project related"); setIsOpen(false) }} className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Project related</a></li>
                  <li onClick={() => { setPayload((payload) => { return { ...payload, category: "Refferal" } }); setCategory("Referals"); setIsOpen(false) }} className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Referals</a></li>
                  <li onClick={() => { setPayload((payload) => { return { ...payload, category: "Personal Tips" } }); setCategory("Referals"); setIsOpen(false) }} className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Personal Tips</a></li>
              </ul>
            </div>

          </div>
          {/* ------------------------ */}

          <div className='m-5'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white ">Desctiption</label>
              <textarea id="first_name" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  w-full p-2.5  h-[200px]" placeholder="John" required onChange={(e) => { setPayload((payload) => { return { ...payload, "desc": e.target.value } }); console.log(Payload) }}></textarea>
          </div>

          {/* ------------------------ */}



          {/* ------------------------ */}
          <div className='m-5'>
            <div className='bg-black h-12 w-full rounded-xl text-white flex flex-row justify-center items-center'>
              Submit
            </div>
          </div>
          {/* ------------------------ */}
        </div>




        {/* 
                 */}




      </div>

    </div >
    </>
  )
}
