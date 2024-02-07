import React from "react";
import  Image  from "../../assets/images/nhw.jpg";
import SearchForm from "../../components/form/SearchForm";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 mt-10 h-max">
      <div className="flex flex-col justify-center mr-0 md:mr-8">
      <h2 className="font-extrabold text-3xl md:text-4xl font-inter text-purple-600">
  Explore the Wonders of
</h2>
<h2 className="font-extrabold text-3xl md:text-4xl font-inter text-blue-500">
  Your Vibrant Community
</h2>
<p className="max-w-[550px] text-gray-700 font-medium mt-1">
  Dive into the heartbeat of your neighborhood! Uncover hidden gems, discover
  local businesses, and access valuable resources. From quirky cafes to
  community events, we've got you covered in every corner.
</p>

        <div className="flex my-5 max-w-[550px]">
          <a
            href="#about"
            className="px-2 py-3 bg-color1 rounded mr-3 w-full max-w-[150px] text-center focus:ring-1 
            focus:ring-offset-gray-200"
          >
            Get Started <i className="fa-solid fa-arrow-right" />
          </a>
          <SearchForm />
        </div>
      </div>
      <img
        src={Image}
        alt=""
        className="rounded-3xl lg:rounded-[150px] lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-lg 
        cursor-pointer brightness-95 hover:brightness-90 transition duration-150"
      />
    </section>
  );
};

export default Hero;
