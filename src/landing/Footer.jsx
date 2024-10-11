import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


const Footer = () => {
  return (
    <div className="bg-[black]">
      <div className="grid grid-cols-1 sm:grid-cols-2 ps-3 lg:grid-cols-5" style={{ backgroundColor: "black" }}>
          
        <div className="p-5 text-white  ">
          <p className="font-bold pb-2 text-left text-[aqua]">Platform</p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Analytics</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Planning</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Collaboration</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Data Management</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Integrations</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Security</span>
            </div>
          </p>
        </div>

        <div className="p-5 text-white  ">
          <p className="font-bold pb-2 text-left text-[aqua]">Resources</p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Customers</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Strategic Finance</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Ebooks & Guides</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Webinars & Events</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Podcast & Video</span>
            </div>
          </p>
        </div>

        <div className="p-5 text-white ">
          <p className="font-bold pb-2 text-left text-[aqua]">Solutions</p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Financial</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Investors & CEOs</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Revenue Operations</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Sales & Marketing</span>
            </div>
          </p>
          <p className="text-zinc-500 hover:text-[white] cursor-pointer">
            <div className="flex items-center gap-1">
              <FaAngleRight />
              <span> Human Resources</span>
            </div>
          </p>
        </div>

        <div className="p-5  lg:col-span-2 text-white">
            <p className="text-2xl font-bold text-left text-[aqua]">Get the Latest Information From Us</p>
            <div className="relative  flex items-center  pt-2">
              <input
                type="text"
                placeholder="Your Email Here"
                className="w-[320px]  border-2 border-gray-500 rounded-full pl-2 pr-10 py-1 bg-black text-white outline-[aqua]"
              />
              <div className="  ml-[-53px] mt-[-15px] rounded-full w-[50px] h-[27px] bg-[aqua] flex justify-center items-center" >
                <FiSend className="text-black p-0" />
              </div>
            </div>
            <div className="pt-3">
              <button type="button" className="rounded-full bg-gray-900 ms-1 px-[10px] p-1 hover:bg-[aqua] hover:text-[black]">
                Instagram
              </button>
              <button type="button" className="rounded-full bg-gray-900 ms-1 px-[10px] p-1 hover:bg-[aqua] hover:text-[black]">
                Facebook
              </button>
              <button type="button" className="rounded-full bg-gray-900 ms-1 px-[10px] p-1 hover:bg-[aqua] hover:text-[black]">
                LinkedIn
              </button>
            </div>
        </div>

      </div>
      <div className="w-full bg-gray-900 text-white flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasXzOecc6aB96jPnGTVq6znHmZ9JzN-RSFg&s"
            height="15px"
            width="15px"
            alt="logo"
            style={{ backgroundColor: "black" }}
          />
          <p className="text-center">2022 Copyright-FinPay</p>
        </div>
    </div>
  );
};

export default Footer;
