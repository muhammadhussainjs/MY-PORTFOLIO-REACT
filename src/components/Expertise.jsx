import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div id="skills" className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-3">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
              Passionate MERN Stack Developer | Enthusiast for these technologies"
              </p>
              <p>
              Crafting digital experiences with precision and passion as a dedicated MERN Stack
               Developer. Driven by a relentless enthusiasm for these transformative technologies,
               I strive to innovate and elevate with every project."
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                JAVASCRIPT
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
               CSS
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                FIREBASE
              </p>
             
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MONGODB
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                NODEJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                EXPRESSJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                GITHUB
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                GIT
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
             
              
             
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MATERIAL UI
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                BOOT STRAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
