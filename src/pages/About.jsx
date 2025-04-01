import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        About My Library Project
      </h2>

      <p className="text-gray-700 mb-4">
        Hi there! I'm Pooja, and this library catalog is my project. As someone
        who's always lost in books, I wanted to create something that captures
        my love for reading while practicing my web development skills.
      </p>

      <p className="text-gray-700 mb-4">
        I built this catalog to organize my favorite books and hopefully help
        fellow readers discover stories that have moved me. From dog-eared
        novels that kept me up all night to non-fiction that changed how I see
        the world, each entry here has a special place in my journey.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-2xl">📚</span>
        </div>
        <p className="text-gray-600 italic">
          "I'm building this one book at a time. Have suggestions or found a
          book you love? Drop me a line - I'd love to hear from you!"
        </p>
      </div>
    </div>
  );
};

export default About;
