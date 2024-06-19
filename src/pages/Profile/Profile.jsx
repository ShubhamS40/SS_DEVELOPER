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

function Profile() {
  const teamMembers = [
    {
      name: "Samuel Silva",
      role: "CEO/Co-Founder",
      image: `${sunil}`,
      skills: [
        { name: "Web Design", value: 90 },
        { name: "Design", value: 75 },
        { name: "Photoshop", value: 70 },
        { name: "Coding", value: 65 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    },
    {
      name: "Jennifer Howard",
      role: "Designer",
      image: `${shubham}`,
      skills: [
        { name: "Web Design", value: 90 },
        { name: "Design", value: 75 },
        { name: "Photoshop", value: 70 },
        { name: "Coding", value: 65 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    },
    {
      name: "Matthew Garza",
      role: "Developer",
      image: `${rahul}`,
      skills: [
        { name: "Web Design", value: 90 },
        { name: "Design", value: 75 },
        { name: "Photoshop", value: 70 },
        { name: "Coding", value: 65 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    },
    {
      name: "Johnny Ortiz",
      role: "Marketer",
      image: `${sunil}`,
      skills: [
        { name: "Web Design", value: 90 },
        { name: "Design", value: 75 },
        { name: "Photoshop", value: 70 },
        { name: "Coding", value: 65 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    }
  ];
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
                  <button className="fill size-lg   !rounded-[5px] min-w-[201px] sm:min-w-[15vw]  px-[35px] h-[67px]  items-center justify-center !bg-pink-700 text-center text-base font-bold !text-white-A700  ">
                    Resume
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

        {/* Team Section */}
        <div className="bg-black  py-20">
          <div className="container mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Team</h2>
              <p className="text-lg text-gray-300">My Team Members</p>
            </div>
            <div style={{ backgroundImage: `url(${"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="flex sm:flex-wrap p-10 sm:p-0  w-[100%]  justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                  <div className="bg-white rounded-lg p-6 shadow-lg bg-white-A700">
                    <div className="mb-4">
                      <div
                        className="w-24 h-24 rounded-full mx-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${teamMembers[index]["image"]})` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">{member.role}</p>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    </div>
                    <div className="mt-4">
                      {member.skills.map((skill, idx) => (
                        <div key={idx} className="mb-2">
                          <h4 className="text-sm font-medium text-gray-600 flex justify-between">
                            {skill.name}<span>{skill.value}%</span>
                          </h4>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-red-500 h-2.5 rounded-full"
                              style={{ width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-2">
                      <a href={member.social.facebook} className="text-white bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center"><i className="fa fa-facebook"></i></a>
                      <a href={member.social.twitter} className="text-white bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center"><i className="fa fa-twitter"></i></a>
                      <a href={member.social.googlePlus} className="text-white bg-red-600 w-8 h-8 rounded-full flex items-center justify-center"><i className="fa fa-google-plus"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        
 



          <section className="text-center py-10">
            <h2 className="text-2xl text-blue-500">My services</h2>
            <h1 className="text-5xl font-extrabold mt-2">What I do <br /> for My Customers</h1>
            <div className="flex justify-center p-[36px] h-auto w-auto m-[90px] space-x-10">
              <div className="bg-white space-y-5 text-left cursor-pointer hover:text-white-A700 text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform hover:-rotate-2 hover:scale-105">
                <div className="h-16 w-16">
                  <TfiWindow className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold">Webflow Developer</h3>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="bg-white space-y-5 cursor-pointer text-left text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:text-white-A700  hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform  hover:-rotate-2 hover:scale-105">
                <div className="h-16 w-16">
                  <TfiWindow className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold">Webflow Developer</h3>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className=" hover:text-white-A700  cursor-pointer bg-white space-y-5 text-left text-black w-[800px] rounded-lg px-[22px] py-10 shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-300 will-change-transform transform hover:-rotate-2 hover:scale-105">
                <div className="h-16 w-16">
                  <TfiWindow className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold">Webflow Developer</h3>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </section>



        <div className='flex mb-5'>
        <header className="flex justify-center w-full p-5">
            <div className="logo w-[90%]">
              <img src="https://themeatelier.net/site-templates/iproof/img/about-img/about-img.jpg" alt="" />
            </div>
       
          </header>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start p-10 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">I'm a Developer</h2>
              <p className="text-lg text-gray-600">I Develop Applications that Help People</p>
              <p className="mt-4 text-gray-500">
                Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat
              </p>
              <p className="mt-2 text-gray-500">
                Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
              </p>

              <button className='px-7 mt-4 rounded-full py-3 bg-pink-600 text-white-A700'>
                View Portfolio
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
