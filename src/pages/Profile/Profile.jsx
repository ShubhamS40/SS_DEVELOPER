import React, { useEffect } from 'react'
import Header from 'components/Header'
import sunil from '../../assets/images/sunil.png'
import shubham from '../../assets/images/SHUBHAM.png'
import rahul from '../../assets/images/rahul.png'
import Footer from 'components/Footer'
import profileImage from '../../assets/images/Professional LinkedIn Profile Picture.png'
import uiux from '../../assets/images/uiux.jpg'
import product from '../../assets/images/product.jpg'
import web from '../../assets/images/web.jpg'
import { Button } from 'components'
import { TfiWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import Header from 'components/Header/index';
// import Footer from 'components/Footer/index';
// import shubham from 'assets/images/SHUBHAM.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";



function Profile() {
 
  return (
    <>

      <div>
        <div className='border-2 sm:border-0 border-gray-500 rounded-3xl flex flex-wrap m-8 h-auto  sm:h-[100vh] '>
          <div className='w-[100%] bg-white items-center h-[80vh] flex flex-wrap justify-around'>
            {/* Content Items */}
            <div className='flex-row w-[400px]  p-5 sm:p-1  text-xl font-bold font-sans space-y-5'>

              <div className='text-3xl'>
                -- Hello
              </div>
              <div className='text-2xl'>
                <h1>I'm Shubham Singh</h1>
              </div>
              <div>
                <p>Fullstack Developer & Instructor</p>
              </div>
              <div className='space-y-5'>
                <span className='font-normal font-serif '>
                  Hi there! My name is Shubham Singh and I’m a software engineer with over 1 year of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.
                </span>
                <div className="flex gap-6 sm:gap-2">
                  <button style={{backgroundColor:'#E91E63'}}  className="fill size-lg   !rounded-[5px] min-w-[201px] sm:min-w-[15vw]  px-[35px] h-[67px]  items-center justify-center  text-center text-base font-bold !text-white-A700  ">
                    Discord
                  </button>
                  <button className="bordered size-lg black_900 button ui !rounded-[5px] min-w-[201px] sm:min-w-[30vw] !border-[3px] h-[67px] flex flex-row items-center justify-center !border-solid !border-pink-700 px-8 text-center text-base font-bold !text-black-900 sm:px-5">
                    Join</button>
                </div>
              </div>
              <div>
                {/* <Button/> */}
              </div>
            </div>

            {/* Profile Image */}



            <div className='w-[45vw] sm:w-[500vw]  '>
              <img src="https://img.freepik.com/premium-vector/programmers-develop-applications_118813-1954.jpg?w=740" alt="" />
            </div>

          </div>

        </div>

        {/* Profile Section */}
        <div style={{backgroundColor:'#E91E63'}}  className="text-white flex justify-between items-center p-10">
      <h1 className="text-3xl sm:text-xl text-white-A700 font-bold">I'm a professional</h1>
      <button className="bg-white-A700 text-pink-500 font-bold sm:py-3 sm:px-5  py-4 px-10 rounded shadow">
        Hire Me
      </button>
    </div>

   {/* PROFILE */}
 


         <div className='sm:border-0 sm:mx-0 m-8
         '>
         <h1 className="text-3xl mx-7 font-bold">
            Shubham SIngh <span className="text-gray-500">/ Web Developer</span>
          </h1>
         
         <div className="grid  grid-cols-3 justify-around  m-2 mx-auto p-5">
      
      {/* Profile Info Section */}
      <div className="col-span-1 w-[100%] px-3 md:col-span-2">
      
        <p className="my-4">
        "Hello, I'm Shubham Singh, a passionate Web Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I aim to deliver seamless digital experiences."
        </p>
        <p className="mb-4">
        "I possess expertise in HTML, CSS, JavaScript, and frameworks like React and Angular for front-end development. On the back-end, I am proficient with Node.js, Express, and database management using MongoDB and SQL. My skill set enables me to take on a full-stack approach, ensuring a cohesive development process from start to finish."
        </p>
        <div className="my-4">
          <p className="flex items-center"><span className="text-pink-500 mr-2">📍</span>India,Delhi-10001</p>
          <p className="flex items-center"><span className="text-pink-500 mr-2">📞</span> +91 7303298030</p>
          <p className="flex items-center"><span className="text-pink-500 mr-2">✉️</span> shubham.0202.0in@gmail.com</p>
        </div>
        <button style={{backgroundColor:'#E91E63'}} className="bg-pink-500 text-white-A700 font-bold py-3 px-5 rounded mt-4">Download My CV</button>
      </div>
      
    

      {/* Image Section */}
      <div className="col-span-1   sm:h-50 sm:w-55">
        <img  src={shubham} alt="Profile" className="rounded-3xl mx-5 shadow-lg w-[80%]" />
      </div>
    
    {/* Skills and Social Media Section */}
    <div className=" grid grid-cols-1 md:grid-cols-0 sm:mt-10 sm:w-[300%] gap-10 sm:gap-50 ">
      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold">My Skills</h2>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Web Design</span><span>90%</span>
          </p>
          <div className="w-full bg-gray-200 h-2">
            <div className="bg-pink-500 h-2" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Design</span><span>75%</span>
          </p>
          <div className="w-full bg-gray-200 h-2">
            <div className="bg-pink-500 h-2" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Photoshop</span><span>70%</span>
          </p>
          <div className="w-full bg-gray-200 h-2">
            <div className="bg-pink-500 h-2" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Coding</span><span>65%</span>
          </p>
          <div className="w-full bg-gray-200 h-2">
            <div className="bg-pink-500 h-2" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div>
        <h2 className="text-2xl font-bold">Follow Me</h2>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="text-blue-500"><FaGithub className='h-8 w-8' /></a>
          <a href="#" className="text-blue-400"><FaLinkedin className='h-8 w-8' /></a>
          <a href="#" className="text-blue-700"><FaXTwitter className='h-8 w-8' /> </a>
          <a href="#" className="text-pink-500"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
    </div>
  </div>
         </div>



   



        
 



          <section className="text-center py-10">
            <h2 className="text-2xl text-blue-500">My services</h2>
            <h1 className="text-5xl sm:text-3xl font-extrabold mt-2">What I do <br /> for My Customers</h1>
            <div className="flex sm:gap-5 sm:flex-wrap justify-center p-[36px] h-auto w-auto sm:m-0  m-[90px] space-x-10">
              <h1 className='hidden'>ok</h1>
              <div className="border bg-white space-y-5 text-left cursor-pointer hover:text-white-A700 text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform hover:-rotate-2 hover:scale-105">
                <div className="h-16 w-16">
                  <TfiWindow className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold">Web Development Using(Mern Stack)</h3>
                <p>
                The MERN stack is a popular technology stack used for building modern web applications. It consists of four key technologies: MongoDB, Express.js, React, and Node.js. Here’s a detailed overview of each component and how they work together to create a full-stack web application:
                </p>
              </div>
              <div className="border bg-white space-y-5 cursor-pointer text-left text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:text-white-A700  hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform  hover:-rotate-2 hover:scale-105">
                <div className="h-20 w-20">
               <img src="https://cdn-icons-png.flaticon.com/512/5738/5738077.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold">App Development Using(Flutter with Firebase)</h3>
                <p>
                Flutter is an open-source UI software development kit (SDK) created by Google, while Firebase is a comprehensive app development platform that offers various services like authentication, real-time databases, cloud storage, and more. 
                </p>
              </div>
              <div className=" border hover:text-white-A700  cursor-pointer bg-white space-y-5 text-left text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform hover:-rotate-2 hover:scale-105">
                <div className="h-16 w-16">
                 <img src="https://cdn-icons-png.flaticon.com/512/9716/9716596.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold">Machine Learning</h3>
                <p>
                Machine Learning (ML) is a subset of artificial intelligence (AI) that enables systems to learn and improve from experience without being explicitly programmed. It involves algorithms that can analyze data, recognize patterns, and make decisions with minimal human intervention. 
                </p>
              </div>
            </div>
          </section>



        <div className='flex sm:flex-wrap mb-5'>
        <header className="flex sm:flex-wrap justify-center w-full p-5">
            <div className="logo w-[90%]">
              <img src="https://omnidev-courses.vercel.app/_next/static/media/appdeva.257ad748.svg" alt="" />
            </div>
       
          </header>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start p-10 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">App Devlopment (Real World Project)</h2>
              <p className="text-lg text-gray-600">Using Flutter And Firebase Createing Real World Application</p>
              <p className="mt-4 text-gray-500">
              Application development refers to the process of creating software applications that run on various platforms such as computers, mobile devices, or web browsers. It involves several stages, from conceptualization to deployment and maintenance. Here's an overview of the key aspects of application development:
              </p>
         

              <button className='px-7 mt-4 rounded-full py-3 bg-pink-600 text-white-A700'>
                View Project
              </button>

            </div>
            <div className="hidden md:block">
              {/* Images of hands holding smartphones go here */}
            </div>
          </div>
        </div>

        </div>


      </>
      )
}

      export default Profile
