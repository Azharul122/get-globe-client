import { FcGlobe } from "react-icons/fc";
import { FaHandshake } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="hero w-full">
      <div className="w-[96%] md:w-[90%] mx-auto">
        <button className="py-2 px-5 bg-yellow-200 rounded-3xl my-5">
          <li>Coming Soon</li>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-3">
          <div className="">
            <p className="title font-bold text-xl md:text-2xl">
              Unlock Global Opportunity
            </p>
            <p className="py-2">
              Venturing beyond borders? Dive into a curated list of jobs that
              come with visa and relocation support. Explore, apply, and
              kickstart your global journey with confidence.
            </p>
            <div className="">
              <div className="bg-[#F4EFF7] p-3 mb-3">
                <div className="flex items-center gap-2">
                  <FcGlobe className="text-xl"/>
                  <p className=" font-bold md:text-xl ">
                    Global Jobs, Handpicked for You.
                  </p>
                </div>
                <p className="pt-2">
                  Every job listing we showcase is handpicked, offering visa and
                  relocation assistance. Making your international job hunt
                  seamless.
                </p>
              </div>
              <div className="bg-[#F4EFF7] p-3 mb-3">
                <div className="flex items-center gap-2">
                  <BsTools className="text-xl"/>
                  <p className="font-bold md:text-xl ">Navigate with Insight.</p>
                </div>
                <p className="pt-2">
                  Get comprehensive insights about each country, ensuring you're
                  well-prepared for your new journey.
                </p>
              </div>
              <div className="bg-[#F4EFF7] p-3 mb-3">
                <div className="flex items-center gap-2">
                  <FaHandshake className="text-yellow-400 text-xl" />
                  <p className="font-bold md:text-xl ">
                    More Than Just Job Listings.
                  </p>
                </div>
                <p className="pt-2">
                  Join our vibrant community to seek referrals, explore our pay
                  parity calculator, and understand your potential take-home
                  with our tax calculator.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img className="md:h-full md:w-full" src="Frame_48.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
