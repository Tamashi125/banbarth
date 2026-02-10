import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote } from 'lucide-react';

const HistorySection = () => {
    return (
        <section id="history" className="py-20 bg-white relative overflow-hidden border-b border-pink-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Image Side - ปรับขนาดให้เล็กลงเป็น 4/12 (1/3) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-4/12 relative"
                    >
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[10px] border-white relative z-10">
                            <img
                                src="/ผอ.png"
                                alt="ผู้ก่อตั้งโรงเรียนบ้านบาตร(ชัยทัตราษฎร์บํารุง)"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* ย้ายชื่อมาไว้ด้านล่างรูปภาพ (แก้ไขกลับเป็นชื่อและตำแหน่ง) */}
                        <div className="mt-6 text-center relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900">นายดุสิต หลอมประโคน</h3>
                            <p className="text-pink-500 font-medium">ผู้อํานวยการโรงเรียนบ้านบาตร(ชัยทัตราษฎร์บํารุง)</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-pink-200 rounded-2xl z-0 hidden md:block"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-100 rounded-full z-0 blur-xl"></div>
                    </motion.div>

                    {/* Text Side - ปรับขนาดให้กว้างขึ้นเป็น 8/12 (2/3) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-8/12 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-medium mb-6">
                            <Award size={16} />
                            <span>ประวัติความเป็นมาของโรงเรียนบ้านบาตร(ชัยทัตราษฎร์บํารุง)</span>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-2 text-pink-100 w-12 h-12 -z-10 transform -scale-x-100" />
                            <p className="text-gray-600 leading-relaxed mb-4 text-lg font-light indent-10">
                                โรงเรียนบ้านบาตร (ชัยทัตราษฎร์บำรุง) สังกัดสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน กระทรวงศึกษาธิการ
                                ก่อตั้งเมื่อวันที่ 6 เดือนมิถุนายน พ.ศ. 2482 หมู่ที่ 5 ต.ตะโกตาพิ อ.ประโคนชัย จ.บุรีรัมย์
                                ด้วยความร่วมมือของราษฎรในหมู่บ้านนี้ ได้ร่วมใจกันปลูกสร้างเป็นอาคารชั่วคราวให้ชื่อว่าโรงเรียนประชาบาล ต.โคกม้า
                                (บ้านบาตร) ซึ่งอยู่ทางทิศใต้ของหมู่บ้านห่างประมาณ 5 เส้น
                                นักเรียนที่เกณฑ์เข้าเรียนนั้นได้แยกมาจากโรงเรียนประชาบาล ต.โคกม้า (วัดตะลุงเก่า)
                                ระหว่างนั้นมีครูทำการสอนเพียงคนเดียว คือ นายสอน จ่ายประโคน
                                โรงเรียนนี้ได้ดำเนินอยู่ด้วยเงินช่วยจากการประถมศึกษา จัดการสอนตั้งแต่ชั้นประถมศึกษาปีที่ 1–4
                                โดยการสอนตามประมวลการศึกษาภาค 2 ของกระทรวงศึกษาธิการทุกประการ มาจนถึง พ.ศ. 2521 โรงเรียน
                                จึงได้เปลี่ยนแปลงตามลำดับต่อไปนี้ เปลี่ยนแปลงจากการสอน ภาคบังคับ 4 ปี มาเป็น 6 ปี ในปีการศึกษา
                                2521 และ 2522
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            มีภาวะผู้นำ กิจกรรมเยี่ยม <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                เปี่ยมจิตอาสา รู้ค่าความพอเพียง
                            </span>
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HistorySection;
