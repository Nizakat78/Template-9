import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const Blognews = () => {
  const blogs = [
    {
      id: 1,
      image: "./last1.svg",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      link: "#",
    },
    {
      id: 2,
      image: "./last2.svg",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      link: "#",
    },
    {
      id: 3,
      image: "./last3.svg",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-black py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-lg md:text-xl italic text-yellow-500">Blog Post</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500 mt-2">
          La<span className="text-white">test News & Blog</span>
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-left"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 md:h-56 object-cover"
              />
              {/* Blog Content */}
              <div className="p-4 md:p-6">
                <p className="text-yellow-500 text-sm">{blog.date}</p>
                <h3 className="text-base md:text-lg text-white font-semibold mt-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="inline-block mt-3 md:mt-4 text-yellow-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex items-center justify-end px-4 md:px-6 py-3 md:py-4 border-t border-gray-700 gap-4 md:gap-9">
                <button className="text-gray-400 hover:text-yellow-500">
                  <FaRegThumbsUp /> {/* Like Icon */}
                </button>
                <button className="text-yellow-400 hover:text-white">
                  <FaRegMessage /> {/* Message Icon */}
                </button>
                <button className="text-gray-400 hover:text-yellow-500">
                  <FaShareAlt /> {/* Share Icon */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blognews;