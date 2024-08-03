// components/Node.js
import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { ArrowUpDownIcon } from "lucide-react";
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
    <Card className="w-full">
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

      <CardContent className="">{children}</CardContent>

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
