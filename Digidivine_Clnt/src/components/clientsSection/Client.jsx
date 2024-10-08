import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import CountUp from "react-countup";
import banerImage from "../../assets/pageImages/2.png";

export default function Client() {
  return (
    <>
      <div className="bg-blue-gray-4000 h-full w-full flex flex-wrap  justify-center items-center lg:gap-[1em] gap-[3em] flex-col lg:flex-row   ">
        {/* --------------- segmet -1 ------------- */}
        <div className="lg:w-[50%] bg-deep-orange-4000 lg:pl-[1.8em] py-2 px-[4em]    ">
          <div data-aos="zoom-out" data-aos-duration="2000">
            <p className="font-semibold  text-blue-900 ">Clients Benifits</p>
            <p className=" lg:text-[2.6em] text-[2em] font-bold">
              What our Client Say about Us?
            </p>
          </div>
          <div
            className="w-[90%]  "
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <p className="text-blue-gray-300 text-wrap text-pretty py-2 text-justify">
            Our clients consistently commend Digi Divine Online Services for our commitment to excellence and our ability to deliver results that exceed expectations. They appreciate our seamless project execution, innovative solutions, and the personalized approach we bring to every project. Whether it’s transforming their online presence through web development, enhancing their reach with digital marketing, or delivering cutting-edge mobile and software solutions, our clients value the partnership we build with them, trusting us as a reliable and responsive extension of their own teams.
            </p>
          </div>
        </div>
        {/* --------------- segmet -2 ------------- */}
        <div className="lg:w-[40%] w-full bg-blue-3000  flex flex-col flex-wrap   ">
          <div
            className="h-full lg:w-[100%] bg-black "
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <img
              src={banerImage}
              className=" lg:h-[60vh] h-[60%] w-[100%]  bg-cover bg-center flex flex-wrap justify-center items-center  "
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      {/* --------------  Small Card --------------- */}
      <div
        className="bg-indigo-3000 h-[8em] w-[13em] z-1 relative lg:bottom-[13em] lg:left-[48%] bottom-[20em] left-[20%] md:bottom-[34em] md:left-[40%] rounded-lg  flex justify-center items-center gap-[1em] glass-effect    "
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="">
          <i className=" glass-effect fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full   text-center text-primary outline-none focus:outline-none">
            <PiCertificateFill className="h-[2em] w-[2em] hover:text-blue-500" />
          </i>
        </div>
        <div className="flex flex-col flex-wrap">
          <div>
            <p className="text-black text-[1.3em] font-semibold">
              {" "}
              <CountUp end={81} duration={5}    />+
            </p>
          </div>
          <div>
            <p className="text-black text-[0.8em] font-semibold">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
