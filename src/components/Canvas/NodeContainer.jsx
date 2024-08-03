// components/Node.js
import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardContent } from "../ui/Card";
import NodeHeading from "./NodeHeading";

const NodeContainer = ({
  className = "",
  heading,
  type,
  id,
  infoAvailable,
  inputHandles = [],
  outputHandles = [],
  children,
}) => {
  return (
    <Card className="min-w-[300px] border-2 border-orange-400 shadow hover:shadow-lg relative">
      {inputHandles.map((input, index) => (
        <div
          key={`input-${index}`}
          className="absolute left-[-5px]"
          style={{
            top: `${((index + 1) / (inputHandles.length + 1)) * 100}%`,
            transform: "translateY(-50%)",
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${input}`}
          />
          <span className="z-10 absolute right-2 transform -translate-y-1/2 text-sm text-primary font-medium">
            {input}
          </span>
        </div>
      ))}
      <NodeHeading
        heading={heading}
        type={type}
        id={id}
        infoAvailable={infoAvailable}
      />
      <CardContent className="px-4 flex space-y-2 flex-col">
        {children}
      </CardContent>
      {outputHandles.map((output, index) => (
        <div
          key={`output-${index}`}
          className="absolute right-[-5px]"
          style={{
            top: `${((index + 1) / (outputHandles.length + 1)) * 100}%`,
            transform: "translateY(-50%)",
          }}
        >
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${output}`}
          />
          <span className="z-10 absolute left-2 transform -translate-y-1/2 text-sm text-primary font-medium">
            {output}
          </span>
        </div>
      ))}
    </Card>
  );
};

export default NodeContainer;
