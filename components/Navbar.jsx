import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "me",
    },

    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div
        className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ${
          pageScroll && " shadow-xl"
        }`}
      >
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
          <Link href="/#home">
            <h1
              className="text-3xl lg:text-4xl font-bold uppercase text-slate-800
                         hover:scale-105 ease-out duration-300 tracking-wider"
            >
              krishnaraj
            </h1>
          </Link>
          <div>
            <ul className="hidden md:flex">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    className="uppercase ml-10 text-sm
                                 cursor-pointer duration-200 ease-out 
                                 hover:scale-105 tracking-wider font-bold"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            {!navigation && (
              <div className="md:hidden" onClick={() => setNavigation(true)}>
                <FaBars size={30} />
              </div>
            )}
          </div>
        </div>

        <div
          className={
            navigation
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
              : ""
          }
        >
          <div
            className={
              navigation
                ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-gray-800 to-gray-700 text-white p-10 ease-in duration-500"
                : "fixed top-0 left-[-100%] p-10 ease-in h-full duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/#home">
                  <h2
                    onClick={() => setNavigation(false)}
                    className="uppercase font-bold text-2xl "
                  >
                    Krishnaraj
                  </h2>
                </Link>
                <div
                  onClick={() => setNavigation(false)}
                  className="p-3 cursor-pointer"
                >
                  <FaTimes size={20} />
                </div>
              </div>
            </div>
            <div className="mt-24 flex flex-col h-fit gap-20">
              <ul className="uppercase">
                {links.map(({ id, link }) => (
                  <Link key={id} href={`/#${link}`}>
                    <li
                      onClick={() => setNavigation(false)}
                      className="py-4 text-2xl tracking-wider cursor-pointer"
                    >
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
