import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className=" w-auto ">
    <div className=" max-w-screen-xl mx-auto px-8 py-8 text-center md:text-left">
      <h2 className=" text-2xl md:text-5xl uppercase text-indigo-900 font-bold">
        me
      </h2>
      <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-300  rounded-xl mt-4 py-9 px-5 ">
        <div className=" w-full md:w-1/2 h-full rounded-xl p-4">
          <h2 className="  font-bold text-2xl">Hello World!,</h2>
          <p>
            I&apos;m Krishnaraj ,I&apos;m a self taught developer who loves to
            design and create web applications. I love combining the world of
            logic and creative design to make eye-catching,accessible,and
            user-friendly websites and applications.
          </p>
          <div className="flex gap-10">
            <Link href="./Resume.pdf" >
              <div
                className=" group flex items-center justify-center my-8 bg-indigo-900 text-white
                             px-6 py-3 font-bold uppercase rounded-md tracking-wider"
              >
                Resume
                <span className=" -rotate-90 duration-100 ease-in group-hover:rotate-0">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
          </div>

          <div className="grid lg:grid-cols-5 gap-3">
            <div className=" lg:p-3 h-full ">
              <div className="flex items-center justify-between py-4 tracking-wider "></div>
            </div>
          </div>
        </div>

        {/* box*/}
        <div className=" w-full md:w-1/2 h-full rounded-xl p-4 bg-slate-900 text-white text-center ">
          <div className=" p-4 text-left">
            <p className="  py-3">Full Name: Krishnaraj B</p>
            <p className="  py-3"> DOB: 24/07/2001</p>
            <p className="  py-3">Email id : krishnarajb0942@gmail.com</p>
            <p className="  py-3">
              Phone:
              <a className="" href="tel: 7483683983" id="call">
                7483683983
              </a>
            </p>
            <p className="  py-3">
              Education : Bachelor of Computer Applications
            </p>
            <p className="  py-3">Location : Bangalore</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Me;
