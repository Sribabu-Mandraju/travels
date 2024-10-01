import React from 'react';

const Footer = () => {
  return (
    <div className="bg-blue-900 p-t-2 pl-4 pr-4 border-2 border-black w-screen">
      <div className="flex flex-wrap gap-4 justify-between w-10/12 mx-auto p-2 pt-5">
        <div className="flex text-white flex-col">
          <p className="text-2xl font-bold">Programs</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">Corporate</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">One to one</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">Consulting</p>
        </div>
        <div className="flex flex-col text-white">
          <p className="text-2xl font-bold">Service</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">Corporate</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">One to one</p>
        </div>
        <div className="flex flex-col text-white">
          <p className="text-2xl font-bold">Links</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">Home</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">About</p>
          <p className="text-zinc-500 hover:underline hover:text-white cursor-pointer duration-150">Contact</p>
        </div>
        <div className="text-white">
          <p className="text-2xl font-bold">News Letter</p>
          <p className="flex flfex-row">
            <input
              id="name"
              className="w-auto border rounded-tl-md rounded-bl-md ps-1 border-gray-200"
              type="text"
              required
              placeholder="EmailAddress"
            />
            <button type="text" className="bg-yellow-500 rounded-tr-md rounded-br-md text-white p-1">
              Subscribe
            </button>
          </p>
          <p className="flex flex-row p-3">
            <i className="p-2 rounded-md fab fa-whatsapp bg-green-500 text-white mr-2"></i>
            <i className="p-2 rounded-md fab fa-youtube bg-red-500 text-white mr-2"></i>
            <img
              alt="i"
              src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?1&w=740&t=st=1727776367~exp=1727776967~hmac=2fe5c85576df719be163114d18f3096cd893156c69fd7dc859a5ec97c3db2880"
              width="30px"
              height="30px"
              className="rounded-md mr-2"
            />
            <img
              alt="i"
              src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210"
              width="30px"
              height="30px"
              className="rounded-md mr-2"
            />
            <img
              alt="i"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
              height="30px"
              width="30px"
              className="rounded-md mr-2"
            />
            <img
              alt="i"
              src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
              height="30px"
              width="30px"
              className="rounded-md"
            />
          </p>
          <p>Mobile: +917892474250</p>
          <p>Email: n210615@rguktn.ac.in</p>
        </div>
      </div>
      <hr className="my-4 border-t-2 border-gray-800 w-[75%] mx-auto" />
      <p className="flex flex-wrap justify-around text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIu-NRXXb5-JdQFur49NOVU4zfw4_mtDA4w&s"
          height="120px"
          width="120px"
          className="rounded-md"
        />
        <span className="text-center md:mr-[50px]">2023 cross cultureconnect.com</span>
      </p>
    </div>
  );
};

export default Footer;
