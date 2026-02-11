import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, X } from 'lucide-react';
import PersonnelCard from './PersonnelCard';
import { director, personnel } from '../data/personnelData';

const PersonnelCategories = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div id="personnel" className="py-20 bg-gradient-to-b from-white to-pink-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-white border border-pink-200 text-pink-600 text-sm font-semibold mb-4 shadow-sm"
                    >
                        <span className="flex items-center gap-2">
                            <Users size={16} /> บุคลากร
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        ข้อมูลครูและบุคลากรทางการศึกษา
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        ทำความรู้จักกับครูและบุคลากร 16 ท่าน ผู้อยู่เบื้องหลังความสำเร็จของโรงเรียนบ้านบาตร (ชัยทัตราษฎร์บำรุง)
                    </motion.p>
                </div>

                {/* Layout: Leader centered + Grid */}
                <div className="flex flex-col items-center gap-12">

                    {/* Level 1: Director (Slightly Larger) */}
                    <div className="w-full flex justify-center relative z-10">
                        <div className="w-64 transform hover:scale-105 transition-transform duration-500">
                            <PersonnelCard
                                person={director}
                                isDirector={true}
                                onClick={() => setSelectedImage(director.image)}
                            />
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>

                    {/* Level 2+: Team Grid (Compact 20+ people) */}
                    <div className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                            {personnel.map((person) => (
                                <PersonnelCard
                                    key={person.id}
                                    person={person}
                                    onClick={() => setSelectedImage(person.image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] w-auto h-auto bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Enlarged view"
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PersonnelCategories;
