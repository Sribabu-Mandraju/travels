import React from 'react'

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between h-[60px] shadow-md">
        <div className="flex items-center gap-2">
            <div className="font-bold text-white text-2xl mx-2">LOGO</div>
        </div>
        <div className="flex items-center  gap-3">
                <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold hover:text-aqua border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">Home</div>
                <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold hover:text-aqua border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">About</div>
                <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold hover:text-aqua border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">Blog</div>
                <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold hover:text-aqua border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">Contact</div>
            </div>
        <div className="flex items-center gap-2">
            
            <button className="mx-2 rounded-md bg-[aqua] text-black px-3 py-1 font-bold flex items-center">
                Login / Register
            </button>
        </div>
      </div>
    </>
  )
}

export default Header
