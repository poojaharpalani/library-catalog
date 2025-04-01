import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h2>

      <p className="text-gray-700 mb-4">
        Hi there! I'm Pooja, the book lover and developer behind this library
        catalog project. I'd love to hear what you think about my collection or
        the website itself!
      </p>

      <p className="text-gray-700 mb-6">
        Found a bug? Have a book recommendation? Or maybe just want to chat
        about your favorite author? Drop me an email - I personally read every
        message and love connecting with fellow readers.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between mb-6">
        <span className="font-medium text-gray-800">
          harpalanipooja19@gmail.com
        </span>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          onClick={() => {
            navigator.clipboard.writeText("harpalanipooja19@gmail.com");
            alert("Email copied to clipboard!");
          }}
        >
          Copy Email
        </button>
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          When I'll get back to you
        </h3>
        <p className="text-gray-600">
          Since this is my side project alongside classes and other commitments,
          I usually check messages on evenings and weekends. I promise to reply
          within a few days - unless I'm deep into a book I can't put down!
        </p>
      </div>
    </div>
  );
};

export default Contact;
