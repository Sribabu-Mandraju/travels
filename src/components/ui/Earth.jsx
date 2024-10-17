import React from "react";
import '../../css/earth.css'
// import img from '../../assets/hero2.jpeg'

function Earth() {
    return (
        <section className="bg-black w-full h-[100vh] absolute top-0 left-0 pointer-events-none z-[0] flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
            <div className="earth  w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-cover bg-center rounded-full shadow-lg
                absolute bg-repeat-x">      
            </div>
        </section>
    );
}

export default Earth;