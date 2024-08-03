// toolbar.js

import { DraggableNode } from "./DraggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="container">
      <div className="mt-5 flex flex-wrap gap-2.5">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="urlLoader" label="URL" />
        <DraggableNode type="gitLoader" label="Git" />
        <DraggableNode type="textToFile" label="Text to File" />
        <DraggableNode type="semanticSearch" label="Semantic Search" />
        <DraggableNode type="openAI" label="OpenAI" />
      </div>
    </div>
  );
};
