import React from 'react';
import { Bell } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const Footer = () => {
    return (
        <footer id="about" className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src="/profile.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-gray-800 leading-tight">โรงเรียนบ้านบาตร</span>
                                <span className="font-bold text-sm text-pink-500 leading-tight">(ชัยทัตราษฎร์บํารุง)</span>
                            </div>
                        </div>
                        {/* <p className="text-gray-500 text-sm leading-relaxed">
                            แพลตฟอร์มแจ้งจดหมายข่าวที่ทันสมัย นำเสนอข้อมูลที่ถูกต้อง รวดเร็ว ในรูปแบบที่เข้าใจง่าย
                        </p> */}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">เมนูหลัก</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-pink-500 transition-colors">หน้าหลัก</a></li>
                            <li><a href="#history" onClick={(e) => scrollToSection(e, 'history')} className="hover:text-pink-500 transition-colors">ประวัติ</a></li>
                            <li><a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="hover:text-pink-500 transition-colors">จดหมายข่าวทั้งหมด</a></li>
                            <li><a href="#personnel" onClick={(e) => scrollToSection(e, 'personnel')} className="hover:text-pink-500 transition-colors">บุคลากร</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">ช่วยเหลือ</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-pink-500 transition-colors">คำถามที่พบบ่อย</a></li>
                            <li><a href="#" className="hover:text-pink-500 transition-colors">เงื่อนไขการใช้งาน</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">ติดต่อเรา</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>โทร: 081-266-5104</li>
                            <li>อีเมล: banbarthschoo@gmail.com</li>
                            <li>Facebook: โรงเรียนบ้านบาตร(ชัยทัตราษฎร์บำรุง)</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">ลิขสิทธิ์ © 2025 โรงเรียนบ้านบาตร(ชัยทัตราษฎร์บํารุง).</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
