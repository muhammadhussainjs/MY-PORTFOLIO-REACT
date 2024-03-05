import { useState } from "react";
import weather from "../assets/weather-app.png"
import blogging from "../assets/blogingapp.png"
import phone from "../assets/phoneapp.png"


const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
    
      <div id="portfolio" className="main-container  py-14 ">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className=" md:space-x-5 md:px-10 gap-12  items-center px-5 
        flex flex-wrap sm:flex-row  mt-12 justify-around" >
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl  service1 space-y-4"> 
        
          
            <img src={weather} alt="" className="rounded-xl w-60" />
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://muhammadhussainjs.github.io/WEATHER-APP/">visit website</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl   service1 space-y-4"> 
        
          
            <img src={blogging} alt="" className="rounded-xl w-60"/>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href=" https://muhammadhussainjs.github.io/Blogging-App/">visit website</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl   service1 space-y-4"> 
        
          
            <img src={phone} alt="" className="rounded-xl w-60" />
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://muhammadhussainjs.github.io/phone-APP/">visit website</a>
            </button>
          </div>
         
          
            
      </div>
      </div>
      
    </>
  );
};

export default Services;
