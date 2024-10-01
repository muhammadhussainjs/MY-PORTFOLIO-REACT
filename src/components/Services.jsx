import { useState } from "react";
import weather from "../assets/weather-app.png"
import blogging from "../assets/blogingapp.png"
import phone from "../assets/phoneapp.png"
import react from "../assets/react.png"
import smit from '../assets/smit.png'
import careem from '../assets/careem.png'


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
           rounded-xl   service1 space-y-4"> 
        
          
            <img src={smit} alt="" className="rounded-xl w-60"/>
            <p className="text-xl text-blue-400">SMIT CLASSROOM <br />
            MERN STACK WEBSITE  </p>
            <button className="p-2  bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href=" https://smitclassroom.vercel.app/">visit website</a>
            </button>
            <button className="ml-4 p-2 bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://github.com/muhammadhussainjs/FINAL-HACKATHON">Github</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl    service1 space-y-4"> 




<img src={careem} alt="" className="rounded-xl w-60 h-28 "/>
            <p className="text-xl text-blue-400">CAREEM APP<br />
            REACT NATIVE </p>
            <button className="p-2  bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://drive.google.com/file/d/1Umc3N0V0AKr5iEm8n_EHbstFifRXsycj/view?usp=drivesdk">Play video</a>
            </button>
            <button className="ml-4 p-2 bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://github.com/muhammadhussainjs/REACT-NATIVE-CAREEM-APP">Github</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl    service1 space-y-4"> 
        
          
            <img src={blogging} alt="" className="rounded-xl w-60"/>
            <p className="text-xl text-blue-400">BLOGGING APP 
              <br /> JAVASCRIPT AND FIREBASE </p>
            <button className=" p-2  bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href=" https://muhammadhussainjs.github.io/Blogging-App/">visit website</a>
            </button>
            <button className="ml-4 p-2 bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://github.com/muhammadhussainjs/Blogging-App ">Github</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl   service1 space-y-4"> 
        
          
            <img src={react} alt="" className="rounded-xl w-60"/>
            <button className=" p-2 bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://ecommerceonreact2.web.app/">visit website</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl  service1 space-y-4"> 
        
          
            <img src={weather} alt="" className="rounded-xl w-60" />
            <button className=" p-2  bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://muhammadhussainjs.github.io/WEATHER-APP/">visit website</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg
           rounded-xl   service1 space-y-4"> 
        
          
            <img src={phone} alt="" className="rounded-xl w-60" />
            <button className=" p-2  bg-gray-300 hover:bg-gray-400 text-1xl rounded-full shadow-lg">
            <a href="https://muhammadhussainjs.github.io/phone-APP/">visit website</a>
            </button>
          </div>
         
          
            
      </div>
      </div>
      
    </>
  );
};

export default Services;
