import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="copyright">
      <p>
        ©Copy Right 2023{" "}
        <Link
          to="https://github.com/Priya-Pdh"
          className="footer-item"
          target="_blank"
        >
          Priya Pradhan
        </Link>
        ,{" "}
        <Link
          to="https://github.com/bdnaima"
          className="footer-item"
          target="_blank"
        >
          Naima Malik
        </Link>{" "}
        &{" "}
        <Link
          to="https://github.com/sarahosterhed"
          className="footer-item"
          target="_blank"
        >
          Sarah Österhed
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
