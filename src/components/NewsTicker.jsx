import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';
import { newsTickerItems as newsItems } from '../data/newsTickerData';

const NewsTicker = () => {

    return (
        <div className="bg-pink-600 text-white py-2 overflow-hidden relative z-20 border-b border-pink-700 shadow-inner">
            <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <div className="flex-shrink-0 bg-white text-pink-600 px-3 py-1 rounded-md text-xs md:text-sm font-bold mr-4 shadow-sm z-10 flex items-center gap-2">
                    <Megaphone size={14} className="animate-pulse" />
                    ประชาสัมพันธ์
                </div>

                {/* Scrolling Text Container (Seamless Loop) */}
                <div className="flex-1 overflow-hidden flex mask-linear-fade">
                    <motion.div
                        className="flex whitespace-nowrap"
                        style={{ width: "max-content" }}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30, // Adjust speed (higher = slower)
                            ease: "linear"
                        }}
                    >
                        {/* Render 2 sets of items for seamless looping */}
                        {[...newsItems, ...newsItems].map((item, idx) => (
                            <div key={idx} className="flex items-center mx-6">
                                <span className="text-sm md:text-base font-medium">{item}</span>
                                <span className="text-pink-300 text-xs ml-6">●</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
