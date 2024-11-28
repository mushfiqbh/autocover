import jsPDF from "jspdf";

const generatePDF = (data) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Set document properties (optional)
  doc.setProperties({
    title: data.title,
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
      yPosition + courseInfo.length * rowHeight + 20 + (index + 1) * rowHeight;
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
  doc.save(data.course.code + "_" + data.date + ".pdf");
};

export default generatePDF;
