import { useNavigate } from "react-router-dom";
import { faculties } from "../assets/data";
import { useContext } from "react";
import { ContextAPI } from "../lib/contextAPI";
import "../styles/form.css";

const Form = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(ContextAPI);

  const handleChange = (ev, where) => {
    const name = ev.target.name;
    const value = ev.target.value;
    if (where === "") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [where]: { ...formData[where], [name]: value },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/builder");
  };

  return (
    <div className="assignment">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Form Title & Date</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e, "")}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => handleChange(e, "")}
          />
        </fieldset>

        <fieldset>
          <label>Course Code & Title</label>
          <input
            type="text"
            name="code"
            value={formData.course.code}
            onChange={(e) => handleChange(e, "course")}
          />
          <input
            type="text"
            name="title"
            value={formData.course.title}
            onChange={(e) => handleChange(e, "course")}
          />
        </fieldset>

        <fieldset>
          <label>Teacher Details</label>
          <input
            type="text"
            name="name"
            value={formData.teacher.name}
            onChange={(e) => handleChange(e, "teacher")}
          />
          <select
            name="faculty"
            value={formData.teacher.faculty}
            onChange={(e) => handleChange(e, "teacher")}
          >
            {faculties.map((faculty, index) => (
              <option key={index} value={faculty.code}>
                {faculty.code}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="designation"
            value={formData.teacher.designation}
            onChange={(e) => handleChange(e, "teacher")}
          />
        </fieldset>

        <fieldset>
          <label>Student Details</label>
          <input
            type="text"
            name="id"
            value={formData.student.id}
            onChange={(e) => handleChange(e, "student")}
          />
          <input
            type="text"
            name="name"
            value={formData.student.name}
            onChange={(e) => handleChange(e, "student")}
          />
          <input
            type="text"
            name="batch"
            value={formData.student.batch}
            onChange={(e) => handleChange(e, "student")}
          />
          <select
            name="section"
            value={formData.student.section}
            onChange={(e) => handleChange(e, "student")}
          >
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
              (sec, index) => (
                <option key={index} value={sec}>
                  {sec}
                </option>
              )
            )}
          </select>

          <select
            name="dept"
            value={formData.student.dept}
            onChange={(e) => handleChange(e, "student")}
          >
            {faculties.map((faculty, index) => (
              <option key={index} value={faculty.name}>
                {faculty.code}
              </option>
            ))}
          </select>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
