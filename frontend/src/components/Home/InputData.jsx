import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      <div
        className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-customDarkBrown h-[79vh] p-6 rounded-xl ">
          <div className="text-xl flex justify-end text-customYellow transition-transform duration-300 transform hover:scale-95">
            <button onClick={() => setInputDiv("hidden")}>
              <IoCloseOutline />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 w-full rounded text-black bg-customYellow my-3.5"
          />
          <textarea
            name="desc"
            cols="30"
            rows="9"
            placeholder="Description..."
            className="px-3 py-2 mt-4 w-full rounded text-black bg-customYellow"
          ></textarea>

          <button className="px-3 py-2 mt-3 w-2/6  font-semibold text-white text-lg bg-customLightBrown rounded-3xl hover:bg-customBrown transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
