import React from "react";

const InputData = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full"></div>
      <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
        <div className="w-2/6 bg-customDarkBrown h-[80vh] p-6 rounded-xl">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 w-full rounded text-black bg-customYellow"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="px-3 py-2 mt-4 w-full rounded text-black bg-customYellow"
          ></textarea>
        </div>
      </div>
      ;
    </>
  );
};

export default InputData;
