import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
const storeEmail = async () => {
  let inputValue = document.getElementById("email").value;
  try {
    await axios.post(
      "https://globe-backend-neuacje74-azharul122.vercel.app/submit-email",
      { address: inputValue }
    );

    Swal.fire({
      icon: "success",
      title: "Notify successed ! Cheack your Gmail",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    // Handle success or any user feedback here
  } catch (error) {
    console.error(error);
    // Handle errors here
  }
  //   console.log(inputValue);
  document.getElementById("email").value = "";
};
import { GrSecure } from "react-icons/gr";
const NewsLatter = () => {
  return (
    <div className="newslatter w-full bg-[#f4eff7]">
      <div className="w-[96%] md:w-[50%] mx-auto py-7">
        <div className="flex justify-center items-center gap-4 flex-col">
          <p className="font-bold text-2xl">Stay ahead of the curve</p>
          <p className="text-center">
            Get exclusive early access to the finest global job listings. Sign
            up below and be the first to know when we launch.
          </p>
          <div className="relative w-[92%] md:w-[400px]  bg-transparent">
            <input
              className=" py-3 rounded-[30px] px-4 w-full bg-white text-black shadow-2xl border border-gray-400"
              placeholder="Enter Your Email"
              type="email"
              id="email"
            />
            <button
              onClick={storeEmail}
              className="text-white bg-gradient-to-r from-blue-600 to-violet-700 absolute right-2 h-[80%] top-1/2 -translate-y-1/2 px-5 rounded-3xl"
            >
              Notify Me
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <GrSecure className="text-lg" />
            <p className="title font-bold">We value your privacy</p>
          </div>
          <p>
            Rest assured, your email is safe with us. No spam, just updates
            about our exclusive launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
