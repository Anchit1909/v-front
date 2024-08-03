// submit.js
import { useStore } from "./store";
import { useToast } from "./components/ui/useToast";
import { Toast, ToastAction } from "./components/ui/Toast";
import { Button } from "./components/ui/Button";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const validityMessage = data.is_dag
        ? "Pipeline is valid."
        : "Pipeline is not valid.";

      toast({
        title: "Pipeline Analysis",
        description: (
          <div className="flex flex-col space-y-1">
            <p>Number of Nodes: {data.num_nodes}</p>
            <p>Number of Edges: {data.num_edges}</p>
            <p>Is DAG: {data.is_dag.toString()}</p>
            <p className="font-medium text-base">{validityMessage}</p>
          </div>
        ),
        duration: 6000,
      });
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was an error submitting the pipeline.",
        action: (
          <ToastAction altText="Try again" onClick={handleSubmit}>
            Try again
          </ToastAction>
        ),
      });
      console.error("There was an error submitting the pipeline:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Button type="submit" variant="outline" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
