import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//  icons importing
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithubAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiPostman } from "react-icons/si";
// import { Key } from "lucide-react";

export default function Clients() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.6,
    },
  };
  const skillData = [
    {
      icon: "https://sparshhospitals.com/wp-content/uploads/2024/05/Sparsh-Healthcare-2048x829.png",
      name: "Sparash hospital",
    },
    {
      icon:  "https://aartisteelsltd.com/images/logo.png",
      name: " Arti steel",
    },
    {
      icon:  "https://ringsandknots.com/wp-content/uploads/2023/08/image.png",
      name: "Ring",
    },
    {
      icon: "https://www.geominehub.com/wp-content/uploads/2024/04/geo-mine-logo.png",
      name: "Geo minihub",
    },
    {
      icon:  "https://aartisteelsltd.com/images/logo.png",
      name: " Arti steel",
    },
    {
      icon:  "https://ringsandknots.com/wp-content/uploads/2023/08/image.png",
      name: "Geo minihub",
    },
  
  ];

  return (
    <div className="dark:bg-neutral-800 h-full w-full flex items-center flex-col justify-center">
      <p
        className=" text-[2em] text-center font-bold my-[1em] "
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        Our Happy Clients
      </p>

      <div
        className=" mt-[3em] lg:w-[70%] w-[90%]   "
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <Carousel
          className="dark:bg-neutral-800 mb-5  "
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className=" shadow-md flex justify-center items-center flex-col h-[5em] w-[7em] m-3 glowing-border dark:glowing-border-light flex-wrap"
            >
              <div className="text-blue-300 ">
                <img src={skill.icon} alt="" className="h-[3em] w-[4em]"/>
              </div>
              {/* <p className="text-blue-300 font-semibold font-sans text-[0.7em] text-center">
                {skill.name}
              </p> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
