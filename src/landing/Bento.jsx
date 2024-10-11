import React from 'react';
import './responsive.css';
const Grid = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 p-[50px] hello">


            <div className="col-span-2 row-span-2 bg-[#F2D2BD] h-[410px] rounded-2xl">
              <div><img src="tour.png" className=" tour bottom-0 top-0 h-[450px] w-[500px] absolute"/></div>
            <div className="flex py-[250px] px-[100px] w-[900px] justify-between items-center relative mainbox">
                    <div className="text-black font-bold text-2xl h-24 w-2/3 rounded-lg bg-white flex items-center justify-between px-4">
                        <span className="maintext">Explore the world <br /> with us</span>
                        <button className="bg-orange-500 text-white text-[20px] rounded-lg h-12 w-36">
                            Plan a Trip 
                        </button>
                    </div>
                </div>
            </div>


            <div className="h-[200px] bg-[#ADD8E6] rounded-lg flex flex-col justify-between p-4 box">
                <div className="text-black font-bold text-2xl">Read Our <br /> blog</div>
                <div className="text-black text-sm font-bold">
                    We have shared our journey <br /> and some stories
                </div>
            </div>

            <div className="row-span-2 h-[410px] bg-[#F2D2BD] rounded-lg p-[20px] flex flex-col box">
                <div className="text-black font-bold text-2xl">Chat With <br /> Expert</div>
                <br />
                <div className="h-[150px] w-full bg-white rounded-lg flex items-center justify-center">
                    <img src="live.jpg" alt="Chat with Expert" className="h-[100px]" />
                </div>
                <br />
                <p className="text-black text-sm font-bold mt-4">
                    <span className="text-2xl">3000+</span> our Expert team <br /> members around the world <br /> who create incredible and <br /> amazing projects
                </p>
            </div>

            <div className="h-[200px] bg-[#90EE90] rounded-lg flex flex-col justify-between p-4 box">
                <div className="text-black font-bold text-2xl">See Our <br /> workflow</div>
                <div className="text-black text-sm font-bold">
                    It's a must that we would <br /> like to share our workflow to <br /> believe you
                </div>
            </div>
        </div>
    );
}

export default Grid;