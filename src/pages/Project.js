import React from "react";
import Image from "./Img/Image.png.png";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <Layout>
      <div>
        <div className="container m-2 px-4 text-gray-600 ">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <Link to="https://www.google.com/"><img src={Image} className="w-50 p-3 m-2 border-spacing-4" /></Link>
            <div className="md:7/12 lg:w-6/12">
              <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Primark LED Bulb (Tunable White)
              </h1>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Press this Image
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
