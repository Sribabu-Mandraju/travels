import { useState } from 'react';
import '../../css/stars.css'

const Stars = () => {
  const [navActive, setNavActive] = useState(false);
  return (
      <section className="wrapper bg-black w-full h-screen absolute z-[0] top-0 left-0 pointer-events-none ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
  );
};

export default Stars;
