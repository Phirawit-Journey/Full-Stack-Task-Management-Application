import React, { useState } from "react";
import Cards from "../components/Home/Cards";

import { MdOutlineLibraryAdd } from "react-icons/md";
import InputData from "../components/Home/InputData";

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <MdOutlineLibraryAdd className="text-3xl text-gray-400 hover:text-gray-50 transition-all duration-300" />
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv} />
      </div>
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  );
};

export default AllTasks;
