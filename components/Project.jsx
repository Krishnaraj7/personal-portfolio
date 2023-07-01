import React from "react";
import myflix from "../public/assets/myflix.png";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: myflix,
      title: "Next js MovieApp",
      url: "https://myflix-stream.vercel.app/",
      about:
        "     A movie app/website that provides an immersive and user-friendly experience for discovering vast collection of movies and series. Utilizing technologies such as Next.js, React.js, and Tailwind CSS, along with the TMDB API website.",
    },
   
    
   
  ];
  return (
    <>
      <div id="project" className=" w-auto">
        <div className=" max-w-screen-xl mx-auto px-8 py-7 text-center md:text-left">
          <h2 className=" text-3xl font-bold md:text-5xl tracking-wider uppercase text-indigo-900">
            Project
          </h2>
          <div className={`max-w-3xl mx-auto grid ${projects.length === 1 ? 'justify-center' : 'md:grid-cols-2'} gap-8 mt-auto mb-auto`}>
          {projects.map(({ id, image, title, url, about }) => (
  <div key={id}>
    <Link href={url}>
      <div className="cursor-pointer group shadow-md shadow-gray-600 rounded-md overflow-hidden bg-slate-900">
        <Image
          src={image}
          className="rounded-md duration-200 hover:scale-105"
        />
        <h2 className="text-center text-base font-semibold capitalize my-4 group-hover:underline underline-offset-4 text-white">
          {title}
        </h2>
      </div>
    </Link>
    <p className="py-4   text-sm  rounded-md">
      {about}
    </p>
  </div>
))}
</div>
        </div>
      </div>
    </>
  );
};

export default Project;
