import React from "react";
import Navbar from "./Navbar";
import { BsDot } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const App = () => {
  return (
    <div className="relative">
      <div className="relative">
        <Navbar />
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-100 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="#"
                className="inline-flex items-center rounded-full border text-sm duration-150 pr-3"
              >
                <BsDot className="text-4xl text-green-600" />
                <p className="flex items-center">Available for work</p>
              </a>
              <h1 className="text-6xl text-gray-100 font-extrabold">
                I'm Yahya Burhan Frontend Developer
              </h1>
              <p className="text-gray-300 text-2xl">
                Empowering Ideas Through End-to-End Development Expertise and
                Seamless User Interfaces
              </p>
              <div className="flex items-center gap-x-6 sm:text-sm">
                <a href="#">
                  <BsGithub className="text-2xl" />
                </a>

                <a href="#">
                  <BsLinkedin className="text-2xl" />
                </a>

                <a href="#">
                  <BsTwitterX className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
