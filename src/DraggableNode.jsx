// draggableNode.js
import { ICONS } from "./utils/constants";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className={`
        flex flex-col space-y-1 cursor-grab 
        min-w-[80px] text-center py-2 px-2 
        justify-center place-items-center rounded-lg 
        border-2 border-primary 
        transition-shadow duration-200 ease-in-out
        hover:shadow-[0_0_15px_rgba(255,156,14,1)]
        ${type}
      `}
      draggable
    >
      {ICONS[type]}
      <span className="text-xs">{label}</span>
    </div>
  );
};
