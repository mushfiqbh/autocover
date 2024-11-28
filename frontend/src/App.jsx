import { useContext, useState } from "react";
import Form from "./components/form";
import Builder from "./components/builder";
import { FormContext } from "./lib/contextAPI";
import { MdNavigateNext } from "react-icons/md";
import "./index.css";
import Footer from "./components/footer";

function App() {
  const [page, setPage] = useState("");
  const { formData, setFormData } = useContext(FormContext);

  return (
    <div className="App">
      <h2>LU AutoCoverPageGenerator</h2>

      <div className="navbar">
        <b className="anchor" onClick={() => setPage("")}>
          Home
        </b>
        {(page === "form" || page === "builder") && (
          <>
            <MdNavigateNext />
            <b className="anchor" onClick={() => setPage("form")}>
              {formData.type === "assignment" ? "Assignment" : "Lab Report"}{" "}
              Form
            </b>
          </>
        )}
        {page === "builder" && (
          <>
            <MdNavigateNext />
            <b className="anchor">Document Ready</b>
          </>
        )}
      </div>

      {page !== "form" && page !== "builder" && (
        <div className="starter">
          <b
            onClick={() => {
              setFormData({
                ...formData,
                type: "assignment",
              });
              setPage("form");
            }}
          >
            Create Assignment Cover Page
          </b>
          <br />
          <b
            onClick={() => {
              setFormData({
                ...formData,
                type: "labreport",
              });
              setPage("form");
            }}
          >
            Create Lab Report Cover Page
          </b>
        </div>
      )}

      {page === "form" && <Form setPage={setPage} />}
      {page === "builder" && <Builder setPage={setPage} />}

      <Footer />
    </div>
  );
}

export default App;
