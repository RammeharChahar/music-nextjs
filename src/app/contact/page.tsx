"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="w-full h-screen">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden flex flex-col justify-center items-start">
        <div className="relative w-full h-full lg:mt-20 flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col justify-center lg:w-[40rem] sm:w-[18rem]">
          <h1 className="text-lg sm:text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
        <p className="text-lg px-30 text-center text-neutral-600 dark:text-neutral-400 flex-grow">We are here to help with any questions about our courses, programs and events. React out and let us know how we can assist you in your musical journey.</p>
          </div>
          <div className="flex flex-col gap-4 sm:items-center">
            <input type="text" placeholder="Your email address" className="w-[20rem] h-[4rem] lg:w-[40rem] lg:h-[4rem] outline-none bg-black rounded-lg pl-4 text-white placeholder-gray-500"/>
            <input type="text" placeholder="Your message" className="input-field w-[20rem] h-[6rem] lg:w-[40rem] lg:h-[8rem] outline-none bg-black rounded-lg pl-4 text-white placeholder-gray-500"/>
            <button className="w-[10rem] px-5 py-2 self-start sm:sekce rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Send Message
      </button>
          </div>
        </div>
        <Meteors number={20} />
      </div>
  </div>
  )
}

export default page;