import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import banerImage from "../../assets/pageImages/9.png";
import banerImage2 from "../../assets/pageImages/v-6.png";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Popup from "../popup/Popup";

export default function ContactUs() {
  let [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_mobile: "",
    message: "",
  });
  let [alertStatus, SetAlertStatus] = useState(false);
  let [alertMessage, SetAlertMessage] = useState("");
  let [messageType, SetMessageType] = useState("");

  const handleInput = (e) => {
    let setname = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [setname]: value });
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    // console.log(user.user_name);
    // console.log(user.user_email);
    // console.log(user.user_mobile);
    // console.log(user.message);
    if (
      !user.user_name ||
      !user.user_email ||
      !user.user_mobile ||
      !user.message
    ) {
      SetMessageType("error");
      SetAlertStatus(true);
      SetAlertMessage("All fields are reqired...");
    }

    let data = await axios.post("http://localhost:3000/api/contactus", {
      userName: user.user_name,
      userEmail: user.user_email,
      mob: user.user_mobile,
      userMessage: user.message,
    });
    if (data.data) {
      if (data.data.status == 200) {
        SetAlertStatus(true);
        SetAlertMessage(data.data.message);
      }
      // else if(data.data.status==201){

      //   SetMessageType("error")
      //   SetAlertStatus(true)
      //   SetAlertMessage(data.data.message)

      // }
      else {
        // Handle unexpected status codes
        SetAlertStatus(true);
        SetAlertMessage("Unexpected response from server");
        SetMessageType("error");
      }
    }
    // console.log(data);
    setUser({ user_name: "", user_email: "", user_mobile: "", message: "" });
  };
  // console.log(messageType);

  return (
    <>
      <Popup
        alertStatus={alertStatus}
        SetAlertStatus={SetAlertStatus}
        alertMessage={alertMessage}
        alertMessageTtype={messageType}
      />
      <div className=" w-full  bg-gray-100  ">
        {/* ----------------Top section --------------- */}
        <div
          className="h-[56vh] flex justify-center items-center flex-wrap "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
            url(${banerImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
          <p
            className="font-bold text-[3em] text-gray-100 font-serif"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Contact Us
          </p>
        </div>

        {/* ----------------Middle content --------------- */}
        <div className="h-full w-full    p-[2em] mt-[6em]">
          <div className="    flex gap-2 flex-col lg:flex-row  ">
            <div
              className="lg:w-[50%]  lg:h-[90vh] h-[40vh]"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src={banerImage2} alt="" className="h-full    w-full" />
            </div>

            <div className=" flex    flex-col  lg:w-[50%]  bg-blue-gray-3000 flex-wrap ">
              <div className="     flex justify-center flex-col mx-auto w-[70%] ">
                <p
                  className="font-semibold text-blue-900  "
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  Contact with us
                </p>
                <p
                  className="text-[2.6em] font-semibold"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  Get in touch with us
                </p>
              </div>
              {/* ---------------------- Small card contact start ------------ */}
              <div
                className="flex gap-3  justify-center items-center   mt-[2em] w-[70%] mx-auto"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="h-[4em] w-[4em]   bg-blue-gray-50 rounded-md flex justify-center items-center icon-card">
                  <PhoneIcon className="h-[2em] w-[2em]   " />
                </div>

                <div className="  w-[80%]">
                  <p className="text-gray-600 text-[0.9em]  ">
                    Have any question?
                  </p>
                  <p className="font-semibold text-pretty hover:text-blue-800  ">
                    +91 7008698408
                  </p>
                </div>
              </div>

              <div
                className="flex gap-3  justify-center items-center   mt-[2em] w-[70%] mx-auto"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="h-[4em] w-[4em]   bg-blue-gray-50 rounded-md flex justify-center items-center icon-card">
                  <EnvelopeIcon className="h-[2em] w-[2em]   " />
                </div>
                <div className="  w-[80%]">
                  <p className="text-gray-600 text-[0.9em]  ">Write email</p>
                  <p className="font-semibold text-pretty hover:text-blue-800  ">
                    {" "}
                    suvransusekharojha@digidivine.online
                  </p>
                </div>
              </div>

              <div
                className="flex gap-3  justify-center items-center   mt-[2em] w-[70%] mx-auto"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="h-[4em] w-[4em]   bg-blue-gray-50 rounded-md flex justify-center items-center icon-card">
                  <MapPinIcon className="h-[2em] w-[2em]  " />
                </div>
                <div className="  w-[80%]">
                  <p className="text-gray-600 text-[0.9em]  ">
                    Bhubaneswar,india
                  </p>
                  <p className="font-semibold text-pretty  hover:text-blue-800  ">
                    {" "}
                    GARAPUR, PO- KAPALESWAR, PS- KENDRAPARA SADAR , KENDRAPARA,
                    Orissa, India - 754211
                  </p>
                </div>
              </div>

              <div
                className="flex gap-3  justify-center items-center   mt-[2em] w-[70%] mx-auto"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div
                  className="h-[4em] w-[4em]   bg-blue-gray-50 rounded-md flex justify-center items-center
                 icon-card"
                >
                  <MapPinIcon className="h-[2em] w-[2em]  " />
                </div>
                <div className="  w-[80%]">
                  <p className="text-gray-600 text-[0.9em]  ">
                    Bhubneswar,India
                  </p>
                  <p className="font-semibold text-pretty hover:text-blue-800 ">
                    Sushanti Vihar, Bhubaneswar, Odisha 759013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------Form section --------------- */}
        <div className="h-full   flex justify-center flex-col mt-[1em] pt-[1em]">
          {/* ----------------Heading section --------------- */}
          <div className=" w-[90%] lg:w-[50%] mx-auto  ">
            <p
              className="lg:text-[2.6em] text-[1.7em] font-semibold text-center"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              Friendly folks standing by!
            </p>
          </div>
          {/* ------------------ form ------------------ */}
          <div
            className="   w-[60%] mx-auto my-2"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <form
              className="  mx-auto p-4   rounded-lg w-full"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Name-"
                className="input-box"
                name="user_name"
                value={user.user_name}
                onChange={handleInput}
              />
              <input
                type="email"
                placeholder="Email-"
                className="input-box"
                name="user_email"
                value={user.user_email}
                onChange={handleInput}
              />
              <input
                type="tel"
                placeholder="Mobile-"
                className="input-box"
                name="user_mobile"
                value={user.user_mobile}
                onChange={handleInput}
              />
              <textarea
                placeholder="Message-"
                className="input-box"
                name="message"
                value={user.message}
                onChange={handleInput}
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
