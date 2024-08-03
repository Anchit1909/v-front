// inputNode.js

import { useState } from "react";
import NodeContainer from "../components/Canvas/NodeContainer";
import InputBox from "../components/Canvas/InputBox";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import SelectBox from "../components/Canvas/SelectBox";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setInputType(value);
  };

  return (
    <NodeContainer
      heading="Input"
      type={NODE_TYPES.input}
      id={id}
      outputHandles={["value"]}
      infoAvailable
    >
      <InputBox
        label="Name"
        type={inputType}
        value={currName}
        onChange={handleNameChange}
      />
      <SelectBox
        label="Input Type"
        options={INPUT_OPTIONS}
        value={inputType}
        onChange={handleTypeChange}
      />
    </NodeContainer>
  );
};
