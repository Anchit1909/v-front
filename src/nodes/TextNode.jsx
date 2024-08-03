// textNode.js

import { useState } from "react";
import NodeContainer from "../components/canvas/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import { Textarea } from "../components/ui/Textarea";
import { useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();

  function parseVariables(inputText) {
    const regex = /\{\{(.*?)\}\}/g;
    let matches;
    const result = new Set();
    while ((matches = regex.exec(inputText)) !== null) {
      result.add(matches[1]);
    }
    return result;
  }

  const handleTextChange = (e) => {
    const updatedText = e.target.value;
    setCurrText(updatedText);

    let variables = parseVariables(updatedText);
    variables = Array.from(variables);

    setHandles(variables);

    updateNodeInternals(id);
    handleResize(e);
  };

  const handleResize = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <NodeContainer
      heading="Text"
      type={NODE_TYPES.text}
      id={id}
      inputHandles={handles}
      outputHandles={["output"]}
      infoAvailable
    >
      <Textarea
        placeholder={"{{input}}"}
        label="Text"
        value={currText}
        onChange={handleTextChange}
        rows={1}
        onInput={handleResize}
      />
    </NodeContainer>
  );
};
