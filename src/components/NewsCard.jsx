import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, ChevronRight } from 'lucide-react';

const NewsCard = ({ item, featured, onReadMore }) => {
    return (
        <motion.div
            layoutId={`card-${item.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`group bg-white rounded-2xl overflow-hidden border border-pink-50 shadow-sm hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 ${featured ? 'md:col-span-2 md:flex' : ''}`}
        >
            <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'} ${item.coverImage ? '' : item.image} flex items-center justify-center`}>
                {item.coverImage ? (
                    <>
                        <img
                            src={item.coverImage}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <span className="text-gray-400 font-medium text-lg flex flex-col items-center gap-2">
                            <div className="p-3 bg-white/50 backdrop-blur-sm rounded-full">
                                <Bell className="text-gray-500" />
                            </div>
                            <span>รูปภาพประกอบ</span>
                        </span>
                    </>
                )}

                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold rounded-full shadow-sm">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className={`p-6 flex flex-col justify-between ${featured ? 'md:w-1/2' : ''}`}>
                <div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
                        {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
                        {item.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags && item.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <button
                        onClick={() => onReadMore(item)}
                        className="flex items-center gap-1 text-sm font-semibold text-gray-600 group-hover:text-pink-500 transition-colors"
                    >
                        อ่านเพิ่มเติม <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsCard;
