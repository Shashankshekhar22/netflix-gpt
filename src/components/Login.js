import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="Netflix"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black align-middle m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700 font-bold text-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 font-bold text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full full bg-gray-700 font-bold text-lg"
        />
        <button className="p-2 my-4 bg-red-700 w-full text-lg rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-lg py-4 text-gray-500">
            {" "}
            {!isSignInForm ? "Already Registered?" : "New to Netflix?"}{" "}
          </p>
          <span
            className="cursor-pointer hover:underline p-4"
            onClick={toggleSignInform}
          >
            {isSignInForm ? "Sign up Now" : "Sign In Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
