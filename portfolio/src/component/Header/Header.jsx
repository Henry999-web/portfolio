import { useState, useEffect } from 'react'
import logo from '../../image/logo.webp'
import logo2 from '../../image/logo2.webp'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Menu, X, Hammer } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);

  const handleMaintenanceClick = (e) => {
    e.preventDefault();
    setShowMaintenance(true);
  };

  const handleMaintenanceMobileClick = (e) => {
    e.preventDefault();
    toggleMenu();
    setShowMaintenance(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  return (
    <section className={`h-wrapper ${isScrolled ? 'scrolled' : 'bg-gray-100'}`}>
      <nav className={`flexCenter innerWidth px-4 py-2 montserrat-regular h-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className='header-content'>
          <div className='logo'>
            <NavLink to="/">
              <img src={logo2} alt="Logo Desktop" className="logo-desktop" />
              <img src={logo} alt="Logo Mobile" className="logo-mobile" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className='header-links desktop-menu'>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to='/services' onClick={handleMaintenanceClick}>Services</NavLink></li>
              <li><NavLink to='/about' onClick={handleMaintenanceClick}>About</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </div>

          <div className='header-buttons desktop-buttons'>
            <Button className='btn' variant='default'>Contact Me</Button>
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
                  <li><NavLink to='/services' onClick={handleMaintenanceMobileClick}>Services</NavLink></li>
                  <li><NavLink to='/about' onClick={handleMaintenanceMobileClick}>About</NavLink></li>
                  <li><NavLink to='/blog' onClick={toggleMenu}>Blog</NavLink></li>
                  <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
                <div className='mobile-buttons'>
                  <Button className='btn' variant='default'>Contact Me</Button>
          
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Maintenance Dialog */}
      <AnimatePresence>
        {showMaintenance && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border-2 border-black rounded-2xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
              <button 
                onClick={() => setShowMaintenance(false)}
                className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
              <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 text-black shadow-inner">
                <Hammer size={40} className="animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 font-sans w-full border-b border-black pb-3">Maintenance</h3>
              <p className="text-black mb-8 font-medium">This page is under Maintainance</p>
              <Button 
                onClick={() => setShowMaintenance(false)} 
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Go Back
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
export default Header 