import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Tower } from "./../../providers/AuthProvider";
import logo from "../../assets/images/logo.png";
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
      <li className="hover:-translate-y-2 hover:ease-in duration-300">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 border-b-2 border-cyan-500 text-[#1f6b69] md:font-bold"
              : "text-[#1f6b69] md:text-lg text-[12px] p-1 md:font-bold hover:text-[#5fd1cd] hover:ease-in duration-300"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="hover:-translate-y-2 hover:ease-in duration-300 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 border-b-2 border-cyan-500 text-[#1f6b69] md:font-bold"
              : "text-[#1f6b69] md:text-lg text-[12px] p-1 md:font-bold hover:text-[#5fd1cd] hover:ease-in duration-300"
          }
          to="/profile"
        >
          Update Profile
        </NavLink>
      </li>

      <li className="hover:-translate-y-2 hover:ease-in duration-300">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 border-b-2 border-cyan-500 text-[#1f6b69] md:font-bold "
              : "text-[#1f6b69] md:text-lg text-[12px] p-1 md:font-bold hover:text-[#5fd1cd] hover:ease-in duration-300"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li className="hover:-translate-y-2 hover:ease-in duration-300">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-lg text-[12px] p-1 border-b-2 border-cyan-500 text-[#1f6b69] md:font-bold "
              : "text-[#1f6b69] md:text-lg text-[12px] p-1 md:font-bold hover:text-[#5fd1cd] hover:ease-in duration-300"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" flex items-center p-3 md:p-5 sticky top-0  z-10 shadow-lg bg-slate-100">
      <div className="navbar-start items-center lg:justify-start justify-between flex w-full md:w-[50%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 0.5"
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
            className="md:backdrop-blur-md backdrop-blur-md bg-[#ffffff47] border dropdown-content md:mt-7 mt-3 p-1 space-y-2 w-screen md:w-[99vw] ml-[-15px] gap-2 nav"
          >
            {links}
          </ul>
        </div>

        <Link
          to={"/"}
          className=" text-4xl text-[#131313] font-bold">
          <img className="h-[40px]" src={logo} alt="" />
        </Link>

        {
          user ?
            <div className="md:hidden dropdown dropdown-end flex items-center gap-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full  border-2">
                  {user?.photoURL ? <img onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} alt="" src={user.photoURL} /> : <img alt="" src={avatar} />}
                   
                </div>
              </div>

              <ul className=" flex flex-col items-center text-center">
                <li className="absolute top-[42px] right-[15px] w-full text-[10px] font-semibold">
                  {isHovering ? user.displayName : null}
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <PiSignOutFill color="#153b47" size={20}></PiSignOutFill>
                  </button>
                </li>
              </ul>
            </div>
            :
            <Link to={"/login"} className="md:hidden  font-semibold flex items-center gap-2">
              <span> <FiUser size={0}></FiUser></span><span>Login</span>
            </Link>
        }
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-3 text-sm nav space-x-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-4 text-sm hidden md:flex ">
        {user ? (
          <div

            className="dropdown dropdown-end flex items-center gap-2"
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
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
                    alt=""
                    src={avatar}
                  />
                )}
              </div>
            </div>

            <ul

              className="p-2 flex flex-col items-center bg-[#1f6b69] hover:bg-[#1f6b694a] hover:text-[#1f6b69] hover:transition-all text-white hover:bg-[#2f6b7e duration-300 text-center font-bold rounded-lg"
            >
              <li className="absolute text-gray-600 top-[45px] right-[30px] w-[150px] ">
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
            <span className="px-3 py-1  0.5 bg-slate-50">
              Login
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
