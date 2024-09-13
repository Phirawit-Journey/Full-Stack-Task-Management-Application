import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";

const Cards = ({ home, setInputDiv }) => {
  const data = [
    {
      title: "The Best Coding Chanel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      status: "In Complete",
    },
    {
      title: "Assignment",
      desc: "Lorem ipsum dolor sit amet, consectettetur adipiscing elitetur adipiscing eliur a",
      status: "Complete",
    },
    {
      title: "Homework",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni",
      status: "In Complete",
    },
    {
      title: "Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
      status: "In Complete",
    },
  ];
  const [ImportantButton, setImportantButton] = useState("Incomplete");
  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {data &&
        data.map((items, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-customBrown rounded-2xl p-4 shadow-custom transition-transform duration-300 transform hover:scale-105 hover:shadow-hover"
          >
            <div className="flex-grow">
              <h3 className="text-xl text-white font-semibold">
                {items.title}
              </h3>
              <p className="break-words text-white my-2">{items.desc}</p>
            </div>
            <div className="mt-auto w-full flex items-center">
              <button
                className={`${
                  items.status === "In Complete"
                    ? "bg-customRed"
                    : "bg-green-600"
                } text-white p-2 rounded-xl w-3/6`}
              >
                {items.status}
              </button>
              <div className="text-white  p-2 w-3/6 text-lg flex justify-around">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <CiEdit />
                </button>
                <button>
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center text-gray-200 bg-customBrown rounded-2xl p-4 shadow-custom transition-transform duration-300 transform hover:scale-105 hover:shadow-hover hover:cursor-pointer"
          onClick={() => setInputDiv("fixed")}
        >
          <MdOutlineLibraryAdd className="text-2xl" />
          <h3 className="text-2xl mt-2  font-semibold">Add Task</h3>
        </button>
      )}
    </div>
  );
};
export default Cards;
