import React from "react";

const App = () => {
  return (
    <div className="main bg-[#dfe3ee] text-[#1c1e21] flex flex-col sm:flex-col xs:flex-col  lg:flex-row md:flex-row  justify-center items-center h-[100vh] w-[100%]">
      <div className="left  sm:mb-8 xs:mb-8 mb-8">
        <h1 className="text-blue-600 lg:ml-12 text-[3.4rem] sm:ml-8 xs:ml-8 sm:text-[3.2rem] xs:text-[3rem] md:ml-8 lg:text-[4rem] md:text-[2rem] font-bold">facebook</h1>
        <h3 className="font-bold font-mono lg:text-[1.6rem] text-[1.1rem] md:text-[1rem] sm:text-[1.4rem] xs:text-[1.2rem]">
          Facebook helps you connect and share <br />
          with the people in your life.
        </h3>
      </div>
      <div className="right bg-white lg:w-[400px] w-[300px] h-[300px] md:w-[300px] sm:w-[300px] rounded-2xl xs:w-[300px] sm:h-[290px] xs:h-[290px]  lg:h-[380px] md:h-[310px] md:ml-[8rem] lg:ml-[10rem] flex flex-col">
        <input
          type="text"
          placeholder="Enter name or phone number"
          className="border-2 p-3 mx-4 mt-6 lg:p-4 sm:p-2 xs:p-2 xs:mx-4 sm:mx-4 sm:mt-4 xs:mt-4 lg:mt-8 lg:mx-6 md:p-3 md:mt-5 md:mx-4 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 lg:p-4 p-3 mx-4 mt-2 sm:p-2 xs:p-2 sm:mx-4 xs:mx-4 sm:mt-2 xs:mt-2 lg:mt-2 lg:mx-6 md:p-3 md:mt-5 md:mx-4 rounded-md"
        />
        <button className="bg-blue-500 mx-4 p-3 mt-3 sm:mx-5 xs:mx-5 sm:mt-4 xs:mt-4 sm:p-3 xs:p-3 lg:mx-8 md:mx-5 lg:mt-3 md:mt-2 lg:p-3 md:p-2 rounded-xl text-white font-bold lg:text-[1.2rem] md:[1rem]">
          Log In
        </button>
        <span className="text-blue-600 text-center mt-2 hover:underline">
          Forgotten password?
        </span>
        <hr className="mt-3" />
        <button className="bg-green-500 mt-3 mx-4 p-2 sm:mt-2 xs:mt-2 sm:mx-5 xs:mx-5 sm:p-2 xs:p-2 lg:mt-4 md:mt-2 lg:mx-12 md:mx-8 rounded-xl lg:p-4 md:p-3 text-white font-semibold lg:text-[1.1rem] md:text-[0.7rem]">
          Create new acoount
        </button>
      </div>
    </div>
  );
};

export default App;
