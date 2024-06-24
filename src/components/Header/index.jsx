import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import devLogo from '../../assets/images/devLogo.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Header({ ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = localStorage.getItem("token");
  const name= localStorage.getItem("name");
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleShowMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path ? 'border-b-4 border-pink-600' : '';
  console.log(name);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-around w-[100%] items-end py-[3.5px] z-10 sm:py-2 top-0 sticky bg-black-900`}
    >
      <div className='w-[100%] flex  justify-between px-7'>
        {/* Logo and navigation */}
        <div className='first part flex space-x-5 items-center '>
          <div className='logo'>
            <img className='h-[11vh] sm:h-[8.5vh]' src={devLogo} alt="ssdevloperLogo" />
          </div>
          <div className='text-white-A700'>
            <ul className='header sm:hidden flex space-x-5 cursor-pointer font-sans text-xl font-bold transition-all duration-50 ease-in-out'>
              {auth ? 
                <>
                  <Link to={"/"}><li className={`${isActive("/")}`}>Home</li></Link>
                  <Link to={"/news"}><li className={`${isActive("/news")}`}>News</li></Link>
                  <Link to={"/contact"}><li className={`${isActive("/contact")}`}>Contact</li></Link>
                  <Link to={"/about"}><li className={`${isActive("/about")}`}>About</li></Link>
                </>
               : null}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='socialmediaicon second part flex items-center space-x-10'>
          <div className='flex space-x-5'>
            <img className='hover:scale-125 cursor-pointer' src={facebook} alt="Facebook" />
            <img className='hover:scale-125 cursor-pointer' src={instagram} alt="Instagram" />
            <img className='hover:scale-125 cursor-pointer' src={linkedin} alt="LinkedIn" />
            <img className='hover:scale-125 cursor-pointer' src={twitter} alt="Twitter" />
          </div>
          {/* Authentication Buttons */}
          <div className='space-x-5 flex'>
            {auth ? (
            <>
              <button onClick={handleLogout} className='bg-pink-700 p-2 text-white-A700 font-bold font-serif  hover:bg-pink-600 rounded-2xl'>
                <h1  onClick={handleLogout}  className="font-extrabold">Logout</h1>
              ({name})
              </button>
            </>
            ) : (
              <div className="flex">
                <Link to={"/register"}><button className='font-bold font-serif text-white-A700 p-4 rounded-lg'>Sign-up</button></Link>
                <Link to={"/login"}><button className='px-6 bg-pink-700 font-bold font-serif text-white-A700 p-4 hover:bg-pink-600 rounded-full'>Login</button></Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hamburger Menu */}
      <div className="humburger text-white-A700 self-center p-4">
        {menuOpen ?
          <RxCross1 className="cursor-pointer scale-150" onClick={handleShowMenu} />
          :
          <GiHamburgerMenu className="scale-y-150 scale-x-150 cursor-pointer" onClick={handleShowMenu} />
        }
      </div>

      {/* Mobile Menu */}
      {menuOpen &&
        <div className="absolute h-auto p-5 w-[100%] top-20 text-white-A700 bg-gradient-to-b from-pink-700 to-pink-400 opacity-[0.9] transition-all">
          <div className='text-white-A700'>
            <ul className='grid grid-rows-5 justify-center items-center space-y-3 cursor-pointer font-sans text-xl font-bold transition-all duration-50 ease-in-out'>
              {auth ? (
                <>
                <Link to={"/"} onClick={()=>setMenuOpen(false)}><li  className={`${isActive("/")}`}>Home</li></Link>
                  <Link to={"/news"} onClick={()=>setMenuOpen(false)} ><li  className={`${isActive("/news")}`}>News</li></Link>
                  <Link to={"/contact"} onClick={()=>setMenuOpen(false)} ><li  className={`${isActive("/contact")}`}>Contact</li></Link>
                  <Link to={"/about"} onClick={()=>setMenuOpen(false)} ><li  className={`${isActive("/about")}`}>About</li></Link>
                </>
              ) : null}
              {
                auth ?   
             <span onClick={()=>{
              setMenuOpen(false)
             }}><h1 onClick={handleLogout}>logout{name}</h1></span>
              :<>
              <Link onClick={()=>{
                setMenuOpen(false)
              }}  to={"/register"}><li className={`${isActive("/register")}`}>Sign-up</li></Link>
              <Link onClick={()=>setMenuOpen(false)} to={"/login"}><li className={`${isActive("/login")}`}>Login</li></Link>
              </>
              }
            </ul>
          </div>
        </div>
      }
    </header>
  );
}
