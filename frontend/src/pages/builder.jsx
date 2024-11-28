import { useContext } from "react";
import generatePDF from "../lib/generatePDF";
import { FormContext } from "../lib/contextAPI";

const Builder = () => {
  const { formData } = useContext(FormContext);

  const styles = {
    page: {
      color: "#1A1A1A",
      backgroundColor: "#fff",
      fontSize: "20px",
      paddingTop: "6rem",
      textAlign: "center",
      fontFamily: "Calibri, Geist-Sans, serif",
    },
    section: {
      margin: "80px 0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "5px",
    },
    table: {
      width: "100%",
      marginBottom: "100px",
      borderCollapse: "separate",
      borderSpacing: "0 10px",
    },
    tr: {
      width: "100%",
    },
    tdFirstChild: {
      width: "40%",
      fontWeight: "bold",
      textAlign: "right",
    },
    tdSecondChild: {
      width: "60%",
      textAlign: "center",
      paddingLeft: "1.5rem",
      paddingRight: "10rem",
    },
    heading: {
      textAlign: "center",
      fontFamily: "Calibri-Bold",
      fontWeight: "bold",
      fontSize: "20px",
    },
    image: {
      width: "160px",
      height: "160px",
    },
  };

  return (
    <div>
      <div>
        <button onClick={() => generatePDF(formData)}>Print</button>
      </div>
      <div style={styles.page} className="docs">
        <div style={styles.section}>
          <img
            style={styles.image}
            src="https://i.ibb.co.com/cYMTmCT/Leading-University-Logo.png"
            alt="Leading University Logo"
          />
          <p style={{ fontSize: "2rem", marginTop: "10px" }}>
            Leading University
          </p>
          <p style={{ fontSize: "1.8rem" }}>{formData.student.dept}</p>
        </div>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Course Code</td>
              <td style={styles.tdSecondChild}>{formData.course.code}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Course Title</td>
              <td style={styles.tdSecondChild}>{formData.course.title}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Assignment Title</td>
              <td style={styles.tdSecondChild}>{formData.title}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>Submitted To</p>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Name</td>
              <td style={styles.tdSecondChild}>{formData.teacher.name}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Designation</td>
              <td style={styles.tdSecondChild}>
                {formData.teacher.designation}
              </td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Faculty</td>
              <td style={styles.tdSecondChild}>{formData.teacher.faculty}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>Submitted By</p>
        <table style={{ ...styles.table, marginBottom: "40px" }}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Name</td>
              <td style={styles.tdSecondChild}>{formData.student.name}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Batch</td>
              <td style={styles.tdSecondChild}>{formData.student.batch}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Section</td>
              <td style={styles.tdSecondChild}>{formData.student.section}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>ID</td>
              <td style={styles.tdSecondChild}>{formData.student.id}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>
          Submission Date:
          {new Date(formData.date)
            .toISOString()
            .split("T")[0]
            .replace(/\//g, "-")}
        </p>
      </div>
    </div>
  );
};

export default Builder;
