import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className=" w-full">
      <div className=" max-w-screen-xl mx-auto px-8 py-8 text-center md:text-left">
        <h2 className=" text-2xl md:text-5xl uppercase text-indigo-900 font-bold">
          contact
        </h2>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-300 bg-slate-900 rounded-xl mt-4 text-white">
          <div className=" w-full md:w-1/2 h-full rounded-xl p-4">
            <h2 className=" py-2 text-2xl">Connect with me</h2>
            <p>
              I&apos;m seeking out oppurtunities to collaborate with
              companies,agencies,individuals. I want to bring my collective
              design experience to the table where we can work together to solve
              real business-problems in a way that optimizes all of our
              respective experience and knowledge.
            </p>
            <p className="py-7">
              Feel free to reach out through <br />
              any platforms below
            </p>

            <div className="grid lg:grid-cols-5 gap-3">
              <div className=" lg:p-3 h-full ">
                <div className="flex items-center justify-between py-4 tracking-wider ">
                  <div className="  text-indigo-900 rounded-full  p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <a href="https://www.linkedin.com/in/krishnaraj-b-9240281b3/">
                      <FaLinkedinIn size={25} />
                    </a>
                  </div>
                  <div className=" ml-2 text-indigo-900 rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <a href="https://github.com/Krishnaraj7">
                      <FaGithub size={25} />
                    </a>
                  </div>
                  <div className=" ml-2 text-indigo-900 rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <a href="mailto:krishnarajb0942@gmail.com">
                      <GrMail size={25} />
                    </a>
                  </div>
                  <div className="  ml-2 text-indigo-900 rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <a href="tel:+91 7483683983">
                      <BsFillTelephoneFill size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form here */}
          <div className=" w-full md:w-1/2 h-full rounded-xl p-4">
            <div className=" p-4 text-left">
              <h2 className=" text-white font-bold">Let&apos;s Talk </h2>
              <form
                action="https://getform.io/f/9201b061-7202-428d-9753-19a3810b4c5a"
                method="POST"
              >
                <div className="grid md:grid-cols-1 gap-8 w-full py-2 text-black">
                  <input
                    className="border-2 p-3 rounded-xl"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                  />
                  <input
                    className="border-2 p-3 rounded-xl"
                    type="email"
                    name="name"
                    id=""
                    placeholder="Email"
                  />
                  <textarea
                    className=" border-2 p-3 rounded-xl"
                    name="message"
                    id=""
                    cols="2"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  className=" border-0 py-2 mt-3 font-bold rounded-md  px-6 ml-3 bg-indigo-900 text-white uppercase
         tracking-wider cursor-pointer hover:scale-105 duration-200 hover:bg-white hover:text-black hover:border-black  "
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
