import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import img1 from '../../assets/loginimage.jpg'


const Phone = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="box-border inline-block sm:flex">
      {/* Left Side with Image */}
      <div className="w-full h-screen relative overflow-hidden sm:w-1/2">
        <img src={img1} className="w-full h-full" alt="Login" />
        {/* Optionally Add the text below the image */}
        {/* <div className="w-full absolute text-white text-center bottom-6 p-auto">
            <div className="font-bold">It's just OTP verification</div>
            You are one step away from recovering your password.
          </div> */}
      </div>

      {/* Right Side with Form */}
      <div className="flex flex-col bg-gray-100 w-full gap-0 overflow-hidden h-screen sm:w-1/2">
        <div className="m-auto h-auto w-max relative">
          <div className="text-sm text-blue-500 w-fit absolute right-4 top-0 bottom-[40px] font-semibold">
            Register now and get 10 Searches free
          </div>

          <div className="text-left my-2 mt-6 font-bold text-[25px]">Enter Phone</div>
          <div className="mb-4 text-gray-400 text-sm">Enter phone number to get started</div>

          <div>
            <form onSubmit={handleSubmit} id="formsub">
              <div className="mb-4 relative w-full">
                <div className="absolute left-0 py-2 pl-3 text-gray-400">
                  <FaPhoneAlt className="mt-1" />
                </div>
                <div>
                  <input
                    type="number"
                    required
                    placeholder="Phone number"
                    minLength="10"
                    className="bg-gray-200 text-sm w-full p-2 pl-8 border-2 border-blue-200 rounded-lg placeholder-gray-400 text-gray-500"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="text-white bg-blue-500 text-center font-bold w-full rounded-md text-sm p-2">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          <div className="mt-3 text-gray-400 text-sm">
            Don't have an account?
            <a href="#" target="_self" className="text-blue-500 font-semibold">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
