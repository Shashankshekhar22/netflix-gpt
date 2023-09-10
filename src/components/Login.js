import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInSignUpButtonClick = () => {
    const validationMsg = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMsg);
    console.log(email);
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
      <form
        className="w-3/12 absolute p-12 bg-black align-middle m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700 font-bold text-lg"
            type="text"
            placeholder="Name"
            ref={name}
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 font-bold text-lg"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-4 my-4 w-full full bg-gray-700 font-bold text-lg"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-lg font-bold text-red-500">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full text-lg rounded-lg"
          onClick={handleSignInSignUpButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-lg py-4 text-gray-500">
            {!isSignInForm ? "Already Registered?" : "New to Netflix?"}
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
