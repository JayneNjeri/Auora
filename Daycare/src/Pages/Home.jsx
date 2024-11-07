import { useState } from "react";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

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
      <div className="relative pt-5">
        <input
          type="text"
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "w-64" : "w-32"
          } p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search for DayCare Providers"
        />
      </div>
    </div>
  );
};

export default Home;