import React from "react";
import devLogo from '../../assets/images/devLogo.svg'
import { Img, Text, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} bg-black-900 self-stretch`}>
    <div className='w-[100%] py-[4%] h-auto justify-around flex-wrap   flex'>

<div className='grid sm:grid-cols-3 p-2  gap-2  '>
    <div className="logo ">
        <img src={devLogo} alt="" />
    </div>
    <div className='text-white 
     grid ml-[14px] '>
        <div className='flex-row   inline-block '>
            <div>Phone:</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>(+91) 7303298030 </div>
        </div>

        <div className='flex-row flex-wrap   inline-block  '>
            <div>Email:</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>ssdeveloper@gmail.com</div>
        </div>
        <div className='flex-row   inline-block '>
            <div>Location:</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Delhi,India - 110001</div>
        </div>
    </div>
</div>

{/* Information */}
<div className='grid '>

    <div className='text-white sm:space-y-2
    grid ml-[14px]'>
        
            <div className='text-gray-500 hover:text-white cursor-pointer'>Community Overview</div>
    
            <div className='text-gray-500 hover:text-white cursor-pointer'>Services</div>
        
            <div className='text-gray-500 hover:text-white cursor-pointer'>Developer Tools</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Contact Tech Team</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Careers</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Helping Partner</div>
        
    </div>
</div>

{/* Quick Links*/}
<div className='grid '>
  
    <div className='text-white 
    grid ml-[14px] sm:hidden'>
        
            <div className='text-gray-500  hover:text-white cursor-pointer'>About Community</div>
    
            <div className='text-gray-500 hover:text-white cursor-pointer'>Team</div>
        
            <div className='text-gray-500 hover:text-white cursor-pointer'>Features</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Documentation</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Resource</div>
            <div className='text-gray-500 hover:text-white cursor-pointer'>Dsa</div>
        
    </div>
</div>

{/* News Letter */}
 
<div className='grid  '>
  

    <div className=' bg-gray-800 w-[205px]  sm:w-[50vw] sm:mb-2 p-4 rounded-lg text-white-A700 self-center'>
        <input  type="email" placeholder="Enter your email" />
    </div>
    <div>
    <button className='text-white-A700 bg-pink-700 font-bold font-serif text-white p-4  px-14  hover:bg-pink-600 rounded-lg'>SUBSCRIBE</button>
    </div>
    </div>

</div>
<hr/>
<div className='text-gray-500 p-3 text-center'>

    <h1>© 2024 All rights reserved | Design & Develop by Shubham</h1>
</div>
    </footer>
  );
}
