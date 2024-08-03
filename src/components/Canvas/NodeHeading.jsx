import React from "react";

import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import { CircleX, Info } from "lucide-react";
import { CardHeader, CardTitle } from "../ui/Card";

const selector = (state) => ({
  removeNode: state.removeNode,
});

function NodeHeading({
  id = "",
  type = "grid", //icon
  heading = "Node",
  infoAvailable,
  infoContent = "Information",
  className = "",
}) {
  const { removeNode } = useStore(selector, shallow);

  const handleRemove = () => {
    if (!id) {
      return false;
    }

    removeNode(id);
  };

  return (
    <CardHeader>
      {/* left part */}
      <div className="flex justify-evenly flex-row">
        <CircleX />
        <CardTitle className="text-3xl font-bold text-center">
          {heading}
        </CardTitle>
        {/* right part */}
        <div className="flex gap-2">
          {infoAvailable && (
            <div className="relative group">
              <Info className="cursor-pointer" />
              {/* tooltip */}
              <div className="w-[300px] absolute mt-2 hidden group-hover:block z-10 bg-white px-3 py-2 text-sm  transition-opacity duration-300 border border-gray-300 rounded-lg shadow-xl">
                {infoContent}
              </div>
            </div>
          )}
          {/* remove button */}
          <button
            onClick={handleRemove}
            className="cursor-pointer rounded-lg hover:bg-[#f32f033b]  hover:shadow-[#f35d03_0px_0px_5px_2px] duration-100"
          >
            <CircleX />
          </button>

          {/* <img
          src={Remove}
          alt={"Remove Node"}
          onClick={handleRemove}
          className="cursor-pointer rounded-lg hover:bg-[#f32f033b]  hover:shadow-[#f35d03_0px_0px_5px_2px] duration-100"
        /> */}
        </div>
      </div>
    </CardHeader>
  );
}

export default NodeHeading;
