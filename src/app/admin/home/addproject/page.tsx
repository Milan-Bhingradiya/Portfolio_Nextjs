"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

import { AddProjectCall } from '@/services/htttp';
import Tag from './component/Tag';

interface ProjectPayload {
    // Define the properties and their types expected in the payload object
    // For example:
    thumbnail: any;
    photos: any;
    name: string;
    desc: string;
    technology: string[];
}

export default function Page() {

    const tagRef = useRef<HTMLInputElement>(null);

    // states
    const [selectedThumbnail, setSelectedsThumbnail] = useState<File[]>([]);
    const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Technology, setTechnology] = useState<string[]>([]);




    const [IsLoading, setIsLoading] = useState(false);
    // handle form...

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("sumit called");

        const payload = {
            thumbnail: selectedThumbnail,
            photos: selectedPhotos,
            title: Title,
            desc: Desc,
            technology: Technology,
        }

        console.log(payload);
        const res = await AddProjectCall(payload);
        if(res?.data.status==true){

            alert(res.data.data.title + " project is added successfully");
            setIsLoading(false);
        }else{
            alert( "Failed to Upload  project TRY Again :(,  reason-> " +res?.data.reason);
            setIsLoading(false);

        }
    }

    // select img functions.
    const selectThumbnail = (e: any) => {
        const filestemp = e.target.files;
        const imageArray = filestemp;
        setSelectedsThumbnail([...selectedThumbnail, ...imageArray]);
    };

    const selectMultiplePhotos = (e:any) => {
        const filestemp = e.target.files;
        // const imageArray = Array.from(filestemp);
        const imageArray = filestemp;
        setSelectedPhotos([...selectedPhotos, ...imageArray]);
    };



    const handleOnSubmitOfTechnology = (e: any) => {
        e.preventDefault();
        const val = tagRef.current?.value;
        setTechnology((prev: string[]): string[] => {
            return [...prev, val!];
        });
        tagRef.current!.value = "";
    };


    return (
        <div className=' bg-[#F2F3F5] h-[100vh] font-semibold '>

            <div className='p-8 pl-14 text-3xl '>
                {!IsLoading ? "Add Project":"Adding Project...."} 
            </div>

            {!IsLoading && <div className='  bg-white m-4 border rounded-xl'>

                <div>
                    {/* thumb nail img upload-------------------- */}
                    <div className='m-5'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">upload Thumbnail</label>
                        {/* show selected thumbnail */}
                        {selectedThumbnail && selectedThumbnail.map((image, index) => (
                            <div key={index} className=' border   m-1'>
                                <Image src={URL.createObjectURL(image)}
                                    alt='wait karle bro'
                                    width={0}
                                    height={0}
                                    style={{ width: '150px', height: '150px' }} >
                                </Image>
                            </div>
                        ))}
                        {selectedThumbnail.length == 0 && <div className='border-black border border-dotted h-[100px] w-[300px] rounded-2xl flex flex-row justify-center items-center overflow-x-auto whitespace-nowrap'>
                            <input multiple id="select-thumbnail" type='file' style={{ display: "none" }} onChange={selectThumbnail}>
                            </input>
                            <label htmlFor="select-thumbnail" className=' b'>
                                <div className='flex flex-col '>
                                    {/* icon */}
                                    <div className='flex flex-row justify-center items-center m-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    {/* text */}
                                    <div>Drag & drop any file here</div>
                                </div>
                            </label>
                        </div>}
                    </div>
                    {/* end img upload... */}

                    {/* photos img upload-------------------- */}
                    <div className='m-5'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">upload Photos</label>
                        {selectedPhotos && <div className=' flex flex-row flex-wrap'>
                            {selectedPhotos.map((image, index) => (
                                <div key={index} className='h-[150px] w-[150px] m-1  '>
                                    <Image src={URL.createObjectURL(image)}
                                        alt='wait kar le bro'
                                        width={0}
                                        height={0}
                                        style={{ width: '150px', height: '150px' }}
                                    >
                                    </Image>
                                </div>
                            ))}
                        </div>
                        }

                        {selectedPhotos.length == 0 && <div className='border-black border border-dotted h-[100px] w-[300px] rounded-2xl flex flex-row justify-center items-center'>
                            <input multiple id="select-photos" type='file'
                                accept="image/*" style={{ display: "none" }} onChange={selectMultiplePhotos}>
                            </input>
                            <label htmlFor="select-photos" className=' b'>
                                <div className='flex flex-col '>
                                    {/* icon */}
                                    <div className='flex flex-row justify-center items-center m-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    {/* text */}
                                    <div>Drag & drop any file here</div>
                                </div>
                            </label>
                        </div>}
                    </div>
                    {/* end img upload... */}

                    {/* ------------------------ */}
                    <div className='m-5'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    {/* ------------------------ */}
                    <div className='m-5'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Desctiption in four line</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={(e) => setDesc(e.target.value)}></input>
                    </div>

                    {/* ------------------------ */}


                    {/* ---------tehcnology--------------- */}
                    <div className='m-5'>

                        <div  >

                            <div className='text-2xl'>
                                Enter Tags
                            </div>

                            <form onSubmit={handleOnSubmitOfTechnology}>

                                <div className='flex flex-row flex-wrap '>
                                    {Technology.map((data, index) => {
                                        return (

                                            <Tag name={data} key={index} />
                                        );
                                    })}
                                    <div style={{ display: 'inline-block' }}>
                                        <input
                                            type='text'
                                            ref={tagRef}
                                            id="inputtag_textfiled"
                                            placeholder="Enter Tags here"

                                        />

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* -----------technology section end------------- */}

                    {/* ------------------------ */}
                    <div className='m-5'>
                        <div  onClick={handleSubmit} className='bg-black h-12 w-60 rounded-xl text-white flex flex-row justify-center items-center'>
                            Submit
                        </div>
                    </div>
                    {/* ------------------------ */}
                </div>




                {/* 
                 */}




            </div>}

        </div>
    )
}
