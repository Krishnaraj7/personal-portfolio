import Image from "next/image";
import React from "react";
import html from "../public/assets/skills/html.jpeg";
import css from "../public/assets/skills/css.jpeg";
import javascript from "../public/assets/skills/javascript.jpeg";
import bootstrap from "../public/assets/skills/bootstrap.jpg";
import react from "../public/assets/skills/react.jpeg";
import tailwind from "../public/assets/skills/tailwind.jpeg";
import nextjs from "../public/assets/skills/nextjs.jpg";
import nodejs from "../public/assets/skills/nodejs.png";
import mui from "../public/assets/skills/mui logo.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "ReactJS",
      src: react,
    },
    {
      id: 2,
      title: "NextJS",
      src: nextjs,
    },
    {
      id: 3,
      title: "NodeJS",
      src: nodejs,
    },
    {
      id: 4,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 5,
      title: "Material UI",
      src: mui,
    },
    {
      id: 6,
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      id: 7,
      title: "Bootstrap",
      src: bootstrap,
    },
    {
      id: 8,
      title: "CSS",
      src: css,
    },
    {
      id: 9,
      title: "HTML",
      src: html,
    },
  ];
  return (
    <div id="skills" className=" w-auto bg-slate-900">
      <div className=" max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className=" text-3xl font-bold md:text-5xl tracking-wider uppercase text-gray-50">
          Skills
        </h2>
        <p className=" py-4 max-w-lg text-gray-50">
          My main area of expertise is front end development.
          <br />
          HTMl,CSS,JS,building small and medium web apps with Reactjs , Nextjs
          Using Bootstrap and Tailwind CSS. Curretly learning and working on
          back-end technologies.
        </p>
        <div className=" grid lg:grid-cols-4 gap-8 ">
          {skills.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-col gap-10 lg:gap-0 items-center justify-between
                         p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50
                        "
            >
              <Image src={src} width="60" height="60" alt={title} />

              <h3 className=" font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
