/** @format */

import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/uppist.svg'; // Updated path to assets folder
import { FaMinus } from 'react-icons/fa'; // Import a horizontal line icon for underline

function Header() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // Default to 'home'

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsServicesDropdownOpen(false); // Ignore dropdown for now
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Uppist Logo" className={styles.logoImg} />
      </div>
      <div className={styles.navLinks}>
        <a
          href="#home"
          className={styles.navItem}
          onClick={() => handleNavClick('home')}
        >
          Home
          {activeItem === 'home' && (
            <span className={styles.underline}>
              <FaMinus />
            </span>
          )}
        </a>
        <a
          href="#about"
          className={styles.navItem}
          onClick={() => handleNavClick('about')}
        >
          About Us
          {activeItem === 'about' && (
            <span className={styles.underline}>
              <FaMinus />
            </span>
          )}
        </a>
        <a
          href="#services"
          className={styles.navItem}
          onClick={() => handleNavClick('services')}
        >
          Services
        </a>
        <a
          href="#blogs"
          className={styles.navItem}
          onClick={() => handleNavClick('blogs')}
        >
          Blogs
          {activeItem === 'blogs' && (
            <span className={styles.underline}>
              <FaMinus />
            </span>
          )}
        </a>
        <a
          href="#case-studies"
          className={styles.navItem}
          onClick={() => handleNavClick('case-studies')}
        >
          Case studies
          {activeItem === 'case-studies' && (
            <span className={styles.underline}>
              <FaMinus />
            </span>
          )}
        </a>
        <a
          href="#contact"
          className={styles.navItem}
          onClick={() => handleNavClick('contact')}
        >
          Contact Us
          {activeItem === 'contact' && (
            <span className={styles.underline}>
              <FaMinus />
            </span>
          )}
        </a>
      </div>
      <a href="#consultation" className={styles.consultationButton}>
        BOOK A FREE CONSULTATION
      </a>
    </nav>
  );
}

export default Header; // Ensure this line is present