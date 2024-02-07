import React from "react";
import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="font-inter font-bold text-5xl text-primary mb-8">
            About Us
          </h2>
          <div className="text-gray-700 max-w-2xl mx-auto">
            <h3 className="text-3xl underline font-bold text-purple-600 mb-4">
              Discover Our Community
            </h3>
            <p className="mb-6">
              Welcome to "Neighbour Hood"! We're a community-driven platform
              dedicated to helping you connect with and appreciate your
              neighborhood. Explore the unique charm of local businesses, stay
              updated on exciting events, and find essential resources and news
              that matter to you. We're your go-to guide for everything local.
            </p>
            <p>
              Beyond information, we're a space for community interaction. Dive
              into our message boards, share your stories, and connect with
              neighbors. "Neighbour Hood" is a place to foster connections and
              celebrate the richness of your community, whether you're a new
              resident or a lifelong local. Thank you for choosing us as your
              destination for all things local!
            </p>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default AboutPage;
