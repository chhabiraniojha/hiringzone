import React from "react";
import { FaGears, FaVialCircleCheck } from "react-icons/fa6";
import { SiMarketo } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-blue-gray-3000 h-full w-full py-[5em]       ">
      {/* <div className="flex justify-center pt-2 bg-deep-orange-2000   ">
        <div
          className=" lg:w-[50%]  w-full flex justify-center items-center flex-col flex-wrap bg-lime-3000"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="text-center font-semibold   text-blue-900">
            What we’re offering
          </p>
          <p className=" lg:text-[2.6em] text-[1.3em] text-center font-bold">
            {" "}
            Services we’re providing to our customers
          </p>
        </div>
      </div> */}

      <div className="bg-light-green-6000 flex gap-[2em] items-center justify-center mt-5 flex-wrap px-3 out line">
        {/* -----------card 1-------------- */}
        <div
          className=" hover-card   bg-gray-100 text-black shadow-lg h-[26em] lg:w-[17em] w-[18em] rounded-[1em] flex items-center flex-col  gap-2 py-2 px-2 "
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="  h-[9em] w-[9em] rounded-[50%] bg-indigo-2000  shadow-lg flex flex-wrap justify-center items-center ">
            <FaGears className="h-full w-[50%] " />
          </div>
          <div className="h-[40%]   flex flex-col  mt-2  justify-center items-center   ">
            <p className="text-[1.3em] text-center font-bold">
              Web Application Development
            </p>

            <p className="text-center text-[0.9em]  mt-2 overflow-scroll scroll-container" >
              <style jsx>{`
                .scroll-container::-webkit-scrollbar {
                  display: none; /* Chrome, Safari and Opera */
                }
                .scroll-container {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }
              `}</style>
              Crafting responsive, user-friendly websites that captivate your
              audience and drive business growth. At Digi Divine, we turn your
              vision into a dynamic online presence.
            </p>
          </div>

          <div className="h-[3em] w-[70%] rounded-md bg-indigo-100 flex justify-center items-center">
            <p className="text-center text-black">Read More</p>
          </div>
        </div>
        {/* -----------card 2-------------- */}
        <div
          className=" hover-card bg-gray-100 text-black shadow-lg h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className=" h-[9em] w-[9em] rounded-[50%]  shadow-lg  flex flex-wrap justify-center items-center ">
            <FaMobileAlt className="h-[50%] w-[50%]" />
          </div>
          <div className="h-[40%]   flex flex-col  mt-2  justify-center items-center   ">
            <p className="text-[1.3em] text-center font-bold">
              Mobile Application Development
            </p>
            <div className=""></div>
            <p className="text-center text-[0.9em]  mt-2 overflow-scroll scroll-container">
              Designing and developing intuitive mobile apps that offer seamless
              user experiences, ensuring your business stays connected with
              customers on the go.
            </p>
          </div>

          <div className="h-[3em] w-[70%] rounded-md bg-indigo-100 flex justify-center items-center">
            <p className="text-center text-black">Read More</p>
          </div>
        </div>
        {/* -----------card 3-------------- */}
        <div
          className=" hover-card bg-gray-100 text-black shadow-lg  h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className=" h-[9em] w-[9em] rounded-[50%]  shadow-lg  flex flex-wrap justify-center items-center ">
            <FaVialCircleCheck className="h-full w-[50%]" />
          </div>
          <div className="h-[40%]   flex flex-col  mt-2  justify-center items-center   ">
            <p className="text-[1.3em] text-center font-bold">
            Software Development
            </p>
            <div className=""></div>
            <p className="text-center text-[0.9em]  mt-2 overflow-scroll scroll-container">
            Providing end-to-end software development services, delivering custom solutions tailored to meet your unique business needs and industry demands.
            </p>
          </div>

          <div className="h-[3em] w-[70%] rounded-md bg-indigo-100 flex justify-center items-center">
            <p className="text-center text-black">Read More</p>
          </div>
        </div>
        {/* -----------card 4-------------- */}
        <div
          className=" hover-card bg-gray-100 text-black shadow-lg h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className=" h-[9em] w-[9em] rounded-[50%]   shadow-lg  flex flex-wrap justify-center items-center ">
            <SiMarketo className="h-full w-[50%]" />
          </div>
          <div className="h-[40%]   flex flex-col  mt-2  justify-center items-center   ">
            <p className="text-[1.3em] text-center font-bold">
            Digital Marketing Services
            </p>
            <div className=""></div>
            <p className="text-center text-[0.9em]  mt-2 overflow-scroll scroll-container">
            Boost your brand’s visibility with our strategic digital marketing services, designed to engage your target audience and maximize ROI across all platforms.s
            </p>
          </div>

          <div className="h-[3em] w-[70%] rounded-md bg-indigo-100 flex justify-center items-center">
            <p className="text-center text-black">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
