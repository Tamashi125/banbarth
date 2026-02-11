import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const PersonnelCard = ({ person, isDirector = false, onClick }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        onClick={onClick}
        className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full border ${isDirector ? 'border-pink-200 ring-4 ring-pink-50 shadow-xl' : 'border-gray-100'} ${onClick ? 'cursor-pointer' : ''}`}
    >
        <div className={`overflow-hidden relative ${isDirector ? 'aspect-[4/5]' : 'aspect-square'}`}>
            <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Contact info below text instead of overlay */}
        </div>

        <div className={`p-4 text-center ${isDirector ? 'bg-pink-50/50' : ''}`}>
            {isDirector && (
                <div className="inline-block bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full text-[10px] font-bold mb-2">
                    ผู้อำนวยการ
                </div>
            )}
            <h3 className={`font-bold text-gray-900 mb-0.5 truncate ${isDirector ? 'text-xl' : 'text-sm'}`}>
                {person.name}
            </h3>
            <p className="text-gray-500 text-xs font-medium truncate mb-3">
                {person.role}
            </p>

            {/* Moved Contact Icons Here with Text */}
            {/* <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-100/50">
                <div className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs text-gray-400 group-hover:text-pink-500 transition-colors">
                    <Mail size={12} className="flex-shrink-0" />
                    <span className="truncate">test@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs text-gray-400 group-hover:text-pink-500 transition-colors">
                    <Phone size={12} className="flex-shrink-0" />
                    <span>{person.number}</span>
                </div>
            </div> */}
        </div>
    </motion.div>
);

export default PersonnelCard;
