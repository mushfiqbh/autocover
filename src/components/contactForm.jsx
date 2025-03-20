import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import Proptypes from "prop-types";

const ContactForm = ({ setShow }) => {
  const [status, setStatus] = useState("SEND");
  const form = useRef();

  const sendEmail = (e) => {
    setStatus("SENDING...");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipcu0w4",
        "template_aicpn0y",
        form.current,
        "k6BnjHuitclYjPVSa"
      )
      .then(
        () => {
          setStatus("SENT");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form">
      <div>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className={status !== "SEND" ? "disabled" : ""}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email / Phone / Contact Info"
            name="from_email"
            className={status !== "SEND" ? "disabled" : ""}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="from_site"
            value="LU Auto Front Page Generator"
            onChange={() => {}}
            hidden
          />
        </div>
      </div>
      <div>
        <div>
          <textarea
            placeholder="Type Your Message"
            name="message"
            className={status !== "SEND" ? "disabled" : ""}
            required
          ></textarea>
        </div>
      </div>
      <div className="contact-button">
        <button type="button" onClick={() => setShow(false)}>
          CLOSE
        </button>
        <button type="submit" className={status !== "SEND" ? "disabled" : ""}>
          {status}
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = { setShow: Proptypes.func };

export default ContactForm;
