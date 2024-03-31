import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Navbar() {
  const us = localStorage.getItem('user');
  const user = JSON.parse(us);
  return (
    <>
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav class="mt-6 relative max-w-7xl w-full  mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto " aria-label="Global">
    <div class="flex items-center justify-between">
      <Link class="flex-none text-xl font-semibold text-white" to="/" aria-label="Brand">Collab.io</Link>
      <div class="md:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white  transition-all text-sm  border-gray-700 hover:text-white " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
        <Link class="font-medium text-blue-600 md:py-6 " to='/' aria-current="page">Home</Link>
        <Link class="font-medium text-gray-500 hover:text-gray-400 md:py-6 " to='/Rankings'>Rankings</Link>
        <Link class="font-medium text-gray-500 hover:text-gray-400 md:py-6 " to='/pricing' >Pricing</Link>
        <Link class="font-medium text-gray-500 hover:text-gray-400 md:py-6 " to='/projects' >Projects</Link>
        <Link class="font-medium text-gray-500 hover:text-gray-400 md:py-6 " to='/Blog' >Blog</Link>

        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
          <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium ">
            Dropdown
            <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </button>

          <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2   md: border  border-gray-700  divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
            <Link to='/About' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300">
              About
            </Link>
            <div class="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
              {/* <button type="button" class="flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300">
                Sub Menu
                <svg class="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </button> */}

              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2   md: border  border-gray-700  divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                <Link to='/about' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300">
                  About
                </Link>
                <Link to='/downloads' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300" >
                  Downloads
                </Link>
                <Link to='/EditProfile' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300" >
                  Edit Profile
                </Link>
              </div>
            </div>

            <Link to='/downloads' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300">
              Downloads
            </Link>
            <Link to='/EditProfile' class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  text-gray-400  hover:bg-gray-700  hover:text-gray-300">
                Edit Profile
            </Link>
          </div>
        </div>
        
        {user ? (<Link to={`/${user.tt}/${user._doc.id_p}`}><div className="text-white hover:text-blue-500">{user._doc.name}</div></Link>) : (<Link to='/login' class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6  border-gray-700  text-gray-400  hover:text-blue-500" >
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          Log in
        </Link>)}
        {
          user ? (<button className="text-blue-600"
          onClick={() => {
            localStorage.removeItem('user');
            window.location.reload();
          }}
        >
          logout
        </button>) : (<></>)
        }
        
      </div>
    </div>
  </nav>
</header>
</>
  )
}

export default Navbar