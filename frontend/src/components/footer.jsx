import "../styles/footer.css";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="cta-section">
        <div className="cta-text">
          <h2>Ready for a next project?</h2>
        </div>
        <button className="cta-button">Contact</button>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>TESSERACT Inc.</h4>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>
              <a>Assignment Front Page</a>
            </li>
            <li>
              <a>Lab Report Front Page</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Further Information</h4>
          <ul>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Developer On</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/mushfiqbh" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@tesseractbd" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/mushfiqbh" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/mushfiqbh" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
