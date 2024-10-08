import React from "react";
import BlogCard from "./BlogCard";
import banerImage2 from "../../assets/pageImages/v-4.png";
import banerImage3 from "../../assets/pageImages/v-5.png";
import banerImage4 from "../../assets/pageImages/v-7.png";
import banerImage5 from "../../assets/pageImages/v-2.png";

export default function Blogs() {
  const blogs = [
    {
      image: banerImage2,
      title: "Exploring Modern Web Technologies",
      content:
        "A brief overview of modern web technologies including React, Tailwind CSS, and more...",
    },
    {
      image: banerImage3,
      title: "Building Scalable Web Applications",
      content:
        "Learn how to build scalable and performant web applications using best practices...",
    },
    {
      image: banerImage4,
      title: "Building Scalable Web Applications",
      content:
        "Learn how to build scalable and performant web applications using best practices...",
    },
    {
      image: banerImage5,
      title: "Building Scalable Web Applications",
      content:
        "Learn how to build scalable and performant web applications using best practices...",
    },
    // Add more blog posts here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-3xl font-bold mb-8 text-center"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}
