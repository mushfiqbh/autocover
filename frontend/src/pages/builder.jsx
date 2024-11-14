import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import lulogo from "../assets/lulogo.png";
import { styles } from "../assets/data";
import { PDFViewer } from "pdfjs-dist/web/pdf_viewer";
import { useState } from "react";

const Builder = ({ data }) => {
  const [pdfDocument, setPdfDocument] = useState(null);

  const generatePdf = () => {
    const MyDoc = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image style={styles.image} src={lulogo} />
            <Text style={{ fontSize: "20px", marginTop: 10 }}>
              Leading University
            </Text>
            <Text style={{ fontSize: "16px" }}>{data.student.dept}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Course Code</Text>
              <Text style={styles.right}>{data.course.code}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Course Title</Text>
              <Text style={styles.right}>{data.course.title}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Assignment Title</Text>
              <Text style={styles.right}>{data.title}</Text>
            </View>
          </View>

          <Text style={styles.heading}>Submitted To</Text>

          <View style={styles.section}>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Name</Text>
              <Text style={styles.right}>{data.teacher.name}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Designation</Text>
              <Text style={styles.right}>{data.teacher.designation}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Faculty</Text>
              <Text style={styles.right}>{data.teacher.faculty}</Text>
            </View>
          </View>

          <Text style={styles.heading}>Submitted By</Text>

          <View style={styles.section}>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Name</Text>
              <Text style={styles.right}>{data.student.name}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Batch</Text>
              <Text style={styles.right}>{data.student.batch}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>Section</Text>
              <Text style={styles.right}>{data.student.section}</Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={styles.left}>ID</Text>
              <Text style={styles.right}>{data.student.id}</Text>
            </View>
          </View>

          <Text style={styles.heading}>
            Submission Date:{" "}
            {new Date(data.date)
              .toISOString()
              .split("T")[0]
              .replace(/\//g, "-")}
          </Text>
        </Page>
      </Document>
    );

    const base64Pdf = btoa(MyDoc);
    setPdfDocument(base64Pdf);
  };

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>
      <PDFViewer src={`data:application/pdf;base64,${pdfDocument}`} />
    </div>
  );
};

export default Builder;
