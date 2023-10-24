import React from 'react'
import CatagoriesItem from "./CategoriesItem"

const categories= [
    {
        id:1,
        img:"https://images.pexels.com/photos/542619/pexels-photo-542619.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"blub"
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/2112645/pexels-photo-2112645.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"blub"
    },
    {
        id:3,
        img:"https://images.pexels.com/photos/2224401/pexels-photo-2224401.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"blub"
    }
]


const Categories = () => {
  return (
    <div className='flex p-20  gap-3 '>
        {categories.map ((item)=>(
           <CatagoriesItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories