/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img src="https://www.istepup.in/images/logo.jpg" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-5 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  Courses
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  Placement
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  blog
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  About us
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                >
                  Contact us
                </a>
              </li>
              <li className="flex items-center">
                <button
                  className=" text-black font-bold ms-3 mt-3  px-6 py-4 rounded-lg outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                  type="button"
                  style={{ backgroundColor: "#3057EF" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
              <li className="flex items-center">
                <button
                  className=" text-black font-bold ms-5 mt-3  px-6 py-4 rounded outline-none   uppercase text-sm    hover:shadow-lg ease-linear  duration-150"
                  type="button"
                  style={{ backgroundColor: "#3057EF", marginRight: "px" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> E-learning
                </button>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
