import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 bg-customBrown rounded-3xl shadow-custom">
        <div className="flex items-center justify-center text-xl font-semibold">
          Sign In
        </div>
        <input
          type="username"
          placeholder="Username"
          className="bg-customYellow px-3 py-2 rounded-3xl text-gray-800 my-4 w-full"
          name="username"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-customYellow px-3 py-2 rounded-3xl text-gray-800 my-4 w-full"
          name="password"
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-customRed px-4 py-2 mt-4 rounded-3xl text-lg font-semibold">
            Login
          </button>
          <Link
            to="/signup"
            className="text-gray-400 hover:text-customYellow font-light text-sm mt-5"
          >
            Not having an account? Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
