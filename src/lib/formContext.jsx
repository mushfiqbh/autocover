import { useState, useEffect } from "react";
import { FormContext } from "./contextAPI";
import PropTypes from "prop-types";

const FormContextProvider = (props) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    course: {
      code: "",
      title: "",
    },
    teacher: {
      name: "",
      faculty: "CSE",
      designation: "Lecturer",
    },
    student: {
      id: "",
      name: "",
      batch: "",
      section: "",
      dept: "Computer Science And Engineering",
    },
  });

  useEffect(() => {
    if (localStorage.getItem("student")) {
      const student = JSON.parse(localStorage.getItem("student"));
      const { id, name, batch, section, dept } = student;
      setFormData((prevFormData) => ({
        ...prevFormData,
        student: { ...prevFormData.student, id, name, batch, section, dept },
      }));
    }
  }, []);

  const contextValue = {
    formData,
    setFormData,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node,
};

export default FormContextProvider;
