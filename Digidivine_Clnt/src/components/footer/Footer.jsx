import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white px-8 pb-6 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit mb-2 !font-semibold !text-primary">
              Hiring Zone Private Limited
            </h4>
            {/* <p className="block antialiased font-sans text-inherit text-md mb-2 mt-0 font-normal !text-gray-600">
              Easy to use React components for Tailwind CSS and Material Design.
            </p> */}
            <div className="mt-6">
              <a href=" " target="_blank" rel="noreferrer">
                <i className="fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none">
                  <FaInstagram className="h-[2em] w-[2em] hover:text-red-500" />
                </i>
              </a>
              <a href=" " target="_blank" rel="noreferrer">
                <i className="fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none">
                  <FaFacebookSquare className="h-[2em] w-[2em] hover:text-blue-900 " />
                </i>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none">
                  <FaXTwitter className="h-[2em] w-[2em] hover:text-blue-500 " />
                </i>
              </a>
              <a href=" " target="_blank" rel="noreferrer">
                <i className="fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none">
                  <FaLinkedin className="h-[2em] w-[2em] hover:text-blue-500" />
                </i>
              </a>
             
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Knowledge Center
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blocks#pricing"
                      target="_self"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resourses */}
              {/* <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href=""
                      target="_self"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Custom Development
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      rel="noreferrer"
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Tailwind Components
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Technologies
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                     Node js
                    </a>
                  </li> <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Php
                    </a>
                  </li> <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                     Java
                    </a>
                  </li> <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                     Mongodb
                    </a>
                  </li> <li>
                    <a
                      href=" "
                      className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                    >
                      Sql
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-960" />
        <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-between">
          <p className="block antialiased font-sans text-inherit text-sm font-normal leading-normal text-blue-gray-600">
            {" "}
            Copyright © 2024 HIRING ZONE PRIVATE LIMITED   
            <a
              href=" "
              className="text-primary transition-colors hover:text-primary focus:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
