import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdNotificationImportant } from "react-icons/md";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
    },
    {
      title: "Important",
      icon: <MdNotificationImportant />,
    },
    {
      title: "Completed",
      icon: <MdOutlineLibraryAddCheck />,
    },
    {
      title: "Incompleted",
      icon: <MdOutlinePendingActions />,
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">The Code Master</h2>
        <h4 className="mb-1 text-gray-400">phirawit@example.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <div className="flex my-2 items-center hover:bg-gray-600 p-2 rounded transition-all duration-400">
            {items.icon}
            <span style={{ marginLeft: "8px" }}>{items.title}</span>
          </div>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
