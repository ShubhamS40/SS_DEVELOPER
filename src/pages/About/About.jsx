import Header from 'components/Header/index';
import Footer from 'components/Footer/index';

import sunil from '../../assets/images/sunil.png'
import shubham from '../../assets/images/SHUBHAM.png'
import rahul from '../../assets/images/rahul.png'
import profileImage from '../../assets/images/Professional LinkedIn Profile Picture.png'
import uiux from '../../assets/images/uiux.jpg'
import product from '../../assets/images/product.jpg'
import web from '../../assets/images/web.jpg'
import { Button } from 'components'
import { TfiWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import React from 'react';

function About() {
  const teamMembers = [
    {
      name: "Sunil Sharma",
      role: "Social Media/Influencer",
      image: `${sunil}`,
      skills: [
        { name: "Web Design", value: 40 },
        { name: "Design", value: 80 },
        { name: "Photoshop", value: 60 },
        { name: "Coding", value: 45 },
      ],
      social: {
        facebook:<FaGithub />,
        twitter: <FaGoogle />,
        googlePlus: <FaInstagram />,
      }
    },
    {
      name: "Shubham Singh",
      role: "Web/App devloper",
      image: `${shubham}`,
      skills: [
        { name: "Flutter & Dart", value: 80 },
        { name: "Java Script", value: 95 },
        { name: "Python", value: 65 },
        { name: "Mern Stack", value: 78 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    },
    {
      name: "Rahul",
      role: "Developer",
      image: `${rahul}`,
      skills: [
        { name: "React", value: 90 },
        { name: "SQL", value: 75 },
        { name: "Mongodb", value: 100 },
        { name: "Next js", value: 50 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    },
    {
      name: "-----",
      role: "----------",
      image: `https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=`,
      skills: [
        { name: "Web Design", value: 0 },
        { name: "Design", value: 0 },
        { name: "Photoshop", value: 0 },
        { name: "Coding", value: 0 },
      ],
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
      }
    }
  ];
    return (
        // <div>
            
        //     <div className="grid grid-cols-12 gap-4  xs:gap-6 md:gap-8 p-24 sm:p-5 sm:py-10">
        //         <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-5 max-md:col-span-12 !p-0" style={{ transform: 'none' }}>
        //             <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ssdevloper&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF" alt="github stats" loading="lazy" />
        //         </div>
        //         <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-7 max-md:col-span-12 !p-0" style={{ transform: 'none' }}>
        //             <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF" alt="github stats" loading="lazy" />
        //         </div>
        //         <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-full" style={{ transform: 'none' }}>
        //             <img className="w-full h-auto" src="https://skillicons.dev/icons?i=html,css,js,tailwind,react,next,flutter,dart,nginx,firebase,appwrite,nodejs,expressjs,c,java,mongo,redux,mysql,threejs,git,github&perline=15" alt="github stats" loading="lazy" />
        //         </div>
        //         <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-6 !p-0" style={{ transform: 'none' }}>
        //             <img className="" src="https://github-readme-streak-stats.herokuapp.com?user=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats" loading="lazy" />
        //         </div>
        //         <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-6 !p-0" style={{ transform: 'none' }}>
        //           <p>Hello My Dear Friends That is My Tech Stack</p>
        //         </div>
        //     </div>
            
        // </div>

        <>
           <div className="flex  flex-wrap items-center justify-around p-5">
      <div className="text-center mb-5 sm:w-[90vw] w-[40%]">
        <h2 className="text-2xl font-bold">Welcome To Our Story</h2>
        <h1 className="text-3xl font-bold my-4"></h1>
        <p className="mb-4">
        At S.S Developer, we believe in development innovation and hard work. Founded in 2023, our journey began with a simple yet profound vision: .


        </p>
        <p>
        Driven by a passion for industry or field, we strive to  Our goal and main motive of this community is to hellp and support the poor People that not purchase the courses. Through Our specific approach or methodology is to help the developers, we aim to build new thing and innovatives and startup .


        </p>
      </div>
      <div className="text-center">
        <img src="https://themeatelier.net/site-templates/iproof/img/about-img/about-img.jpg" alt="Person working on computer" className="w-full max-w-lg" />
      </div>
    </div>

     <div style={{backgroundColor:'#E91E63'}}  className="text-white flex justify-between items-center p-10">
      <h1 className="text-3xl sm:text-xl text-white-A700 font-bold">I'm a professional</h1>
      <button className="bg-white-A700 text-pink-500 font-bold sm:py-3 sm:px-5  py-4 px-10 rounded shadow">
        Hire Me
      </button>
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
                <div key={index} className=" w-full  sm:w-[90%] md:w-1/3 lg:w-1/4 p-4">
                  <div className="bg-white rounded-lg p-6 shadow-lg sm:w-[100%] bg-white-A700">
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
                              className=" h-2.5 rounded-full"
                              style={{backgroundColor:'#E91E63', width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-2">
                      <a href={member.social.facebook} className="text-white bg-red-300  w-8 h-8 rounded-full flex items-center justify-center"><FaGithub /></a>
                      <a href={member.social.twitter} className="text-white bg-red-300  w-8 h-8 rounded-full flex items-center justify-center"><FaGoogle /></a>
                      <a href={member.social.googlePlus} className="text-white bg-red-300 w-8 h-8 rounded-full flex items-center justify-center"><FaInstagram /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    

  
         

         {/* Github */}

<div style={{backgroundColor:'#E91E63'}}  className="grid rounded-2xl opacity-[0.9] grid-cols-12 sm:m-0  sm:px-2  m-10 gap-4   md:gap-8 p-20">
<div className=" sm:p-8 sm:w-[90vw] sm:mx-2  rounded-xl flex items-center justify-center space-y-8 border col-span-5 max-md:col-span-12 !p-0">
    {/* Image with GitHub top languages stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ssdevloper&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 sm:hidden rounded-xl flex items-center justify-center space-y-8 border col-span-7 max-md:col-span-12 !p-0">
    {/* Image with GitHub stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
 <div className=' flex flex-wrap sm:justify-center bg-yellow-20 hidden  gap-5  sm:w-[95vw]'>
 <div className=" sm:p-8 sm:w-[90vw]  rounded-xl flex items-center justify-center space-y-8 border col-span-5 max-md:col-span-12 !p-0">
    {/* Image with GitHub top languages stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ssdevloper&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-7 max-md:col-span-12 !p-0">
    {/* Image with GitHub stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
 </div>
  <div className="p-6 sm:mx-3 sm:p-4 rounded-xl flex items-center justify-center space-y-8 sm:w-[90vw] border col-span-full">
    {/* Image with skill icons */}
    <img className="w-auto h-auto" src="https://skillicons.dev/icons?i=html,css,js,tailwind,react,next,nodejs,expressjs,c,java,mongo,redux,mysql,threejs,git,github&perline=15" alt="Skill Icons" loading="lazy" />
  </div>
  <div className="p-6 sm:mx-3 sm:w-[90vw] sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-6 !p-0">
    {/* Image with GitHub streak stats */}
    <img src="https://github-readme-streak-stats.herokuapp.com?user=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="GitHub Streak Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:hidden sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-6 !p-0">
    {/* Link to GitHub repository */}
    <a target="_blank" className="w-full" href="https://github.com/ssdevloper/100DaysOfCode-Python">
      <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=ssdevloper&exclude&repo=100DaysOfCode-Python&theme=transparent&hide_border=true&title_color=FFFFFF" alt="GitHub Repository Stats" loading="lazy" />
    </a>
  </div>
</div>



 {/* Devloper */}

  <div className="flex sm:flex-wrap items-center justify-center mb-[5%] mt-[10%]">
   <header className="flex justify-center w-full p-5">
    <div className="logo w-[90%]">
      <img src="https://omnidev-courses.vercel.app/_next/static/media/learn.5fa5a7d4.svg" alt="" />
    </div>
    <nav>
      {/* Navigation items go here */}
    </nav>
   </header>
   <div className="flex items-center justify-center w-full">
    <div className="flex flex-col items-start p-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Registration</h2>
      <p className="text-lg text-gray-600">For the Joining Our Developer Community </p>
      <p className="mt-4 text-gray-500">
      Join the developer community to explore new technologies and push the boundaries of what's possible.
      Connect with fellow developers to learn from their experiences and grow together in your coding journey.
      Join a vibrant community where you can collaborate on exciting projects that make a real impact.
      </p>
      <p className="mt-2 text-gray-500">
      Network with industry leaders and influencers who can mentor and guide you in your career
      Contribute to open-source projects and make a meaningful impact on the global developer community.
      </p>
    
       <button className='px-7 mt-4 rounded-full py-3 bg-pink-600 text-white-A700'>
       Registration
       </button>
      
    </div>
    <div className="hidden md:block">
      {/* Images of hands holding smartphones go here */}
    </div>
  </div>
</div>







        </>
    );
}

export default About;
