import React from 'react'
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
            <div style={{backgroundImage: `url(${"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`, backgroundSize: 'cover', backgroundPosition: 'center'}}  className="flex sm:flex-wrap p-10 sm:p-0  w-[100%]  justify-center">
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



        <div>
          <div className='flex text-4xl font-sans font-bold justify-center m-10'>
            <h1>What We Do</h1>

          </div >

          <div className='flex  p-5  m-10 sm:m-0 border-2 sm:border-0  flex-wrap space-y-5  rounded-3xl  border-pink-600 justify-around'>
            <div className='hidden'>
              <p></p>
            </div>
          <div className='text-sm rounded-3xl border-2 justify-center flex-row p-4 space-y-5'>
             <img className='h-60' src={web} alt="" />
              <div className='self-center'>
             </div>

              <div className='w-[300px] space-y-5'>
                <h1>Website Dev</h1>
                <h1 >Make your business more leverage by having an optimal website and we are ready to help</h1>
              </div>
            </div>

            <div className='text-sm rounded-3xl border-2 justify-center flex-row p-4 space-y-5'>
   <img className='h-60' src={product} alt="" />
              <div className='self-center'>
              </div>
            
              <div className='w-[300px] space-y-5'>
                <h1>Branding & Product</h1>
                <h1 >we can also help you in the affairs of product branding so that your products can be more riveting</h1>
              </div>
            </div>

            <div className='text-sm rounded-3xl border-2 justify-center flex-row p-4 space-y-5'>

              <div className='self-center'>
                <img className='h-60' src={uiux} alt="" />
               <div/>

              <div className='w-[300px] space-y-5'>
                <h1>UIUX Design</h1>
                <h1 >We can make your website or application design better with this service</h1>
               </div>
            </div>

            

           



          </div>


        </div>


      </div>



      
      </div>
    </>
  )
}

export default Profile
