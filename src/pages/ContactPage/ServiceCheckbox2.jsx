import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceCheckbox2 = ({ label, id, isSelected, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none
                ${isSelected
                    ? 'border-black bg-black/5'
                    : 'border-[#333] hover:border-[#555] bg-[#1a1a1a]'
                }`}
        >
            <div className="relative flex items-center justify-center w-5 h-5 rounded-md border border-[#555] overflow-hidden ink-0">
                <input
                    type="checkbox"
                    id={id}
                    className="absolute opacity-0 w-0 h-0"
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
                    className="absolute inset-0 bg-black flex items-center justify-center"
                >
                    <Check size={14} className="text-black" strokeWidth={3} />
                </motion.div>
            </div>
            <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-black' : 'text-gray-400'}`}>
                {label}
            </span>
        </label>
    );
};

export default ServiceCheckbox2;