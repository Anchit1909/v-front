import {
  Bot,
  CloudCog,
  FileCheck2,
  FileType,
  FolderInput,
  FolderOutput,
  Github,
  Link2,
  ScanSearch,
} from "lucide-react";

export const FILE_INPUT_OPTIONS = [
  { text: "PDF", value: "pdf" },
  { text: "TXT", value: "txt" },
  { text: "DOCX", value: "docx" },
];

export const SEMANTIC_SEARCH_OPTIONS = [
  {
    text: "openai/text-embedding-3-small",
    value: "openai-text-embedding-3-small",
  },
  {
    text: "openai/text-embedding-3-large",
    value: "openai-text-embedding-3-large",
  },
  {
    text: "openai/text-embedding-ada-002",
    value: "openai-text-embedding-ada-002",
  },
  { text: "cohere/embed-english-v3", value: "cohere-embed-english-v3" },
];

export const OPEN_AI_MODELS = [
  { text: "gpt-4-turbo-preview", value: "gpt_4_turbo_preview" },
  { text: "gpt-4-1106-preview", value: "gpt_4_1106_preview" },
  { text: "gpt-4-vision-preview", value: "gpt_4_vision_preview" },
  { text: "gpt-4-1106-vision-preview", value: "gpt_4_1106_vision_preview" },
  { text: "gpt-4", value: "gpt_4" },
  { text: "gpt-4-0613", value: "gpt_4_0613" },
];

export const INPUT_OPTIONS = [
  { text: "Text", value: "text" },
  { text: "File", value: "file" },
];

export const NODE_TYPES = {
  customInput: "customInput",
  customOutput: "customOutput",
  text: "text",
  llm: "llm",
  urlLoader: "urlLoader",
  gitLoader: "gitLoader",
  textToFile: "textToFile",
  semanticSearch: "semanticSearch",
  openAI: "openAI",
};

export const ICONS = {
  customInput: <FolderInput size={18} />,
  customOutput: <FolderOutput size={18} />,
  text: <FileType size={18} />,
  llm: <Bot size={18} />,
  urlLoader: <Link2 size={18} />,
  gitLoader: <Github size={18} />,
  textToFile: <FileCheck2 size={18} />,
  semanticSearch: <ScanSearch size={18} />,
  openAI: <CloudCog size={18} />,
};
