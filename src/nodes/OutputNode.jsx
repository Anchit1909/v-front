// outputNode.js

import { useState } from "react";
import NodeContainer from "../components/Canvas/NodeContainer";
import InputBox from "../components/Canvas/InputBox";
import SelectBox from "../components/Canvas/SelectBox";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";

export const OutputNode = ({ id, data }) => {
  console.log(data);
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setOutputType(value);
  };

  return (
    <NodeContainer
      heading="Output"
      type={NODE_TYPES.output}
      id={id}
      inputHandles={["value"]}
      infoAvailable
    >
      <InputBox
        label="Name"
        type={outputType}
        value={currName}
        onChange={handleNameChange}
      />
      <SelectBox
        label="Output Type"
        options={INPUT_OPTIONS}
        value={outputType}
        onChange={handleTypeChange}
      />
    </NodeContainer>
  );
};
