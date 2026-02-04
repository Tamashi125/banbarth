import React from 'react';
import { X, Calendar, ImageIcon } from 'lucide-react';

const NewsModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col">
                {/* Close Button - Updated Position to top-right of white box */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-50 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full backdrop-blur-md shadow-sm border border-gray-100 transition-all"
                >
                    <X size={24} />
                </button>

                {/* Scrollable Content */}
                <div className="p-8 overflow-y-auto custom-scrollbar h-full">

                    {/* Header & Content Section */}
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold">
                                {item.category}
                            </span>
                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <Calendar size={14} />
                                <span>{item.date}</span>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight pr-10">
                            {item.title}
                        </h2>

                        <div className="text-gray-600 leading-relaxed text-lg mb-10">
                            {item.excerpt}
                        </div>
                    </div>

                    {/* Gallery Section - Full Width */}
                    {item.gallery && item.gallery.length > 0 && (
                        <div className="border-t border-gray-100 pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 max-w-3xl mx-auto">
                                <ImageIcon className="text-pink-500" size={20} />
                                ภาพบรรยากาศ
                            </h3>
                            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                                {item.gallery.map((img, idx) => (
                                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden mb-4 relative group">
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx + 1}`}
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsModal;
