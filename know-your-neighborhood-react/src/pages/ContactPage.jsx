import React from "react";
import { contact } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="font-inter font-bold text-5xl mb-8">
            Contact Us
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <form className="flex flex-col space-y-5 p-5 border shadow bg-gray-100 text-lg">
              <h2 className="font-medium text-xl ml-1">Ask a Question</h2>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-3 py-2 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Question"
                className="px-3 py-2 rounded"
              />
              <button type="submit" className="mt-3 rounded bg-color1 py-3">
                Submit
              </button>
            </form>
            <div className="flex flex-col space-y-5 p-5 border shadow bg-gray-100 text-lg text-color1">
              <div className="flex items-center space-x-2">
                <i className="fa-sharp fa-solid fa-location-dot text-4xl" />
                <p>Yangon, Myanmar</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-regular fa-envelope text-4xl" />
                <p>knowyourneighborhood@email.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-phone text-4xl" />
                <p>+95 1234567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default ContactPage;
