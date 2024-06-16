import { Button } from 'components';
import Footer from 'components/Footer/index';
import Header from 'components/Header/index';
import { useState } from 'react';
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch("http://localhost:2000/contact", {
            method: "post",
            body: JSON.stringify({ name, email, message }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);

        // reset the form fields
        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <div>
         

            <div className="max-w-[1191px] gap-[60px] mt-[100px] mx-auto flex w-full items-center md:flex-col md:p-5">
                <form method='POST' onSubmit={handleSubmit} className="border-2 m-5 sm:m-1 sm:my-[-25px] sm:border-4 border-pink-700 rounded-[20px] py-[72px] gap-[29px] pl-[72px] flex flex-1 flex-col items-start bg-white-A400 pr-14 shadow-xs md:self-stretch sm:p-5">
                    <div className="w-[89%] flex flex-col items-start self-center md:w-full">
                        <h2 className="size-lg bg-gray-100 heading ui text-xl font-bold !text-gray-600">
                            Send Message
                        </h2>
                        <div className="mt-[13px] h-px w-full self-stretch bg-gray-200"></div>
                        <div className="gap-[30px] mt-[23px] flex flex-col self-stretch">
                            <div className="gap-[30px] flex sm:flex-col">
                                <label className="bg-gray-100 round fill size-xs gray_100 input ui !rounded-[5px] pr-[35px] pl-[19px] h-[83px] flex w-full items-center justify-center !bg-gray-100 text-base font-bold !text-gray-400 sm:w-full sm:pr-5">
                                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" />
                                </label>
                                <label className="bg-gray-100 round fill size-xs gray_100 input ui !rounded-[5px] pr-[35px] pl-[19px] h-[83px] flex w-full items-center justify-center text-base font-bold !text-gray-400 sm:w-full sm:pr-5">
                                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" type="email" />
                                </label>
                            </div>
                            <textarea className="round tarfillgray100 size-xs gray_100 textarea ui !rounded-[5px] pr-[35px] pl-[19px] pb-[35px] pt-[21px] h-[174px] !bg-gray-100 text-base font-bold text-gray-400 sm:py-5 sm:pr-5" name="your_message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <button type='submit' className="fill size-md green_600 button ui !rounded-[25px] min-w-[182px] px-[35px] gap-[13px] ml-[39px] mb-[30px] h-[50px] flex flex-row items-center justify-center !bg-pink-600 text-center text-xl !text-white-A700 !shadow-sm md:ml-0 sm:px-5">
                        <span>Send</span>
                        <IoIosSend />

                        
                    </button>
                </form>
                <div className="border-2 sm:border-4 border-pink-700 rounded-[20px] gap-[30px] w-[32%] mb-3 flex flex-col bg-white-A700 p-12 shadow-xs md:w-full md:p-5">
                    <div className="gap-[33px] mt-6 flex flex-col">
                        <div className="flex flex-col items-start gap-6">
                            <h3 className="size-lg heading ui text-xl font-bold !text-gray-600">Contact Information</h3>
                            <div className="h-px w-full self-stretch bg-gray-200"></div>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="gap-[25px] flex items-center">
                            <CiMail  />
                                <h4 className="size-s heading ui text-[17px] self-end font-semibold !text-gray-400_01">shubham.0202.in@mail.com</h4>
                            </div>
                            <div className="gap-[25px] flex items-center">
                            <FaEarthAfrica />
                                <h5 className="size-s heading ui text-[17px] self-start font-semibold !text-gray-400_01">www.</h5>
                            </div>
                            <div className="gap-[25px] flex items-start">
                            <FaLinkedin />
                                <h6 className="size-s heading ui  text-[17px] w-[89%] font-semibold !text-gray-400_01">Shubham Singh</h6>
                            </div>
                            <div className="gap-[25px] flex items-center">
                            <IoIosContact />
                                <h6 className="size-s heading ui text-[17px] font-semibold !text-gray-400_01">+91  7303298030</h6>
                            </div>
                        </div>
                    </div>
                    <div className="gap-[41px] mb-[25px] flex flex-col items-end">
                        <div className="mr-2 flex flex-col items-start gap-6 self-stretch md:mr-0">
                            <h5 className="size-lg heading ui text-xl font-bold !text-gray-600">Social Media</h5>
                            <div className="h-px w-full self-stretch bg-gray-200"></div>
                        </div>
                        <div className="gap-[19px] flex">
                            <button className="square size-sm button ui w-[47px] h-[47px] flex items-center justify-center">
                            <FaLinkedin className='scale-150'/>
                            </button>
                            <button className="square size-sm button ui w-[47px] h-[47px] flex items-center justify-center">
                            <FaGithub className='scale-150' />
                            </button>
                            <button className="square size-sm button ui w-[47px] h-[47px] flex items-center justify-center">
                            <FiInstagram className='scale-150' />
                            </button>
                            <button className="square size-sm button ui w-[47px] h-[47px] flex items-center justify-center">
                            <BsTwitterX  className='scale-150'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Contact;
