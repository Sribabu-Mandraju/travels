import React from 'react';
import per from '../assets/tour.png';
import Button from '../components/share/Button';

const Bento = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 p-[20px] lg:p-[50px] bg-black">

            {/* Main Box with Image */}
            <div className="col-span-1 lg:col-span-2  row-span-2 bg-[#1A1A1A] h-[350px] sm:h-[410px] rounded-2xl relative flex flex-col justify-end p-6">
                
                <img src={per} className="absolute bottom-0 left-[30%]  w-[400px] h-[450px]  opacity-80" />
                
                <div className="w-[97%] mx-auto rounded-md bg-opacity-30 flex-wrap backdrop-blur-lg bg-grey-800  border-[3px] border-[aqua]  border-opacity-10 h-[200px] flex items-center justify-center gap-4">
                    <div className="text-[white] font-bold text-xl  md:text-4xl px-2">Explore the world <br /> <span className="mt-3">with Us</span></div>
                    <Button text="Book Now" className="font-bold px-3" />
                </div>
                
            </div>

            {/* Blog Section */}
            <div className="bg-[#2A2A2A] h-[200px] rounded-lg flex flex-col justify-between p-4">
                <div className="text-aqua-400 font-bold text-lg sm:text-2xl">Read Our <br /> Blog</div>
                <div className="text-gray-300 text-xs sm:text-sm">
                    We have shared our journey <br /> and some stories
                </div>
            </div>

            {/* Chat with Expert Section */}
            <div className="row-span-2 h-[350px] sm:h-[410px] bg-[#1A1A1A] rounded-lg p-4 flex flex-col">
                <div className="text-aqua-400 font-bold text-lg sm:text-2xl">Chat With <br /> Expert</div>
                <div className="h-[150px] w-full bg-[#111111] rounded-lg flex items-center justify-center mt-4">
                    <img src={per} alt="Chat with Expert" className="h-[100px]" />
                </div>
                <p className="text-gray-300 text-sm font-bold mt-4">
                    <span className="text-xl sm:text-2xl text-aqua-400">3000+</span> Expert team members <br /> who create amazing projects
                </p>
            </div>

            {/* Workflow Section */}
            <div className="bg-[#2A2A2A] h-[200px] rounded-lg flex flex-col justify-between p-4">
                <div className="text-aqua-400 font-bold text-lg sm:text-2xl">See Our <br /> Workflow</div>
                <div className="text-gray-300 text-xs sm:text-sm">
                    We would love to share <br /> our workflow with you.
                </div>
            </div>
        </div>
    );
}

export default Bento;
