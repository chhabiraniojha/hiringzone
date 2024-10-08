import React from "react";
import articileImage from "../../assets/pageImages/7.png";
export default function Choose() {
  return (
    <div className="bg-blue-gray-4000 h-full w-full flex flex-wrap gap-6 flex-col lg:flex-row  ">
      {/* --------------- segmet -1 ------------- */}
      <div className="lg:w-[40%] bg-deep-orange-4000 lg:pl-[1.8em] py-2 pl-[0.4em]   ">
        <div data-aos="zoom-out" data-aos-duration="3000">
          <p className="font-semibold   text-blue-900 ">*Company benefits</p>
          <p className=" lg:text-[2.6em] text-[2em] font-bold">
            Why you should choose Digi Divine ?
          </p>
        </div>

        <div className="bg-gray-3000 flex flex-wrap gap-2   ">
          <div className="   border-t-[2px] border-solid border-t-purple-500 h-[2.7em] w-[7em] flex justify-center items-center hover:text-[1.2em] hover:bg-purple-500 hover:text-white hover:font-bold  transition-all duration-300 ease-in-out">
            <p className="">Our Mission</p>
          </div>
          <div className="   border-t-[2px] border-solid border-t-purple-500 h-[2.7em] w-[7em] flex justify-center items-center hover:text-[1.2em] hover:bg-purple-500 hover:text-white hover:font-bold transition-all duration-300 ease-in-out">
            <p className="">Our vision</p>
          </div>
          <div
            className="   border-t-[2px] border-solid border-t-purple-500 h-[2.7em] w-[7em] flex justify-center items-center hover:text-[1.2em] hover:bg-purple-500 
          hover:text-white hover:font-bold transition-all duration-300 ease-in-out"
          >
            <p className="">Our History</p>
          </div>
        </div>
        <p
          className="text-blue-gray-300 text-wrap text-pretty py-2 text-justify"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
         At Digi Divine Online Services, we are committed to delivering excellence in every project we undertake. Our team of experts combines creativity, technology, and strategy to offer innovative solutions that drive your business forward. We focus on understanding your needs and providing personalized services that exceed your expectations.
        </p>
      </div>
      {/* --------------- segmet -2 ------------- */}
      <div
        className="lg:w-[50%]   flex flex-col flex-wrap  "
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <div className="mt-[3em] px-2  ">
          <p className="text-blue-gray-300 text-wrap text-pretty py-2 text-justify">
          Founded with a passion for technology and innovation, Digi Divine Online Services has grown into a trusted partner for businesses looking to enhance their digital footprint. Over the years, we have successfully completed numerous projects across various industries, earning a reputation for reliability and excellence.
          </p>
        </div>
        <div className="flex gap-7 flex-col lg:flex-row ">
          <img
            src= {articileImage}
            alt=""
            className="h-[8em] w-[12em] pl-2"
            data-aos="zoom-out"
            data-aos-duration="3000"
          />
          <div className="flex flex-wrap font-serif lg:flex-row flex-col  gap-1 my-3 lg:my-0  ">
            <div className="flex text-[1.2em] ">
              <p>✔️</p>
              <p>Expertise, Experience & Proven Track Record </p>
            </div>
            <div className="flex text-[1.2em] ">
              <p>✔️</p>
              <p>Expertise, Experience & Proven Track Record </p>
            </div>
            <div className="flex text-[1.2em] ">
              <p>✔️</p>
              <p>Expertise, Experience & Proven Track Record </p>
            </div>
            <div className="flex text-[1.2em] ">
              <p>✔️</p>
              <p>Expertise, Experience & Proven Track Record </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
