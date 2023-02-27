import Image from "next/image";
import React from "react";
import photo from "../public/newpic.png";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className=" max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className=" w-60 h-60 mx-auto overflow-hidden rounded-full">
          <Image src={photo} alt="me" />
        </div>
        <h1 className=" capitalize font-bold text-indigo-900 text-7xl">
          front end developer
        </h1>
        <p className=" text-gray-700 text-xl max-w-sm mx-auto">
          I love to work on web applications using technologies like &nbsp;
          <span className=" text-blue-900">
             ReactJS, Tailwind,Bootstrap,Next JS.
          </span>
          Currently,I&apos;m focused on building responsive front end web
          applications while learning back-end technologies
        </p>
      </div>
    </div>
  );
};

export default HomePage;
