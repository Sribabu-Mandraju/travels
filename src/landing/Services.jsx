import React from 'react';

const Services = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className="text-center text-white p-5">
        <p className="text-[aqua] font-bold text-3xl text-center">Service</p>
        <p className="text-2xl font-medium">One-Stop-Shop For Travel Services</p>
        <p className="font-thin  text-zinc-400 pt-2">Simplify your travel planning with comprehensive solutions and convenience</p>
      </div>

      <div className="grid grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 text-white p-5 gap-2">

        {/* Image Section */}
        <div className="col-span-5 lg:col-span-2 ">
          <img
            src="https://img.freepik.com/free-psd/travel-sales-background_23-2150350125.jpg"
            alt="Travel Promotion"
            height="100%"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-5 lg:col-span-3">
          {/* Flight Booking */}
          <div className="flex items-center">
            <img
              src="https://icones.pro/wp-content/uploads/2021/08/symbole-d-avion-et-de-voyage-bleue.png"
              width="48px"
              height="48px"
              alt="Flight Booking Icon"
              className="bg-gray-900 rounded-full px-2 py-2"
            />
            <span className="pl-10">
              <p className="font-bold text-xl text-left">Flight Booking</p>
              <p className="font-thin text-left text-zinc-400">
                Travel made easy with our reliable flight booking service. Experience seamless travel and unbeatable prices, and create unforgettable memories with our expert travel advice.
              </p>
            </span>
          </div>

          {/* Travel Insurance */}
          <div className="flex items-center pt-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11065/11065959.png"
              width="48px"
              height="48px"
              alt="Travel Insurance Icon"
              className="bg-gray-900 rounded-full px-3 py-3"
            />
            <span className="p-10">
              <p className="font-bold text-xl text-left">Travel Insurance</p>
              <p className="font-thin text-left text-zinc-400">
                Travel with peace of mind with our comprehensive travel insurance. Protect yourself from unforeseen events and enjoy a worry-free travel experience. Get insured today.
              </p>
            </span>
          </div>

          {/* Tour Packages */}
          <div className="flex items-center pt-2">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/59-512.png"
              width="48px"
              height="48px"
              alt="Tour Packages Icon"
              className="bg-gray-900 rounded-full px-3 py-3"
            />
            <span className="p-10">
              <p className="font-bold text-xl text-left">Tour Packages</p>
              <p className="font-thin text-left text-zinc-400">
                Discover new horizons and create unforgettable memories with our exclusive tour packages. Explore unique destinations, savor local flavors, and create travel stories that will last a lifetime.
              </p>
            </span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
