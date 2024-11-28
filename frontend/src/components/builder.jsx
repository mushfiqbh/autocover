import { useState, useContext } from "react";
import generateAssignment from "../lib/generateAssignment";
import generateLabReport from "../lib/generateLabReport";
import { FormContext } from "../lib/contextAPI";
import Assignment from "./assignment";
import LabReport from "./labreport";
import PropTypes from "prop-types";

const Builder = ({ setPage }) => {
  const { formData } = useContext(FormContext);
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: 0 }}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "50px 0" }}>
          <button
            onClick={() => {
              formData.type === "assignment"
                ? generateAssignment(formData)
                : generateLabReport(formData);
            }}
          >
            Download Your PDF
          </button>
        </div>

        <h3
          style={{
            color: "slateblue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => setPage("form")}
        >
          Edit / Create Another{" "}
          {formData.type === "assignment" ? "Assignment" : "Lab Report"}
        </h3>

        <i style={{ color: "red" }}>
          Preview of the cover page may not be actually represented here
        </i>

        <button
          style={{ width: "200px" }}
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide Preview" : "Show Preview"}
        </button>
      </div>

      {show && formData.type === "assignment" && <Assignment />}
      {show && formData.type === "labreport" && <LabReport />}
    </div>
  );
};

Builder.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Builder;
