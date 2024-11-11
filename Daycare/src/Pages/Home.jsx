import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 pt-20">
      <div className="text-center mb-10">
        <p className="font-caveat font-semibold text-6xl">
          Find Quality Child Care <br /> that you can <span className="text-blue-400">trust!</span>
        </p>
      </div>
      <div className="items-center justify-start text-gray-400">
      <p>Discover Top Notch Daycare Providers that prioritize your child's safety</p>
      </div>

      <div className="flex space-x-4 mt-10">
        <a
          href="https://play.google.com/store/apps/details?id=com.example.mycare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          <IoLogoGooglePlaystore className="mr-2 size-8" />
        Get it On <br />Google Play
        </a>
        <a
          href="https://apps.apple.com/us/app/mycare/id123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          <IoLogoApple className="mr-2 size-8" />
          Find it On <br />App Store
        </a>
      </div>


     
    </div>
  );
};

export default Home;