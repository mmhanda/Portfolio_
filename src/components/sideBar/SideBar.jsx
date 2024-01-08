import { motion } from "framer-motion"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./Links/Links";
import { useState } from "react";

const SideBar = () => {

  const [open, setOpen] = useState(false);

  const variant = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 40,
      }
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 200,
        damping: 23,
      }
    }
  }

  return (
    <motion.div animate={open ? 'open' : 'closed'} className="sidebar">
      <motion.div className="bg" variants={variant}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;