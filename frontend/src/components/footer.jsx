import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="cta-section">
        <div className="cta-text">
          <h2>Ready for a next project?</h2>
        </div>
        <button className="cta-button">Contact Us</button>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>TESSERACT Inc.</h4>
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
          <h4>Follow us</h4>
          <div className="social-icons">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
