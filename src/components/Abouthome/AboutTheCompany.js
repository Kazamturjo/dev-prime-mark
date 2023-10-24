import React from 'react'
import AboutTheComponytoo from './AboutTheComponytoo'
const ProductsImage= [
    {
        src:"https://media.istockphoto.com/id/1139581263/photo/selfie-ring-light-led-lamp.webp?b=1&s=170667a&w=0&k=20&c=lv8KJYyVbWgSAhim1Kmn5QQyf-AGq5hBci-xKZsx8KY=" ,
        alt:"Image 1 for products",
        title:"Primark LED Bulb  (Tunable White)",
        desc:"A seamless introduction to smart lighting experience."
    },
    // {
    //     src:"https://media.istockphoto.com/id/1294142675/photo/street-light-in-salvador.webp?b=1&s=170667a&w=0&k=20&c=KiRV3aQbr3P58KU4KBbNc2uiBHmQoWtO_9n0gmqqqwM=" ,
    //     alt:"Image 2 for products",
    //     title:"Primark LED Bulb  (Tunable White)",

    // },
    // {
    //     src:"https://media.istockphoto.com/id/1485202796/photo/light-emitting-diode-incandescent-bulb-and-compact-fluorescent-lamp-light-bulbs-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=DfB4SgYNtIeGP0OrI3Y82w1u-DOZOrlZzinQnR8uZic=" ,
    //     alt:"Image 3 for products",
    //     title:"Primark LED Bulb  (Tunable White)",

    // }
  ]


const Products = () => {
   
  return (
    <div className='flex p-5 		'>
       {ProductsImage.map((item, index) => (
        <AboutTheComponytoo key={index} items={item}/>
       ))}
    </div>
  )
}

export default Products