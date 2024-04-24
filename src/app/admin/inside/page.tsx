import React from 'react'
import Carousel from './component/Carousel'

export default function page() {
  return (
    <div className='text-black border border-black m-[15px] h-min-[100vh]  '>



      <h1 className='  font-bold  text-2xl font-extrabold m-4'> All projects</h1>


      <div className='flex flex-col m-5 bg-white  '>

        <div
          className='flex flex-row'
        >
          <Carousel></Carousel>
          <Carousel></Carousel>

        </div>
        <div id="detailcard_of_project" className='m-2 border w-full'>

          <div className='flex flex-row  '>
            {/* -------------------------------------------------- */}
            <div className='m-2'>
              <label className="font-medium">
                Title
              </label>
              <input
                type="text"
                required
                name="name"
                className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            {/* -------------------------------------------------- */}


            {/* -------------------------------------------------- */}
            <div className='m-2'>
              <label className="font-medium">
                Num of photos
              </label>
              <input
                type="text"
                required
                name="name"
                className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            {/* -------------------------------------------------- */}

          </div>

          {/* -------------------------------------------------- */}
          <div className='m-2'>
            <label className="font-medium">
              Short description
            </label>
            <textarea required
              name='message'
              // value={Payload.message}
              placeholder="Your message here..."

              // onChange={handleChange}
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
          </div>
          {/* -------------------------------------------------- */}


          {/* -------------------------------------------------- */}
          <div className='m-2'>
            <label className="font-medium">
              Long description
            </label>
            <textarea required
              name='message'
              // value={Payload.message}
              placeholder="Your message here..."

              // onChange={handleChange}
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
          </div>
          {/* -------------------------------------------------- */}



          {/* -------------------------------------------------- */}
          <div className='m-2'>
            <label className="font-medium">
              Tags
            </label>
            <input
              type="text"
              required
              name="name"
              className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
          </div>
          {/* -------------------------------------------------- */}






        </div>

      </div>



    </div>
  )
}

