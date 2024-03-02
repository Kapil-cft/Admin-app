import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BrowserRouter, Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
function Main() {
    const [open,setOpen]=useState(true);
    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "user", link: "/", icon: FaUser },
        { name: "Message", link: "/", icon: RiMessage2Fill },
        { name: "Your Cart", link: "/", icon: FaCartShopping },
        { name: "Setting", link: "/", icon: IoIosSettings },
    ];
    console.log(open);
  return (
    <div className=" container flex">
      <aside className={`min-h-screen ${open ? "w-72" :"w-16"} text-gray-600 px-4 duration-300` }>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus.map((menu, i) => (
          
              <Link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font-medium p-2">
                <div>{React.createElement(menu?.icon, { size: 20 })}</div>
                <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}</h2>
              </Link>

          ))}
        </div>
      </aside>

      <main className="Main w-4/5 bg-purple-100">this is</main>
    </div>
  );
}

export default Main;
