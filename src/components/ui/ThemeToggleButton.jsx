import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
            {theme === 'light' ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
        </button>
    );
};

export default ThemeToggleButton;