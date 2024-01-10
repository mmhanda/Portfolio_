import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Handa
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/mohammed-handa-b5392024b/" target="_blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
