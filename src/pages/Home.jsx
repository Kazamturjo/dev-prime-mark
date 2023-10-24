import React from "react";
import Layout from '../layout/Layout'
import Slider from '../components/slider/Slider'
import AboutTheCompony from '../components/Abouthome/AboutTheCompany'
import Categories from "../components/Categories/Categories";
import Products from "./Products/Products";
import Newsletter from "../components/NewsLetter/Newsletter";
import Product from "../components/Products/Product";

const sliderData = [
  {
      "src":"https://images.unsplash.com/photo-1448745799564-e2c1ed534c94?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBidWxifGVufDB8MHwwfHx8MA%3D%3D" ,
      "alt":"Image 1 for slider",
      "title":"Primark LED Bulb  (Tunable White)",
      "desc":"A seamless introduction to smart lighting experience."
  },
  {
      "src":"https://images.unsplash.com/photo-1635270599750-3079ed25cac4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlnaHQlMjBidWxifGVufDB8MHwwfHx8MA%3D%3D" ,
      "alt":"Image 2 for slider"
  },
  {
      "src":"https://images.unsplash.com/photo-1535868463750-c78d9543614f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlnaHQlMjBidWxifGVufDB8MHwwfHx8MA%3D%3D0" ,
      "alt":"Image 3 for slider"
  }
]



const Home = () => {
  return (
   <Layout>
    <Slider  data={sliderData}/>
    <AboutTheCompony/>
    <Categories/>
    {/* <Products/> */}
    <Newsletter/>
   </Layout>
  )
};

export default Home;
