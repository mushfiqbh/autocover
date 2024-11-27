import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
  const doc = new jsPDF();
  const data = {
    course: {
      code: "EEE-2111",
      title: "Electrconic Devices And Circuits",
    },
    teacher: {
      name: "Bidyut Kanthi Nath",
      faculty: "EEE",
      designation: "Lecturer",
    },
    student: {
      id: "0182320012101295",
      name: "Md. Mushfiqur Rahman",
      batch: "62",
      section: "G",
      dept: "Computer Science And Engineering",
    },
    date: new Date().toISOString().split("T")[0],
    title: "Characteristics of Transistors",
  };

  const styles = {
    page: {
      color: "#1A1A1A",
      backgroundColor: "#fff",
      fontSize: "20px",
      paddingTop: "6rem",
      textAlign: "center",
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
      textAlign: "left",
      paddingLeft: "1.5rem",
      paddingRight: "10rem",
    },
    heading: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
    image: {
      width: "160px",
      height: "160px",
    },
    bodyHtml: {
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
      fontFamily: "Calibri, Geist-Sans, Times-Roman, serif",
    },
  };

  const print = () => {
    const page = document.querySelector(".page");
    html2canvas(page, {
      width: page.scrollWidth,
      height: page.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("a4.pdf");
    });
  };

  return (
    <div>
      <div style={styles.page} className="page">
        <div style={styles.section}>
          <img
            style={styles.image}
            src="https://i.ibb.co.com/cYMTmCT/Leading-University-Logo.png"
            alt="Leading University Logo"
          />
          <p style={{ fontSize: "2rem", marginTop: "10px" }}>
            Leading University
          </p>
          <p style={{ fontSize: "1.8rem" }}>{data.student.dept}</p>
        </div>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Course Code</td>
              <td style={styles.tdSecondChild}>{data.course.code}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Course Title</td>
              <td style={styles.tdSecondChild}>{data.course.title}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Assignment Title</td>
              <td style={styles.tdSecondChild}>{data.title}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>Submitted To</p>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Name</td>
              <td style={styles.tdSecondChild}>{data.teacher.name}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Designation</td>
              <td style={styles.tdSecondChild}>{data.teacher.designation}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Faculty</td>
              <td style={styles.tdSecondChild}>{data.teacher.faculty}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>Submitted By</p>
        <table style={{ ...styles.table, marginBottom: "40px" }}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Name</td>
              <td style={styles.tdSecondChild}>{data.student.name}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Batch</td>
              <td style={styles.tdSecondChild}>{data.student.batch}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>Section</td>
              <td style={styles.tdSecondChild}>{data.student.section}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.tdFirstChild}>ID</td>
              <td style={styles.tdSecondChild}>{data.student.id}</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.heading}>
          Submission Date:
          {new Date(data.date)
            .toISOString()
            .split("T")[0]
            .replace(/\//g, "-")}
        </p>
      </div>
      <button onClick={print}>Print</button>
    </div>
  );
};

export default Home;
