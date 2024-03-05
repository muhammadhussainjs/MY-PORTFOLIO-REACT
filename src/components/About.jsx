import { useState } from "react";
import bannerImage from "../assets/profile-pic.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Mern Stack Developer",
    desc1: ` I am a MERN stack developer  eagerly seeking opportunities to embark
     as a new journey. Not lacking in skill, but rather, prepared with experience
      and a thirst for learning. Hoping to find the right opportunity to showcase my 
      talents and fulfill new aspirations.

    `,
    desc2: ` As a Pakistani, I'm a passionate MERN stack developer on the lookout 
    for job opportunities. Eager to leverage my skills and enthusiasm to contribute 
    effectively in a professional environment.
`
  });
  return (
    <>
      <div id="about" className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
         

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold break-words">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
