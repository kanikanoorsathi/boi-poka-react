import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    const link = 
    <>
        <div className="lg:flex flex-wrap  lg:gap-8">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/readList'}><li>ReadList</li></Link>
            
        </div>
    </>
  return (
    <div className="sticky">
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {link}
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <a><button className="btn btn-success">Sing in</button></a>
            <a><button className="btn btn-info">Sing up</button></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
