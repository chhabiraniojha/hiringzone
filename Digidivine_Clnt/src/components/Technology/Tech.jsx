import React from "react";
import { FaGears, FaVialCircleCheck } from "react-icons/fa6";
import { SiMarketo } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import banerImage from "../../assets/pageImages/8.png";
import banerImage1 from "../../assets/pageImages/4.png";
import banerImage2 from "../../assets/pageImages/5.png";
import banerImag3 from "../../assets/pageImages/6.png";

const Parallax = () => {
  return (
    <div>
      <p className=" text-[2em] text-center font-bold my-[1em] ">
        Our Development Process
      </p>

      <div
        className="  min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            `url(${banerImage})`,
        }}
      ></div>

      <div className="bg-blue-gray-3000 h-full w-full py-[5em]     ">
        <div className="flex justify-center pt-2 bg-deep-orange-2000  ">
          <div
            className=" lg:w-[50%] w-[80%] flex justify-center items-center flex-col flex-wrap bg-lime-3000"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <p className="text-center text-blue-900 font-semibold">
              What we’re offering
            </p>
            <p className=" text-[2em] text-center font-bold ">
              {" "}
              Our Development Process
            </p>
          </div>
        </div>

        <div className="bg-blue-900 flex gap-9 items-center justify-center mt-5 flex-wrap ">
          {/* -----------card 1-------------- */}
          <div
            className="  text-white h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="bg-blue-500 h-[2em] w-[2em] absolute  rounded-full z-20   text-white flex justify-center items-center ">
              1
            </div>
            <div className="h-[10em] w-[10em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center border border-dotted border-gray-500 ">
              <div
                className="h-[9em] w-[9em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center  "
                style={{
                  backgroundImage:
                  `url(${banerImage1})`,
                }}
              ></div>
            </div>

            <div className="  h-[40%] flex flex-col justify-center gap-3 flex-wrap ">
              <p className="text-[1.3em] text-center font-bold">
                Requirement Gathering
              </p>
              <p className="text-center text-[0.9em]  ">
              We start by thoroughly understanding your business needs, objectives, and target audience to ensure the solutions we provide are perfectly aligned with your goals.
              </p>
            </div>
          </div>
          {/* -----------card 2-------------- */}
          <div
            className=" text-white h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="bg-blue-500 h-[2em] w-[2em] absolute  rounded-full z-20   text-white flex justify-center items-center ">
              2
            </div>
            <div className="h-[10em] w-[10em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center border border-dotted border-gray-500 ">
              <div
                className="h-[9em] w-[9em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center  "
                style={{
                  backgroundImage:
                  `url(${banerImage2})`,
                }}
              ></div>
            </div>
            <div className="  h-[40%] w flex flex-col justify-center items-center gap-3 flex-wrap  ">
              <p className="text-[1.3em] text-center font-bold">
                Design Prototyping
              </p>
              <p className="text-center text-[0.9em]  ">
              Our team creates interactive prototypes that visualize the user experience, allowing for early feedback and ensuring the design meets your expectations before development begins.
              </p>
            </div>
          </div>
          {/* -----------card 3-------------- */}
          <div
            className="text-white h-[26em] w-[18em] rounded-[1em] flex items-center flex-col  gap-3 py-3 px-2"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="bg-blue-500 h-[2em] w-[2em] absolute  rounded-full z-20   text-white flex justify-center items-center ">
              3
            </div>
            <div className="h-[10em] w-[10em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center border border-dotted border-gray-500 ">
              <div
                className="h-[9em] w-[9em] rounded-[50%] bg-cover bg-center flex flex-wrap justify-center items-center  "
                style={{
                  backgroundImage:
                  `url(${banerImag3})`,
                }}
              ></div>
            </div>
            <div className="  h-[40%] w flex flex-col justify-center items-center gap-3 flex-wrap  ">
              <p className="text-[1.3em] text-center font-bold">
                Final solution
              </p>
              <p className="text-center text-[0.9em]  ">
              We develop, test, and deliver a final product that not only meets but exceeds your requirements, ensuring a seamless and successful launch of your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
