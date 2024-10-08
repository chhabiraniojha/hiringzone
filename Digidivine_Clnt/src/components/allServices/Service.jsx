import React from "react";
import banerImage2 from "../../assets/pageImages/v-3.png";
import banerImage3 from "../../assets/pageImages/v-8.png";
import banerImage4 from "../../assets/pageImages/v-9.png";
import banerImage5 from "../../assets/pageImages/v-10.png";

const services = [
  {
    title: "Hire For Bpo work ",
    description:
      "Dynamic BPO professionals to join your team, offering exceptional customer service and support that meets our clients",
    image: banerImage4, // Replace with actual image URL
  },
  {
    title: "Hire for Date Entry  ",
    description:
      "Detail-oriented data entry professionals to join our team. If you excel at maintaining accuracy and efficiency while managing large volumes of information, we want you!.",
    image: banerImage3, // Replace with actual image URL
  },
  {
    title: "Cloud Services",
    description:
      "We provide cloud computing solutions, enabling your business to scale efficiently and securely.",
    image: banerImage5, // Replace with actual image URL
  },
];

const ServiceCard = ({ title, description, image, reversed }) => (
  <div
    className={`flex flex-col md:flex-row ${
      reversed ? "md:flex-row-reverse" : ""
    } items-center p-6`}
  >
    <div className="md:w-1/2 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-lg  "
        data-aos="zoom-out"
        data-aos-duration="2000"
      />
    </div>
    <div className="md:w-1/2 p-4">
      <h2
        className="text-2xl font-bold mb-4"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {title}
      </h2>
      <p className="text-lg" data-aos="fade-left" data-aos-duration="2000">
        {description}
      </p>
    </div>
  </div>
);

const ServicePage = () => (
  <>
    <div
      className="h-[56vh] flex justify-center items-center flex-wrap shadow-lg rounded-lg "
      style={{
        background: `linear-gradient( rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(${banerImage2})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <p
        className="font-bold text-[3em] text-gray-100 font-serif"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        Our Services
      </p>
    </div>

    <div className="container mx-auto p-6">
      {/* <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1> */}
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  </>
);

export default ServicePage;
