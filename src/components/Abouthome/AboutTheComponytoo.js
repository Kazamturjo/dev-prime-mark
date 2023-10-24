import React from "react";
import { useNavigate } from "react-router-dom";

const AboutTheComponytoo = ({ items, key }) => {
  const navigate =useNavigate()
  return (
    <div key={key} className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={items.src}
              alt={items.alt}
              className="w-full	h-full "
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Primark LED Bulb  (Tunable White)</h2>
            <p> LED lights are highly efficient in converting electricity into light. They consume significantly less power compared to traditional incandescent bulbs, which can result in lower electricity bills.
            It also light up instantly without the need for warm-up time. This is particularly useful in situations where immediate, full brightness is required.....
            <button className="text-white bg-gray-500 rounded text-xl " onClick={()=>navigate('About')}>Read More</button>

            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheComponytoo;
