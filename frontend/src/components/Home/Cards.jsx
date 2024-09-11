import React from "react";

const Cards = () => {
  const data = [
    {
      title: "The Best Coding Chanel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      title: "Assignment",
      desc: "Lorem ipsum dolor sit amet, consectetur a",
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
    <div className="grid grid-cols-4 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div key={i} className=" bg-gray-800 rounded-xl p-4">
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="break-words text-gray-300">{items.desc}</p>
          </div>
        ))}
    </div>
  );
};
export default Cards;
