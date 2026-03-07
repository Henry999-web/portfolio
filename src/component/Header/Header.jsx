import { useState } from 'react'
import logo from '../../image/logo.jpg'
import logo2 from '../../image/logo2.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import ThemeToggleButton from '../../components/ui/ThemeToggleButton'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  return (
    <section className="h-wrapper bg-gray-100">
      <nav className="flexCenter innerWidth px-4 py-2 montserrat-regular h-container">
        <div className='header-content'>
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className='header-links desktop-menu'>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </div>

          <div className='header-buttons desktop-buttons'>
            <Button className='btn' variant='default'>Contact Me</Button>
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isOpen ? <X color="white" /> : <Menu color="white" />}
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="mobile-menu"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ul className="mobile-links">
                  <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                  <li><NavLink to='/services' onClick={toggleMenu}>Services</NavLink></li>
                  <li><NavLink to='/about' onClick={toggleMenu}>About</NavLink></li>
                  <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
                <div className='mobile-buttons'>
                  <Button className='btn' variant='default'>Contact Me</Button>
                  <ThemeToggleButton />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </section>
  )
}
export default Header 