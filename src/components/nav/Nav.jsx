import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { Tower } from './../../providers/AuthProvider';
import logo from "../../assets/images/logo.png";
import { FiUser } from "react-icons/fi";
// import { FaUserNurse } from "react-icons/fa";


const Nav = () => {

  const { user, logOut } = useContext(Tower);
  
  

  const handleLogout = () => {
    logOut()
  }

  const links = <>
    <li><NavLink className={({ isActive }) => isActive ? ' text-lg text-black px-3 py-2 font-medium hover:underline underline hover:transition-all' : 'hover:transition-all text-lg hover:underline px-3 py-2 font-medium '} to='/'>Home</NavLink></li>

    <li><NavLink className={({ isActive }) => isActive ? ' text-lg text-black px-3 py-2 font-medium hover:underline underline hover:transition-all' : 'hover:transition-all text-lg hover:underline px-3 py-2 font-medium '} to='/profile'>Update Profile</NavLink></li>

    <li><NavLink className={({ isActive }) => isActive ? ' text-lg text-black px-3 py-2 font-medium hover:underline underline hover:transition-all' : 'hover:transition-all text-lg hover:underline px-3 py-2 font-medium '} to='/userprofile'>User Profile</NavLink></li>
  </>


  return (
    <div className="flex items-center rounded-lg px-5">
      <div className="navbar-start items-center lg:justify-start justify-between flex w-full md:w-[50%]">
        <div className="dropdown">

          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-lg w-40 bg-slate-200 gap-2 nav">
            {links}
          </ul>
        </div>

        <Link to={'/'} className=" text-4xl text-[#131313] font-bold"><img className="w-[100px] h-[40px] lg:h-[50px]" src={logo} alt="" /></Link>
        
      

        {
          user ?
          <div className="md:hidden dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className=" z-[1] p-2 shadow border text-center dropdown-content rounded-lg w-20">
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
            :
            <Link to={'/login'} className="md:hidden  font-semibold flex items-center gap-2"><span><FiUser size={0}></FiUser></span><span>Login</span></Link>
        }

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-3 text-sm nav">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-4 text-sm hidden md:flex">

        {
          user ?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2">
                  <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className=" z-[1] p-2 shadow border text-center dropdown-content rounded-lg w-20">
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
            :
            <Link to={'/login'} className=" text-lg font-semibold flex items-center gap-2"><span><FiUser size={0}></FiUser></span><span>Login</span></Link>
        }

        
      </div>
    </div>
  )
};

export default Nav;