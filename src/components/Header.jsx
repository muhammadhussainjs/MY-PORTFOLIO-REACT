import React, { useEffect } from "react";
import { useState } from "react";


const Header = () => {
  const [brandName, setBrandName] = useState("Muhammad Hussain");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Homes",
      link: "#home",
      id: 1,
    },
    {
      title: "About",
      link: "#about",
      id: 2,
    },
    {
      title: "Projects",
      link: "#portfolio",
      id: 4,
    },
    {
      title: "Skills",
      link: "#skills",
      id: 3,
    },
   
  ]);
 

  
  const handleClick = (link) => {
    const element = document.querySelector(link);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (min-width: 450px) {
          .headerButton {
            padding-left: 34px;
            padding-right: 34px;
          }
        }

        @media (min-width: 500px) {
          .headerButton {
            padding-left: 60px;
            padding-right: 60px;
          }
        }
        
        `}</style>
         <div
 
        className="h-26 sm:h-20 pr-8 justify-center z-50  border main flex flex-wrap  sm:justify-between    items-center sm:px-16 bg-gray-100 fixed w-full top-0  headerButton">
        <div className="flex flex-wrap   gap-0 justify-center items-center px-0">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl sm:justify-center font-bold">{brandName}</h1>
        </div>

       
</div>

        <div className="flex gap-2 sm:gap-8">

        <div className="space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} onClick={()=>handleClick(link.link)} className="hover:text-orange-600 transition duration-500 cursor-pointer">
              {link.title}
            </a>
          ))}
        </div>

        
</div>
       
      </div>
    </>
  );
};

export default Header;