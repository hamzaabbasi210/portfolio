import React from "react";
import "./About.css";
import { MdTask } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

function Card() {
  return (
    <>
      <div className="about-card-item bg-[#242D3A] w-[] h-[rem]  rounded-md py-6 flex gap-2 justify-cener flex-col   ">
        <MdTask className="font-bold text-xl text-[#0EA4EC]" />
        <p className="text-sm">40+</p>
        <h4 className="font-bold">project created</h4>
      </div>
      <div className="about-card-item bg-[#242D3A] w-[3] h-[rem]  rounded-md py-6 flex gap-2 justify-cener flex-col  ">
        <GiAchievement className="font-bold text-xl text-[#0EA4EC]" />
        <p className="text-sm">2+ years</p>
        <h4 className="font-bold">development experience</h4>
      </div>
      <div className="about-card-item bg-[#242D3A] w-[%] h-[rem]  rounded-md py-6 flex gap-2 justify-cener flex-col  ">
        <MdTask className="font-bold text-xl text-[#0EA4EC] " />
        <p className="text-sm">40+</p>
        <h4 className="font-bold">project created</h4>
      </div>
    </>
  );
}

export default Card;
