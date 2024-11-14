import { StyleSheet } from "@react-pdf/renderer";

export const faculties = [
  {
    code: "CSE",
    name: "Computer Science And Engineering",
  },
  {
    code: "EEE",
    name: "Electronics And Electrical Engineering",
  },
  {
    code: "ECE",
    name: "Electronics And Communication Engineering",
  },
  {
    code: "ME",
    name: "Mechanical Engineering",
  },
  {
    code: "CE",
    name: "Civil Engineering",
  },
];

export const courses = [
  {
    code: "CSE-2111",
    title: "Data Structures",
  },
  {
    code: "CSE-2112",
    title: "Data Structures And Sessional",
  },
];

export const teachers = [
  {
    code: "DCP",
    name: "Dipto Chandra Paul",
    faculty: "CSE",
    designation: "Lecturer",
  },
  {
    code: "BKN",
    name: "Bidyut Kanthi Nath",
    faculty: "EEE",
    designation: "Lecturer",
  },
];

export const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {
    color: "#1A1A1A",
    backgroundColor: "#fff",
    fontSize: 12,
    paddingTop: 80,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  view: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },
  section: {
    marginBottom: 20,
    padding: "10px 50px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 5,
  },
  flexbox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },
  left: {
    width: "40%",
    textAlign: "right",
    fontFamily: "Times-Bold",
  },
  right: {
    width: "60%",
  },
  heading: {
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Times-Bold",
  },
  image: {
    width: 100,
    height: 100,
  },
});
