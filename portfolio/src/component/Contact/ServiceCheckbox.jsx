import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './ServiceCheckbox.css';

const ServiceCheckbox = ({ label, id, isSelected, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={`sc-wrapper
                ${isSelected
                    ? 'sc-selected'
                    : 'sc-unselected'
                }`}
        >
            <div className="sc-box-container">
                <input
                    type="checkbox"
                    id={id}
                    className="sc-hidden-input"
                    checked={isSelected}
                    onChange={() => onChange(id)}
                />
                <motion.div
                    initial={false}
                    animate={{
                        scale: isSelected ? 1 : 0,
                        opacity: isSelected ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="sc-checkmark-bg"
                >
                    <Check size={14} className="sc-checkmark" strokeWidth={3} />
                </motion.div>
            </div>
            <span className={`sc-label ${isSelected ? 'sc-label-selected' : 'sc-label-unselected'}`}>
                {label}
            </span>
        </label>
    );
};

export default ServiceCheckbox;
