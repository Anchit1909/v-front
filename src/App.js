import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <Toaster />
    </div>
  );
}

export default App;
