import React from "react";

import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import { CircleX, Info } from "lucide-react";
import { CardHeader, CardTitle } from "../ui/Card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/HoverCard";
import { ICONS } from "../../utils/constants";

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
    <CardHeader className="px-4">
      <CardTitle className="flex flex-row items-center justify-between">
        {/* left part */}
        <div className="flex flex-row items-center space-x-1">
          {ICONS[type]}
          <p className="">{heading}</p>
        </div>

        {/* right part */}
        <div className="flex space-x-2">
          {infoAvailable && (
            <HoverCard>
              <HoverCardTrigger>
                <Info className="cursor-pointer" size={18} />
              </HoverCardTrigger>
              <HoverCardContent>{infoContent}</HoverCardContent>
            </HoverCard>
          )}
          {/* remove button */}
          <button
            onClick={handleRemove}
            className="cursor-pointer rounded-lg hover:bg-secondary hover:shadow-[#f35d03_0px_0px_5px_2px] duration-100"
          >
            <CircleX size={18} />
          </button>
        </div>
      </CardTitle>
    </CardHeader>
  );
}

export default NodeHeading;
