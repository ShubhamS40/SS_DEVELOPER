import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("All fields are mandatory to fill");
      return;
    }

    try {
      let response = await fetch("http://localhost:2000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let result = await response.json();

      console.log("Backend response:", result); // Debugging

      if (response.ok) {
        localStorage.setItem('token', result.token); // Store the JWT token
        console.log("Registration successful:", result);
        alert("Registration successful. Please login to continue.");
        navigate("/login");
      } else {
        setError(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center">
  

          <div className="mt-[53px] flex w-[90%] flex-col items-center md:w-full md:p-5">
            <div className="flex w-[46%] flex-col gap-[29px] md:w-full">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px]">
                Let&#39;s join our Developer Community
              </Heading>
              <Text
                size="3xl"
                as="p"
                className="w-[96%] text-center leading-[35px] tracking-[-0.50px] !text-black-900_7f md:w-full"
              >
                We are hiring volunteers for different tech stacks like AI, ML, Web Dev, App Dev, Cyber Security, and more.
              </Text>
            </div>
            <div className="rounded-lg mt-[50px] mb-10 flex w-[41%] flex-col items-center gap-[57px] border border-solid border-blue_gray-900 bg-white-A700 p-[54px] md:w-full md:p-5 sm:gap-7">
              <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                Register
              </Heading>
              <div className="flex flex-col items-start gap-[31px] self-stretch">
                <div className="flex flex-col gap-[30px] self-stretch">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Name
                      </Text>
                      <span className="border w-full border-gray-300 p-2 rounded">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Email
                      </Text>
                      <span className="border w-full border-gray-300 p-2 rounded">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="w-full"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Password
                      </Text>
                      <span className="border w-full border-gray-300 p-2 rounded">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          required
                          placeholder="Enter your password"
                          className="w-full"
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSignup}
                    className="w-full bg-pink-700 text-white-A700 p-4 !rounded-[10px] font-poppins font-medium tracking-[0.08px] sm:px-5"
                  >
                    Register
                  </button>
                </div>
                <Text size="md" as="p" className="ml-[50px] tracking-[-0.50px] !text-black-900 md:ml-0">
                  <span className="text-black-900">Do you already have an account??&nbsp;</span>
                  <Link to={"/login"}><span className="text-blue_gray-900">Login Now</span></Link>
                </Text>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
