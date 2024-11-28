import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
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

  const print = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set document properties (optional)
    doc.setProperties({
      title: "PDF Result Template",
    });

    // Add page content
    const pageWidth = doc.internal.pageSize.getWidth();

    // Leading University Logo
    const imageURL = "https://i.ibb.co.com/cYMTmCT/Leading-University-Logo.png";
    doc.addImage(imageURL, "JPEG", (pageWidth - 40) / 2, 10, 40, 42);

    // Title and Department
    doc.setFont("times", "bold");
    doc.setFontSize(25);
    doc.text("Leading University", pageWidth / 2, 75, "center");
    doc.setFontSize(20);
    doc.text(data.student.dept, pageWidth / 2, 85, "center");

    // Course Information Table
    const yPosition = 100; // Starting position for table
    const rowHeight = 10; // Adjust row height as needed

    const courseInfo = [
      ["Course Code", data.course.code],
      ["Course Title", data.course.title],
      ["Assignment Title", data.title],
    ];

    doc.setFont("times", "normal");
    courseInfo.forEach((row, index) => {
      const y = yPosition + (index + 1) * rowHeight;
      doc.text(row[0], 50, y);
      doc.text(row[1], 100, y);
    });

    // Submitted To Section
    doc.setFont("times", "bold");
    doc.text(
      "Submitted To",
      pageWidth / 2,
      yPosition + courseInfo.length * rowHeight + 20,
      "center"
    );

    const teacherInfo = [
      ["Name", data.teacher.name],
      ["Designation", data.teacher.designation],
      ["Faculty", data.teacher.faculty],
    ];

    doc.setFont("times", "normal");
    teacherInfo.forEach((row, index) => {
      const y =
        yPosition +
        courseInfo.length * rowHeight +
        20 +
        (index + 1) * rowHeight;
      doc.text(row[0], 50, y);
      doc.text(row[1], 100, y);
    });

    // Submitted By Section
    doc.setFont("times", "bold");
    doc.text(
      "Submitted By",
      pageWidth / 2,
      yPosition +
        courseInfo.length * rowHeight +
        teacherInfo.length * rowHeight +
        40,
      "center"
    );

    const studentInfo = [
      ["Name", data.student.name],
      ["Batch", data.student.batch],
      ["Section", data.student.section],
      ["ID", data.student.id],
    ];

    doc.setFont("times", "normal");
    studentInfo.forEach((row, index) => {
      const y =
        yPosition +
        courseInfo.length * rowHeight +
        teacherInfo.length * rowHeight +
        40 +
        (index + 1) * rowHeight;
      doc.text(row[0], 50, y);
      doc.text(row[1], 100, y);
    });

    // Submission Date
    doc.setFont("times", "bold");
    const submissionDate = new Date(data.date)
      .toISOString()
      .split("T")[0]
      .replace(/\//g, "-");
    doc.text(
      `Submission Date: ${submissionDate}`,
      pageWidth / 2,
      yPosition +
        courseInfo.length * rowHeight +
        teacherInfo.length * rowHeight +
        studentInfo.length * rowHeight +
        60,
      "center"
    );

    // Save the PDF
    doc.save("assignment_result.pdf");

    // const docs = document.querySelector(".docs");
    // html2canvas(docs, {
    //   width: docs.scrollWidth,
    //   height: docs.scrollHeight,
    // }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const doc = new jsPDF({
    //     orientation: "portrait",
    //     unit: "px",
    //     format: [canvas.width, canvas.height],
    //   });
    //   const imgWidth = canvas.width;
    //   const imgHeight = canvas.height;
    //   doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //   doc.save("a4.pdf");
    // });
  };

  return (
    <div>
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
      <br />
      <button onClick={print}>Print</button>
    </div>
  );
};

export default Home;
