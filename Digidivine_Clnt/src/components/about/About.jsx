import React from "react";

const teamMembers = [
  {
    name: "Amlan Samantaroy",
    role: "Business Analyst ",
    image: "https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    description:
      "John has over 10 years of experience in the IT industry and is passionate about developing innovative solutions.",
  },
  {
    name: "Pramod Kumar Khuntia",
    role: "Business Analyst ",
    image: "https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    description:
      "Jane is a technology enthusiast with expertise in cloud computing and AI-driven applications.",
  },
  // {
  //   name: "Suvransu Sekhar Ojha",
  //   role: "Lead Developer",
  //   image: "https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain", // Replace with actual image URLs
  //   description:
  //     "Emily leads our development team with a focus eam with a focus eam with a focus eam with a focus on front-e "
  //   } , 
    {
    name: "Kaibalya Vilash ",
    role: "Digital Marketer ",
    image: " https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    description:
      "Emily leads our development team with a focus eam with a focus eam with a focus eam with a focus on front-e "
    }
];

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6" data-aos="zoom-out" data-aos-duration="2000">About Us</h1>
        <p className="text-lg text-gray-600 mb-12" data-aos="zoom-out" data-aos-duration="2000">
        Digi Divine Online Services is a dynamic digital agency dedicated to helping businesses succeed in the digital landscape. Our team of skilled professionals brings together expertise in web development, mobile app development, software solutions, and digital marketing to provide comprehensive services that drive results. With a client-centric approach, we focus on understanding your unique needs and delivering customized solutions that empower your business to thrive.
        </p>  
        <p className="text-lg text-gray-600 mb-12 text-justify" data-aos="zoom-out" data-aos-duration="2000">
        to offer high-quality digital services that make a difference. Over the years, we have expanded our offerings, continually adapting to the evolving digital world. Today, Digi Divine stands as a trusted partner for businesses across various industries, known for our innovation, reliability, and commitment to excellence.
        </p>


        <div
          className="h-full gap-2   flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 flex-wrap
        "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="about-scrool bg-white rounded-lg shadow-md p-6 lg:w-[20%] h-[25em]  w-[40%]overflow-y-scroll scrollbar-hide "
              data-aos="zoom-in-up" data-aos-duration="2000"
            >
              <style jsx>{`
                .about-scrool::-webkit-scrollbar {
                  display: none; /* Chrome, Safari and Opera */
                }
              `}</style>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-sm text-teal-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
