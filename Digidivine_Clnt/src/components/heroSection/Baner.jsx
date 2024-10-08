import React from "react";
import "./Baner.css";
import banerImage from "../../assets/pageImages/10.webp";
import { Typewriter } from "react-simple-typewriter";

export default function Baner() {
  return (
    <div
      className="home"
      data-aos="zoom-in"
      data-aos-duration="800"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
                     url(${banerImage})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '65vmax',
        boxShadow: '0px 8px 8px -6px rgba(0, 0, 0, 0.3)',
        borderBottomRightRadius: '10rem',
      }}
    >
      <div className="heading">
        <h1 data-aos="flip-down" data-aos-duration="3000">
          A Better Place To
        </h1>

        <div className="lg:text-[2em]  text-blue-300 mx-auto mt-2  text-center   text-neutral-400  uppercase font-sans font-bold">
          {/* Web dev */}

          <Typewriter
            words={[
              "Career Growth",
              "Exposure",
              "IT Jobs",
              "BPO Jobs",
            ]}
            loop={true}
            cursor={true}
            typeSpeed={90}
          />
        </div>

        {/* <h2>So why wait? </h2>{" "} */}
        <p data-aos="zoom-in-right" data-aos-duration="2000">
        Transform your workforce with innovative talent acquisition strategies, ensuring seamless onboarding experiences. Achieve excellence in team performance with our meticulous employee training programs. Elevate your company culture with strategic engagement initiatives that drive results. Build a strong employer brand with our tailored recruitment solutions, designed to meet your unique hiring needs.
        </p>

        <a href="">
          <button data-aos="zoom-in" data-aos-duration="2000">
            Contact us
          </button>
        </a>
      </div>
    </div>
  );
}
