import React from "react";

const Cards = () => {
  const data = [
    {
      title: "The Best Coding Chanel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      title: "Assignment",
      desc: "Lorem ipsum dolor sit amet, consectettetur adipiscing elitetur adipiscing eliur a",
    },
    {
      title: "Homework",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni",
    },
    {
      title: "Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
    },
  ];
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
            <div className="mt-auto w-full">
              <button className="bg-customRed text-white p-2 rounded-xl ">
                In Complete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cards;
