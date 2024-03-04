import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import mnt1 from "../inames/mnt1.avif";
import mnt2 from "../inames/mnt2.avif";
import mnt3 from "../inames/mnt3.webp";

import Carousel from "./carsol.component";
function Main() {
  const slides = [mnt1, mnt2, mnt3];
  const [open, setOpen] = useState(true);
  // let [current,setCurrent] =useState();
  // let previouSlide =() =>{
  //   if (current ===0 ) {
  //     setCurrent(slides.length-1)
  //   }else {
  //     setCurrent(current-1)
  //   }
  // }

  // let NextSlide =() =>{
  //   if (!current ===slides.length-1 ) {
  //     setCurrent(0)
  //   }else {
  //     setCurrent(current+1)
  //   }
  // }
  const menus = [
    { name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "user", link: "/user", icon: FaUser },
    { name: "Message", link: "/", icon: RiMessage2Fill },
    { name: "Your Cart", link: "/", icon: FaCartShopping },
    { name: "Setting", link: "/", icon: IoIosSettings },
  ];
  console.log(open);

  return (
    <div className="container flex">
      <aside
        className={`min-h-screen ${
          open ? "w-72 " : "w-16"
        } text-gray-600 px-4 duration-300 bg-slate-100`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className="flex items-center text-sm gap-3.5 font-medium p-2"
            >
              <div>{React.createElement(menu?.icon, { size: 20 })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </aside>

      <main className="Main  m-auto pt-11   ">
        <h4>this is main container</h4>
       <Carousel slides={slides}/>
      </main>
    </div>
  );
}

export default Main;
