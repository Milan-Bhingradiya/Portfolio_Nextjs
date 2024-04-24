"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Contactus_apicall } from '@/services/htttp';
import Spinner from '@/utils/Spinner';


// TODO : benchod submit par click kar to structure hali jay chhe ane sidebar open thay chhe resolve this benchosss
export default function Page() {

  const [isOpen, setIsOpen] = useState(false);
  const [Category, setCategory] = useState("Select Category");

  var payload = {
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
  }

  const handleChange = (e: any) => {
    setPayload(Payload => ({ ...Payload, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    callAPI();

  };
  const [Payload, setPayload] = useState(payload);


  const callAPI = async () => {
    setapicalling(true);
    const res = await Contactus_apicall(Payload)
    if (res) {
      alert("Message Sent Successfully")
    } else {
      alert("Message Not Sent")
    }
    setapicalling(false);
  };

  const [apicalling, setapicalling] = useState(false);


  // //  avi ritna apicalling varible change karu to prolem nathi avto setstate thi karu to side bar open thay chhe..
  // useEffect(() => {
  //   //  setTimeout(() => {
  //   //   setapicalling((prev) => !prev);
  //   //  }, 2000);
  // });



  return (

    <>
      <Navbar></Navbar>
      {/* <div className=' w-[100vw] h-[100vh] text-white '> */}
      <main className="relative py-8 bg-newprimary  w-[100vw]  ">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8 p-6">
          <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">

            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p className="text-gray-300">
              I love to hear Suggestions and query from you!
            </p>
          </div>
          {apicalling && <div className='flex justify-center h-[50vh] items-center'>
            <Spinner />

          </div>
          }
          {!apicalling && <div className={ `mt-12  mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8  rounded-xl`}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  value={Payload.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name='email'
                  value={Payload.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  name='subject'
                  value={Payload.subject}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              {/* <div>
                  <label className="font-medium">
                    Phone number
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>US</option>
                        <option>ES</option>
                        <option>MR</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      placeholder="+1 (555) 000-000"
                      required
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div> */}




              <div>
                <label className="font-medium">
                  Message
                </label>
                <textarea required
                  name='message'
                  value={Payload.message}
                  placeholder="Your message here..."

                  onChange={handleChange}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
              </div>
              <button onClick={handleSubmit}
                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          </div>}
        </div>
        {/* <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div> */}
      </main>
      {/* </div > */}
    </>
  )
}
