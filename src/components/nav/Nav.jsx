import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Tower } from "./../../providers/AuthProvider";
// import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";
import { FiUser } from "react-icons/fi";
import { PiSignOutFill } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Nav = () => {
  const { user, logOut } = useContext(Tower);
  const [isHovering, setIsHovering] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const links = (
    <>
      <li data-aos="fade-left" data-aos-duration="1000">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 text-[#fff] bg-[#153b47] md:px-3 md:py-2 md:font-medium hover:transition-all border rounded-full border-[#153b47]"
              : " hover:transition-all md:text-lg text-[12px] md:px-3 md:py-2 p-1 md:font-medium text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li data-aos="fade-up" data-aos-duration="1000">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 text-[#fff] bg-[#153b47] md:px-3 md:py-2 md:font-medium hover:transition-all border rounded-full border-[#153b47]"
              : "hover:transition-all md:text-lg md:px-3 md:py-2 text-[12px] p-1  md:font-medium  text-white"
          }
          to="/profile"
        >
          Update Profile
        </NavLink>
      </li>

      <li data-aos="fade-right" data-aos-duration="1000">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 text-[#fff] bg-[#153b47] md:px-3 md:py-2 md:font-medium hover:transition-all border rounded-full border-[#153b47]"
              : "hover:transition-all md:text-lg md:px-3 md:py-2  text-[12px] p-1 md:font-medium  text-white"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li data-aos="fade-right" data-aos-duration="1000">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 text-[#fff] bg-[#153b47] md:px-3 md:py-2 md:font-medium hover:transition-all border rounded-full border-[#153b47]"
              : "hover:transition-all md:text-lg md:px-3 md:py-2  text-[12px] p-1 md:font-medium  text-white"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
      <div className=" flex items-center p-3 md:p-5 bg-[#000f13] sticky top-0 z-10 shadow-lg">
        <div className="navbar-start items-center lg:justify-start justify-between flex w-full md:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="backdrop-blur-md rounded-lg bg-[#ffffff47] border dropdown-content mt-3 p-1 w-40 gap-2 nav"
            >
              {links}
            </ul>
          </div>

          <Link
            data-aos="fade-right"
            to={"/"}
            className=" text-4xl text-[#131313] font-bold"
          >
            <h1>
              <span className="lg:text-4xl font-extrabold text-[#29917e]">
                New
              </span>
              <span className="text-sm font-bold text-[#fff]">Home</span>
            </h1>
          </Link>

          {user ? (
            <div
              data-aos="fade-left"
              className="md:hidden dropdown dropdown-end flex items-center gap-2"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2">
                  {user?.photoURL ? (
                    <img
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      alt=""
                      src={user.photoURL}
                    />
                  ) : (
                    <img
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      alt=""
                      src={avatar}
                    />
                  )}
                </div>
              </div>

              <ul className=" flex flex-col items-center text-center">
                <li className="absolute top-12 right-[15px] w-full text-[10px] font-semibold">
                  {isHovering ? user.displayName : null}
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <PiSignOutFill color="#153b47" size={20}></PiSignOutFill>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="md:hidden  font-semibold flex items-center gap-2"
            >
              <span>
                <FiUser size={0}></FiUser>
              </span>
              <span>Login</span>
            </Link>
          )}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-3 text-sm nav">{links}</ul>
        </div>

        <div className="navbar-end gap-4 text-sm hidden md:flex ">
          {user ? (
            <div
              data-aos="fade-left"
              className="dropdown dropdown-end flex items-center gap-2"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-10 rounded-full border-2"
                >
                  {user?.photoURL ? (
                    <img
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      alt=""
                      src={user.photoURL}
                    />
                  ) : (
                    <img
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      alt=""
                      src={avatar}
                    />
                  )}
                </div>
              </div>

              <ul
                data-aos="zoom-in"
                className="p-2 flex flex-col items-center bg-[#153b47] hover:bg-[#2f6b7e] duration-300 text-center font-bold text-white rounded-full"
              >
                <li className="absolute text-gray-600 top-[40px] right-[33px] w-[150px] ">
                  {isHovering ? user.displayName : null}
                </li>
                <li>
                  <button className="" onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className=" text-lg font-semibold flex items-center gap-2"
            >
              <span>
                <FiUser color="#153b47" size={25}></FiUser>
              </span>
              <span className="px-3 py-1 rounded-full text-white bg-[#153b47]">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
  );
};

export default Nav;
