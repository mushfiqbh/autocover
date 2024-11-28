import { useContext, useState } from "react";
import Form from "./components/form";
import Builder from "./components/builder";
import { FormContext } from "./lib/contextAPI";

function App() {
  const [page, setPage] = useState("");
  const { formData, setFormData } = useContext(FormContext);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setFormData({
            ...formData,
            type: "assignment",
          });
          setPage("form");
        }}
      >
        Create Assignment Cover Page
      </button>
      <br />
      <button
        onClick={() => {
          setFormData({
            ...formData,
            type: "labreport",
          });
          setPage("form");
        }}
      >
        Create Lab Report Cover Page
      </button>
      {page === "form" && <Form setPage={setPage} />}
      {page === "builder" && <Builder />}
    </div>
  );
}

export default App;
