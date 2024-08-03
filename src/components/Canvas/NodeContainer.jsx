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
    <Card className="min-w-[300px] border-2 border-orange-400 shadow hover:shadow-lg">
      {inputHandles.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{ top: `${((index + 1) / (inputHandles.length + 1)) * 100}%` }}
        />
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
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{
            top: `${((index + 1) / (outputHandles.length + 1)) * 100}%`,
          }}
        />
      ))}
    </Card>
  );
};

export default NodeContainer;
