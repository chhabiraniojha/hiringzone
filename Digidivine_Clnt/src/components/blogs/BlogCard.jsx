import React from "react";

const BlogCard = ({ image, title, content }) => {
  return (
    <div
      className="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 "
      data-aos="zoom-out"
      data-aos-duration="2000"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-6">
        <h2
          className="text-xl font-semibold mb-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {title}
        </h2>
        <p
          className="text-gray-600"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {content}
        </p>
        <p
          className="  text-blue-600"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          More
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
