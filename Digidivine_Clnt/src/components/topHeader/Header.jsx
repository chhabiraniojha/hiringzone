import React from "react";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram ,FaFacebookSquare} from "react-icons/fa";
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <div className="bg-black  text-white flex fle-col flex-wrap w-full justify-center   items-center  ">
        <div className=" flex flex-row justify-center ml-auto mr-auto flex-wrap">
          <MapPinIcon className="h-4 w-4 mx-2 text-blue-800" />
          <p className="text-[0.8em]">
          Nandan bihar, 759013
          </p>
          {/* <PhoneIcon className="h-4 w-4 mx-2  text-blue-800" />
          <p className="text-[0.8em]  ">+91 9938300585</p> */}
          <EnvelopeIcon className="h-4 w-4 mx-2  text-blue-800" />
          <p className="text-[0.8em]">info@hiringzone.site</p>
        </div>
        <div className=" flex flex-row justify-center  items-center flex-wrap ml-auto mr-auto gap-2  ">
          <FaInstagram className="h-[1.5em] w-[1.5em]  " />
          <FaXTwitter  className="h-[1.5em] w-[1.5em] " />
          <FaFacebookSquare  className="h-[1.5em] w-[1.5em]" />
          <FaLinkedin  className="h-[1.5em] w-[1.5em] " />
          <div className="h-[2em] w-[7em] bg-blue-900 flex items-center justify-center rounded-lg">
            <p className=" ">Get a quote</p>
          </div>
         
        </div>
      </div>
    </>
  );
}
