/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CtaSection = () => {
  return (
    <>
    <div className="relative px-10 md:px-24  dark:bg-gray-800 rounded-md">
    <img src="3dhumanshe.png" style={{ height:"200px", width:"100px"}} className="-mt-32 absolute top-0 left-0 md:left-12  object-contain" />

        <div className="lg:flex my-10 lg:items-center lg:justify-between w-full bg-white mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-lg shadow-xl z-20">
                <span className="m-10 block text-2xl font-extrabold capitalize">
                    Interrested in my work ?
                </span>
                <span className="m-10 text-indigo-500 text-lg  ">
                    Feel free to drop a message here!
                </span>
            <div className="m-10 lg:mt-0 lg:flex-shrink-0 mt-5">
                <div className=" inline-flex rounded-md shadow">
                    <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Download CV
                    </button>
                </div>
                <div className="inline-flex ml-3 rounded-md shadow">
                    <button type="button" className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='absolute bg-white h-[50%] bottom-0 left-0' />
    </>
  )
}

export default CtaSection