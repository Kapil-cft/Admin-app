import { useState } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export default function Carousel({ slides }) {
    const [current,setCurrent]=useState();

    let leftClick=()=>{
if(current===0) setCurrent(slides.length-1);
else setCurrent(current-1);
    }
    let rightClick =()=>{
     if ( current=== slides.length-1) {
       setCurrent(0);  
     }else{
      setCurrent(current+1)
     }
    }
  return (
    <div className="w-[40%] overflow-hidden  relative m-auto">
      <div className="flex transition ease-out duration-75" style={{transform:`translateX(-${current*100}%)`}}>
        {slides.map((imgs, i) => (
          <img src={imgs} key={i} alt="images of " />
        ))}
      </div>
      <div className="absolute top-0  flex justify-between items-center z-10">
        <button>
          <FaArrowAltCircleLeft onClick={leftClick} />
        </button>
        <button>
          <FaArrowCircleRight  onClick={rightClick}/>
        </button>
      </div>
    </div>
  );
}
