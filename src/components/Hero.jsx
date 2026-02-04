import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="/bg1.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>


            {/* ข้อความกลาง hero */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl tracking-wide leading-tight">
                    โรงเรียนบ้านบาตร<br />(ชัยทัตราษฎร์บํารุง)
                </h1>
                <div className="h-1 w-24 bg-pink-400 mx-auto mb-6 rounded-full shadow-lg"></div>
                <p className="text-xl md:text-2xl text-pink-100 font-medium drop-shadow-md mb-4">
                    ศูนย์รวมจดหมายข่าวและกิจกรรม เพื่อสังคมคุณภาพ
                </p>
                <p className="text-base md:text-lg text-gray-200 font-light drop-shadow-sm leading-relaxed max-w-2xl mx-auto">
                    ร่วมเปิดมุมมองใหม่และเป็นส่วนหนึ่งของการเปลี่ยนแปลงที่สร้างสรรค์ <br className="hidden md:block" />
                    ติดตามทุกความเคลื่อนไหวและเรื่องราวดีๆ ที่คัดสรรมาเพื่อคุณโดยเฉพาะ
                </p>
            </motion.div> */}
        </div>
    );
};

export default Hero;
