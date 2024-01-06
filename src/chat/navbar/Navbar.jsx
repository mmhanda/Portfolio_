import './navbar.scss'
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* {side bar} */}
      <div className='wrapper'>
        <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1.3 }} transition={{ duration: 1.3 }}>M.Handa</motion.span>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='social'>
          <a href=''> <img src='/facebook.png' alt='facebook image' /> </a>
          <a href=''> <img src='/instagram.png' alt='instagram image' /> </a>
          <a href=''> <img src='/dribbble.png' alt='dribbble image' /> </a>
          <a href=''> <img src='/youtube.png' alt='youtube image' /> </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;