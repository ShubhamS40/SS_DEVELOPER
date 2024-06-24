import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:2000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      let result = await response.json();
      const token = result.token;
      const name = result.name;
      // Set JWT token in a cookie
      localStorage.setItem('token', token) // 'token' is the cookie name
      localStorage.setItem("name", name);

      setError('');
      navigate('/'); // Redirect to a protected route or perform other actions

    } catch (error) {
      setError('Invalid credentials');
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      
      <div className="p-5 flex justify-center">
        <div className="flex rounded-lg w-[41%] flex-col items-center gap-14 border border-solid border-blue_gray-900 bg-white-A700 p-12 md:w-full md:p-5 sm:gap-7">
          <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
            Login
          </Heading>
          <div className="flex w-[92%] flex-col items-center gap-[29px] md:w-full">
            <div className="flex flex-col gap-5 self-stretch">
              <div className="flex flex-col items-start gap-2.5">
                <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                  Email
                </Text>
                <span className="border border-gray-300 p-2 w-[100%] rounded">
                  <input
                    placeholder="Enter the email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="self-stretch font-poppins tracking-[0.08px] sm:pr-5"
                  />
                </span>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                  Password
                </Text>
                <span className="border border-gray-300 p-2 w-[100%] rounded">
                  <input
                    placeholder="Enter the password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  className="!font-poppins !font-medium tracking-[0.08px] !text-black-900 cursor-pointer"
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Text size="md" as="p" className="tracking-[-0.50px] !text-black-900">
              <Link to="/register">
                <span className="text-black-900">Don&#39;t have an account?&nbsp;</span>
                <span className="text-blue_gray-900 cursor-pointer">Register here</span>
              </Link>
            </Text>
          </div>
        </div>
      </div>
      
    </>
  );
}
