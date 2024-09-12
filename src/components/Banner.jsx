import bannerImage from "../assets/profile-pic.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js"
import { useRef, useEffect , useState } from "react";
import  Resume from "../assets/MuhammadHussainResume.pdf"

const Banner = () => {
  const el = useRef(null);
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: Resume,
  });

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Mern Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home"
      style={{ backgroundImage: `url(${bannerBackground})`, backgroundSize: "cover" }}
      className="main-container flex flex-col-reverse md:flex-row items-center justify-center pt-24 md:justify-between py-8 px-4 md:px-12"
    >
      {/* Content Column */}
      <div className="flex flex-col justify-center items-center md:w-1/2 text-center md:text-left text-white">
        <h3 className="text-lg md:text-xl mt-6 font-semibold mb-2">Hi, I am</h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Muhammad Hussain</h1>
        <h2 className="text-lg md:text-2xl mb-4">
          I am <span className="font-bold underline" ref={el}></span>
        </h2>
        <p className="mb-4">
          As a Pakistani, I'm a passionate MERN stack developer on the lookout for job opportunities. Eager to leverage my skills and enthusiasm to contribute effectively in a professional environment.
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/muhammadhussainjs/"
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/muhammadhussainjs"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <a
          href="/contact"
          className="text-lg px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
        >
          Contact Me = 03312912721 (WhatsApp)
        </a>
        <div className=" mt-6">
          <a
            href={actionButton.link}
            className="p-3 bg-orange-500 shadow rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>

      </div>

      {/* Image Column */}
      <div className=" w-full md:w-1/2 pt-2  flex justify-center md:justify-end items-center">
        <div className="h-64">
          <img
            className="rounded-full filter shadow-lg brightness-95 contrast-125 w-64 h-64 object-cover"
            src={bannerImage}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
