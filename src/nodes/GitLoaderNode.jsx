// GitLoaderNode.js

import { useState } from "react";
import NodeContainer from "../components/Canvas/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import InputBox from "../components/Canvas/InputBox";

export const GitLoaderNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeContainer
      heading="Git Loader"
      type={NODE_TYPES.gitLoader}
      id={id}
      inputHandles={["value"]}
      outputHandles={["output"]}
      infoAvailable
    >
      <InputBox
        label="Repository"
        type={"url"}
        value={currText}
        onChange={handleTextChange}
      />
      <span>Pulls code from a Git repository.</span>
    </NodeContainer>
  );
};
