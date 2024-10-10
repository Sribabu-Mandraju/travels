import React from 'react';
import '../css/do.css'
import travelImage from '../assets/hello.jpg'; // Assuming the image is in the same folder


const Do = () => {
  return (
    <div className="do">
        <div className="containe bg-black">
        <header>
            <h1>SPECIAL TRAVEL PACKAGES</h1>
            <h3 className="subtitle">
            Enjoy exclusive personalized service
            <br />
            and an unforgettable experience
            </h3>
            <p className="description">
            We understand that every journey has unique needs. Therefore, we offer
            <br />
            customized travel packages designed according to your preferences and budget.
            </p>
        </header>

        <div className="content-wrapper">
            <div className="packages">
            <div className="package-card">
                <div className="content">
                <h2>Romantic Travel Packages in Bali</h2>
                <p>Experience an unforgettable romance on the exotic island of Bali.</p>
                <ul>
                    <li>7 Days 6 Nights</li>
                    <li className="reviews">4.7 (47 reviews)</li>
                </ul>
                <a href="#" className="btn">Book Now</a>
                </div>
            </div>

            <div className="package-card">
                <h2>Nature Adventure Packages in Patagonia</h2>
                <p>Enjoy thrilling outdoor adventures in the natural beauty of Patagonia.</p>
                <ul>
                <li>10 Days 9 Nights</li>
                <li className="reviews">4.7 (47 reviews)</li>
                </ul>
                <a href="#" className="btn">Book Now</a>
            </div>

            <div className="package-card">
                <h2>Family Vacation Packages in Orlando</h2>
                <p>Give your family a fun-filled vacation in Orlando, Florida.</p>
                <ul>
                <li>5 Days 4 Nights</li>
                <li className="reviews">4.7 (47 reviews)</li>
                </ul>
                <a href="#" className="btn">Book Now</a>
            </div>
            </div>

            {/* Right side image */}
            <div className="side-image">
            <img src={travelImage} alt="Travel Image" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Do;
