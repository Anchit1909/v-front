// textNode.js

import { useState } from "react";
import NodeContainer from "../components/Canvas/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import InputBox from "../components/Canvas/InputBox";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeContainer
      heading="Text"
      type={NODE_TYPES.text}
      id={id}
      outputHandles={["output"]}
      infoAvailable
    >
      <InputBox
        label="Text"
        type={"text"}
        value={currText}
        onChange={handleTextChange}
      />
    </NodeContainer>
  );
};
