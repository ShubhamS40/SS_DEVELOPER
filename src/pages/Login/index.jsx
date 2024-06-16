import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginContent from "../../components/LoginContent";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  let navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleLogin=async()=>{
    let result=await fetch("http://localhost:2000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-type":"application/json"
      }
    })
    result=await result.json()
    console.log(result);
    if(result[0]["name"]){
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/")
    }else{
      alert("Please Enter The Correct Detail")
    }
  }
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col gap-[50px]">
          
          <div className="flex flex-col items-center gap-[124px] md:gap-[93px] sm:gap-[62px]">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[49%] flex-col gap-[77px] md:w-full md:gap-[57px] sm:gap-[38px]">
                  <Heading size="4xl" as="h1" className="leading-[58px] tracking-[-0.50px]">
                    Welcome back, there is the latest news today !!
                  </Heading>
                  <div className="flex gap-5 md:flex-col">
                    {[...Array(2)].map((d, index) => (
                      <LoginContent
                        datetext="Ukraine, 24 april 2022"
                        headlinetext="Zelensky accuses Russia of worst crimes since WW2 "
                        descriptiontext="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                        readMore="Read More"
                        key={"login" + index}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex w-[41%] flex-col items-center gap-14 border border-solid border-blue_gray-900 bg-white-A700 p-12 md:w-full md:p-5 sm:gap-7">
                  <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                    Login
                  </Heading>
                  <div className="flex w-[92%] flex-col items-center gap-[29px] md:w-full">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-col items-start gap-2.5">
                        <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                          Email
                        </Text>
                        <input
                        placeholder="Enter the email"
                        type="email"
                        onChange={(E)=>{setEmail(E.target.value)}}
                       
                          className="self-stretch font-poppins tracking-[0.08px] sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-2.5">
                        <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                          Password
                        </Text>
                        <input
                        placeholder="Enter the password"
                        type="email"
                        onChange={(E)=>{setPassword(E.target.value)}}
                          className="self-stretch font-poppins tracking-[0.08px] sm:pr-5"
                        />
                      </div>
                      <div className="flex justify-between gap-5">
                        <CheckBox
                          name="rememberme"
                          label="Remember me?"
                          id="rememberme"
                          className="gap-2 self-start p-px font-poppins text-base font-medium tracking-[0.08px] text-black-900"
                        />
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <Text
                            size="xl"
                            as="p"
                            className="!font-poppins !font-medium tracking-[0.08px] !text-black-900"
                          >
                            Forgot password
                          </Text>
                        </a>
                      </div>
                    </div>
                   
                      <button
                       type="submit"
                       onClick={handleLogin}
                        className="w-full bg-pink-700 p-4 text-white-A700 !rounded-[10px] font-poppins font-medium tracking-[0.08px] sm:px-5"
                      >
                        Login
                      </button>
                    
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Text size="md" as="p" className="tracking-[-0.50px] !text-black-900">
                        <span className="text-black-900">Don&#39;t have an account?&nbsp;</span>
                        <span className="text-blue_gray-900">Register here</span>
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
