import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pt-10 bg-color">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <a href="">
            <p className="text-gray-300">© yahyacodes</p>
          </a>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
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
      </div>
    </footer>
  );
};

export default Footer;
