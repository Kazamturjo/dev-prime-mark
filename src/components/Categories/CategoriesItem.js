

import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesItem = ({ item }) => {
  const usednavi=useNavigate()
  return (
    
    <div className="flex-1 m-1 h-80">
    <img src={item.img}  
    className="w-full h-full object-cover rounded"/>
    <div className="">
      <p className="text-black ">{item.title}</p>
      <button onClick={()=>usednavi('products')} className="rounded-2 p-1 m-1 bg-gray-500 text-white cursor-pointer font-semibold	">Shop now</button>
    </div>
    </div>
)
}

export default CategoriesItem;
