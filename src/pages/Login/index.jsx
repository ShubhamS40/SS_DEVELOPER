import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async () => {
    let result = await fetch("http://localhost:2000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json"
      }
    })
    result = await result.json()
    console.log(result);
    if (result[0]["name"]) {
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/")
    } else {
      alert("Please Enter The Correct Detail")
    }
  }
  return (
    <>
      <div className=" p-5  flex justify-center ">
      <div className="flex rounded-lg  w-[41%] flex-col items-center gap-14 border border-solid border-blue_gray-900 bg-white-A700 p-12 md:w-full md:p-5 sm:gap-7">
        <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
          Login
        </Heading>
        <div className="flex w-[92%] flex-col items-center gap-[29px] md:w-full">
          <div className="flex flex-col gap-5 self-stretch">
            <div className="flex flex-col items-start gap-2.5">
              <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                Email
              </Text>
            <span class="border border-gray-300 p-2 w-[100%] rounded">
            <input
                placeholder="Enter the email"
                type="email"
                onChange={(E) => { setEmail(E.target.value) }}

                className="self-stretch font-poppins tracking-[0.08px] sm:pr-5"
              />
            </span>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                Password
              </Text>
              <span class="border border-gray-300 p-2 w-[100%] rounded">
            <input
                placeholder="Enter the email"
                type="email"
                onChange={(E) => { setEmail(E.target.value) }}

                className="self-stretch font-poppins tracking-[0.08px] sm:pr-5"
              />
            </span>
            </div>
            <div className="flex justify-between gap-5">
              <CheckBox
                name="rememberme"
                label="Remember me?"
                id="rememberme"
                className="gap-2 self-start p-px font-poppins text-base font-medium tracking-[0.08px] text-black-900"
              />
             
                <Text
                  size="xl"
                  as="p"
                  className="!font-poppins !font-medium tracking-[0.08px] !text-black-900"
                >
                  Forgot password
                </Text>
              
            </div>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-pink-700 p-4 text-white-A700 !rounded-[10px] font-poppins font-medium tracking-[0.08px] sm:px-5"
          >
            Login
          </button>

      
            <Text size="md" as="p" className="tracking-[-0.50px] !text-black-900">
              <span className="text-black-900">Don&#39;t have an account?&nbsp;</span>
              <span className="text-blue_gray-900">Register here</span>
            </Text>
                </div>
      </div>
      </div>

    </>
  );
}
