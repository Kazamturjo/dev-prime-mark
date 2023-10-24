import React from "react";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div>
        <div className="container m-2 px-4 text-gray-600 ">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <img
              src="https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBidWxiJTIwbGVkfGVufDB8MHwwfHx8MA%3D%3D"
              className="w-50 p-3 m-2 border-spacing-4"
            />
            <div className="md:7/12 lg:w-6/12">
              <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Primark LED Bulb (Tunable White)
              </h1>
              <p>
                LED lights, or Light Emitting Diodes, are semiconductor devices
                that emit light when an electric current is applied. They are
                energy-efficient and have a long lifespan compared to
                traditional incandescent bulbs. LED lights come in various
                shapes, sizes, and colors, making them versatile for a wide
                range of applications.
                While LED bulbs may have a higher upfront cost compared to traditional bulbs, their energy efficiency and long lifespan can lead to cost savings over time.
                Remember that the technology around LED lighting is constantly evolving, so it's a good idea to keep up with the latest developments in the field. Additionally, when purchasing LED lights, consider factors like color temperature, brightness (in lumens), and compatibility with fixtures or dimmer switches, if applicable...
                <button onClick={()=>navigate(-1)} className="text-white bg-gray-500 rounded text-xl">Go back home</button>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
