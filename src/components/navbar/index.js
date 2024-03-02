import React from 'react'
import profile from "../inames/profile.jpeg"
const NavBarstick = () => {
  return (
    <div>
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
    <div className="flex items-center">

      <h1 className="text-xl font-bold">Admin Panal</h1>
    </div>
   
    <ul className="flex space-x-8 ">
      <li className="text-white">
          About             
      </li>
      <li className="text-white">
              Contact
      </li>
      <li className="text-white">
          Help
      </li>
    </ul>

    <div className="flex items-center">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src={profile}
        alt="this is profile"
      />
    </div>
  </nav>
    </div>
  )
}

export default NavBarstick