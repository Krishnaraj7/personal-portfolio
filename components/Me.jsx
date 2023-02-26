import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className=" w-auto ">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className=" col-span-2">
            <h2 className=" text-3xl font-bold md:text-5xl tracking-wider uppercase text-indigo-900 py-4">
              me
            </h2>
            <p>
              <span className=" font-bold text-2xl">Hello World!,</span><br />
              I&apos;m
              Krishnaraj ,I&apos;m a self taught developer who loves to design and
              create web applications. I love combining the world of logic and
              creative design to make eye-catching,accessible,and user-friendly
              websites and applications.
            </p>
            <div className="flex gap-10">
              <Link href="./Krishnaraj - CV-1.pdf" download={true}>
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
          </div>

          <div className=" max-w-full max-h-full bg-slate-900 rounded-xl px-8 py-8 tracking-wider font-bold">
            <p className=" text-white py-3">Full Name: Krishnaraj B</p>
            <p className=" text-white py-3"> DOB: 24/07/2001</p>
            <p className=" text-white py-3">
              Email id : krishnarajb0942@gmail.com
            </p>
            <p className=" text-white py-3">
              Phone:
              <a className="" href="tel: 7483683983" id="call">
                
                 7483683983
              </a>
            </p>
            <p className=" text-white py-3">
              Education : Bachelor of Computer Applications
            </p>
            <p className=" text-white py-3">Location : Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
