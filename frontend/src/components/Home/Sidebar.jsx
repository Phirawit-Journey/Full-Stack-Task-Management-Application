import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdNotificationImportant } from "react-icons/md";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important",
      icon: <MdNotificationImportant />,
      link: "/importanttasks",
    },
    {
      title: "Completed",
      icon: <MdOutlineLibraryAddCheck />,
      link: "/completedtasks",
    },
    {
      title: "Incompleted",
      icon: <MdOutlinePendingActions />,
      link: "/incompletedtasks",
    },
  ];
  return (
    <>
      <div className="break-words">
        <h2 className="text-xl text-white font-semibold">Task Manager</h2>
        <h4 className="mt-2 mb-1 text-white">phirawit@example.com</h4>
        <hr />
      </div>
      <div className="break-words">
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="flex my-2 items-center hover:bg-customLightBrown p-2 rounded transition-all duration-500"
          >
            {items.icon}
            <span style={{ marginLeft: "8px" }}>{items.title}</span>
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-customDarkOrange w-full p-2 rounded">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Sidebar;
