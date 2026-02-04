import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';
import { scrollToSection } from '../utils/helpers';

const MobileMenu = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleMobileClick = (e, id) => {
        scrollToSection(e, id);
        onClose(); // ปิดเมนูมือถือหลังจากกด
    };

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full z-40 bg-white border-b border-pink-50 shadow-xl lg:hidden"
        >
            <div className="px-4 pt-2 pb-6 space-y-2">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.id}`}
                        onClick={(e) => handleMobileClick(e, item.id)}
                        className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-md"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default MobileMenu;
