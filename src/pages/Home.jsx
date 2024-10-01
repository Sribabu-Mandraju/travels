import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const routes = [
        {link:""},
        {link:"footer"},
        {link:"login"},
        {link:"contact"},
        {link:"phone"},

    ]
  return (
    <>
        <div className="w-full flex items-center justify-around  mt-5 felx-wrap gap-3">
            {routes.map((item) => (
                <Link to={item.link} className="bg-black px-3 py-2 rounded-md text-white">{item.link? item.link:"Home"}</Link>
            ))}
        </div>
    </>
  )
}

export default Home
