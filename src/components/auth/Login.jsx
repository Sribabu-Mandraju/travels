import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import img1 from '../../assets/loginimage.jpg'



const Login = () => {
  return (
    <div className="box-border inline-block sm:flex">
      {/* Left Side with Image */}
      <div className="w-full h-screen relative overflow-hidden sm:w-1/2">
        <img src={img1} className="w-full h-full" alt="Login" />
      </div>

      {/* Right Side with Form */}
      <div className="flex flex-col bg-gray-100 w-full gap-0 overflow-hidden h-screen sm:w-1/2">
        <div className="m-auto h-auto w-max">
          <div className="text-left my-2 mt-6 font-bold text-[25px]">Enter Your details</div>
          
          {/* Email Field */}
          <div className="mb-4 relative w-full">
            <span className="text-sm mb-4 text-gray-400">Email:</span>
            <div className="absolute left-0 py-2 pl-3 text-gray-400">
              <MdOutlineEmail className="mt-1" />
            </div>
            <div>
              <input
                type="email"
                placeholder="name@gmail.com"
                maxLength="30"
                className="bg-gray-200 text-sm w-full p-2 pl-8 border-2 border-blue-200 rounded-lg placeholder-gray-400 mr-2 active:border-blue-200"
              />
            </div>
          </div>
          
          {/* Password Field */}
          <div className="mb-4 relative w-full">
            <span className="text-sm mb-4 text-gray-400">Password:</span>
            <div className="absolute left-0 py-2 pl-3 text-gray-400">
              <FaLock className="mt-1"/>
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                maxLength="15"
                className="bg-gray-200 text-sm w-full p-2 pl-8 border-2 border-blue-200 rounded-lg placeholder-gray-400 mr-2 active:border-blue-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button className="text-white bg-blue-500 text-center font-bold w-full rounded-md text-sm p-2">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
