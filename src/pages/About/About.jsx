import Header from 'components/Header/index';
import Footer from 'components/Footer/index';

import React from 'react';

function About() {
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
           <div className="flex sm:flex-col items-center justify-around p-5">
      <div className="text-center mb-5 w-[40%]">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <h1 className="text-3xl font-bold my-4">Iproof Portfolio HTML Template.</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil ex corrupti placeat, maiores ipsam id vero dolore eos
          voluptate harum commodi aliquam quidem mollitia at deleniti laudantium facere esse illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exercitationem fugit similique, animi tempora itaque doloremque
          at eveniet, deleniti dicta quisquam, cupiditate debitis numquam. Error voluptatibus, cupiditate maiores eligendi ea fuga.
          Nihil ex corrupti placeat, maiores ipsam id vero dolore eos voluptate harum commodi aliquam quidem mollitia at deleniti
          laudantium facere esse illum.
        </p>
      </div>
      <div className="text-center">
        <img src="https://themeatelier.net/site-templates/iproof/img/about-img/about-img.jpg" alt="Person working on computer" className="w-full max-w-lg" />
      </div>
    </div>

     <div style={{backgroundColor:'#E91E63'}}  className="text-white flex justify-between items-center p-10">
      <h1 className="text-3xl text-white-A700 font-bold">I'm a professional</h1>
      <button className="bg-white-A700 text-pink-500 font-bold py-4 px-10 rounded shadow">
        Hire Me
      </button>
    </div>

   {/* PROFILE */}
 


         <div className='border-2 m-8
         '>
         <h1 className="text-3xl mx-7 font-bold">
            John Doe <span className="text-gray-500">/ Web Developer</span>
          </h1>
          <hr className="border-t-2 border-black w-16 my-2" />
         <div className="grid  grid-cols-3 justify-around  m-2 mx-auto p-5">
      
      {/* Profile Info Section */}
      <div className="col-span-1 w-[100%] px-3 md:col-span-2">
      
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil ex corrupti placeat, maiores ipsam id vero dolore eos
          voluptate harum commodi aliquam quidem mollitia at deleniti laudantium facere esse illum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exercitationem fugit similique, animi tempora itaque doloremque
          at eveniet, deleniti dicta quisquam, cupiditate debitis numquam. Error voluptatibus, cupiditate maiores eligendi ea fuga.
        </p>
        <div className="my-4">
          <p className="flex items-center"><span className="text-pink-500 mr-2">📍</span> 123 Lorem St., Transylvania</p>
          <p className="flex items-center"><span className="text-pink-500 mr-2">📞</span> +123 456 789</p>
          <p className="flex items-center"><span className="text-pink-500 mr-2">✉️</span> example@example.com</p>
        </div>
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4">Download My CV</button>
      </div>
      
    

      {/* Image Section */}
      <div className="col-span-1">
        <img src="https://themeatelier.net/site-templates/iproof/img/about-img/me-design.png" alt="Profile" className="rounded mx-5 shadow-lg w-[80%]" />
      </div>
    
    {/* Skills and Social Media Section */}
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
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
          <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-blue-700"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-pink-500"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
    </div>
  </div>
         </div>

         {/* Github */}

<div style={{backgroundColor:'#E91E63'}}  className="grid rounded-2xl opacity-[0.9] grid-cols-12  m-10 gap-4 xs:gap-6 md:gap-8 p-20">
  <div className=" sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-5 max-md:col-span-12 !p-0">
    {/* Image with GitHub top languages stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ssdevloper&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-7 max-md:col-span-12 !p-0">
    {/* Image with GitHub stats */}
    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF" alt="GitHub Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-full">
    {/* Image with skill icons */}
    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=html,css,js,tailwind,react,next,nodejs,expressjs,c,java,mongo,redux,mysql,threejs,git,github&perline=15" alt="Skill Icons" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-6 !p-0">
    {/* Image with GitHub streak stats */}
    <img src="https://github-readme-streak-stats.herokuapp.com?user=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="GitHub Streak Stats" loading="lazy" />
  </div>
  <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border col-span-6 !p-0">
    {/* Link to GitHub repository */}
    <a target="_blank" className="w-full" href="https://github.com/ssdevloper/100DaysOfCode-Python">
      <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=ssdevloper&exclude&repo=100DaysOfCode-Python&theme=transparent&hide_border=true&title_color=FFFFFF" alt="GitHub Repository Stats" loading="lazy" />
    </a>
  </div>
</div>



 {/* Devloper */}

  <div className="flex items-center justify-center mb-[5%] mt-[10%]">
   <header className="flex justify-center w-full p-5">
    <div className="logo w-[90%]">
      <img src="https://themeatelier.net/site-templates/iproof/img/about-img/about-img.jpg" alt="" />
    </div>
    <nav>
      {/* Navigation items go here */}
    </nav>
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







        </>
    );
}

export default About;
