import { courses, faculties, designations } from "../assets/data";
import { useContext } from "react";
import { FormContext } from "../lib/contextAPI";
import "../styles/form.css";
import PropTypes from "prop-types";

const Form = ({ setPage }) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (ev, where) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setFormData((prevFormData) => {
      if (where === "") {
        return {
          ...prevFormData,
          [name]: value,
        };
      } else {
        return {
          ...prevFormData,
          [where]: { ...prevFormData[where], [name]: value },
        };
      }
    });

    if (where === "course") {
      const course = courses.find((c) => c.code === value.toUpperCase());
      if (course) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          course: { ...prevFormData.course, title: course.title },
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("student", JSON.stringify(formData.student));
    setPage("builder");
  };

  return (
    <div className="assignment">
      <form onSubmit={handleSubmit}>
        <div className="column">
          <fieldset>
            <label>
              {formData.type === "assignment" ? "Assignment" : "Lab Report"}{" "}
              Title & Date
            </label>
            <input
              type="text"
              name="title"
              placeholder={
                formData.type === "assignment"
                  ? "Assignment Title"
                  : "Lab Report Title"
              }
              value={formData.title}
              onChange={(e) => handleChange(e, "")}
            />
            <input
              type="date"
              name="date"
              placeholder="Assignment Date"
              value={formData.date}
              onChange={(e) => handleChange(e, "")}
            />
          </fieldset>

          <fieldset>
            <label>Course Code & Title</label>
            <input
              type="text"
              name="code"
              placeholder="Course Code"
              value={formData.course.code}
              onChange={(e) => handleChange(e, "course")}
            />
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={formData.course.title}
              onChange={(e) => handleChange(e, "course")}
            />
          </fieldset>

          <fieldset>
            <label>Teacher Details</label>
            <input
              type="text"
              name="name"
              placeholder="Teacher Name"
              value={formData.teacher.name}
              onChange={(e) => handleChange(e, "teacher")}
            />

            <select
              name="designation"
              placeholder="Designation"
              value={formData.teacher.designation}
              onChange={(e) => handleChange(e, "teacher")}
            >
              {designations.map((designation, index) => (
                <option key={index} value={designation}>
                  {designation}
                </option>
              ))}
            </select>

            <select
              name="faculty"
              placeholder="Faculty"
              value={formData.teacher.faculty}
              onChange={(e) => handleChange(e, "teacher")}
            >
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty.code}>
                  {"Dept. of " + faculty.code}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <div className="column">
          <fieldset>
            <label>Student Details</label>
            <input
              type="text"
              name="id"
              placeholder="Student ID"
              value={formData.student.id}
              onChange={(e) => handleChange(e, "student")}
            />
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={formData.student.name}
              onChange={(e) => handleChange(e, "student")}
            />
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={formData.student.batch}
              onChange={(e) => handleChange(e, "student")}
            />
            <select
              name="section"
              placeholder="Section"
              value={formData.student.section}
              onChange={(e) => handleChange(e, "student")}
            >
              {["Select Section"]
                .concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
                .map((sec, index) => (
                  <option key={index} value={sec}>
                    {sec}
                  </option>
                ))}
            </select>

            <select
              name="dept"
              placeholder="Department"
              value={formData.student.dept}
              onChange={(e) => handleChange(e, "student")}
            >
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty.name}>
                  {"Dept. of " + faculty.code}
                </option>
              ))}
            </select>
          </fieldset>

          <button style={{ width: "90%", margin: "0 5%" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default Form;
