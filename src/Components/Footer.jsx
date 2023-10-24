import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="hero w-full py-10">
      <div className="w-[96%] md:w-[90%] mx-auto">
        <div className="flex justify-center items-center flex-col gap-3">
          <hr className="w-[150px] border-t-2 border-black text-lg" />
          <div className="text-center ">
            <p className="font-bold md:text-xl">Join our journey</p>
            <p>
              Stay in the loop with updates, sneak peeks, and more. Follow our
              progress.
            </p>
          </div>
          <div className="flex items-center gap-7">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
