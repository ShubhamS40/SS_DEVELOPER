import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import profileImage from '../../assets/images/Professional LinkedIn Profile Picture.png'
import uiux from '../../assets/images/uiux.jpg'
import product from '../../assets/images/product.jpg'
import web from '../../assets/images/web.jpg'
import { Button } from 'components'
import rahul from '../../assets/images/rahul.jpeg'
import sunil from '../../assets/images/sunil.jpeg'
import shubham from '../../assets/images/shubham.jpeg'


function Profile() {
  return (
    <>
      <Header />
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

        <div>
          <div className='flex justify-between m-10 sm:m-5  '>
            <h1 className='text-3xl sm:text-xl font-serif font-bold '>Meet Our Team</h1>
            <h1 className='text-pink-600 text-2xl sm:text-xl cursor-pointer'>View All</h1>
          </div >

          <div className='flex flex-wrap space-y-10 justify-around border-4 sm:border-0 border-pink-600 p-5 m-10 sm:p-1 sm:m-1 rounded-3xl'>
          
          <div className='hidden'>

          </div>

          <div className='text-xl border-2 space-y-3 border-pink-600 p-5 rounded-lg  '>
            <img className='h-72' src={sunil} alt="" />
                <h1>Name : Sunil Sharma</h1>
              <h1 className='w-72' >Desiganation : Social Media & Account Heandler</h1>
            </div>

            <div className='text-xl border-2 border-pink-600 p-5 space-y-3 rounded-lg '>
            <img className='h-72' src={shubham} alt="" />
                <h1>Name : Shubham Singh </h1>
              <h1>Desiganation : Techanical Lead</h1>
            </div>
            <div className='text-xl border-2 border-pink-600 p-5 space-y-3 rounded-lg '>
            <img className='h-72' src={rahul} alt="" />
                <h1>Name : Rahul</h1>
              <h1>Desiganation : Content Creator</h1>
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



      <Footer />
      </div>
    </>
  )
}

export default Profile
