import { createContext, useState } from "react";

export const ContextAPI = createContext(null);

const ContextAPIProvider = (props) => {
  const [formData, setFormData] = useState({
    course: {
      code: "EEE-2112",
      title: "Electrconic Devices And Circuits And Sessional",
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
    number: "1",
    date: new Date().toISOString().split("T")[0],
    title: "Assignment on Characteristics of Transistors and Diodes in Semiconductors",
  });

  const contextValue = {
    formData,
    setFormData,
  };

  return (
    <ContextAPI.Provider value={contextValue}>
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextAPIProvider;
