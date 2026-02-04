import React from 'react';
import { Bell, Phone, Menu } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { scrollToSection } from '../utils/helpers';

const Navbar = ({ scrolled, onMenuClick }) => {
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md border-b border-pink-100 py-0 shadow-sm'
                : 'bg-transparent border-transparent py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
                        onClick={(e) => scrollToSection(e, 'home')}
                    >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${scrolled ? 'text-white' : 'text-pink-500'
                            }`}>
                            <img src="/profile.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-800' : 'text-white'
                            }`}>
                            โรงเรียนบ้านบาตร<span className={`${scrolled ? 'text-pink-500' : 'text-pink-200'} hidden md:inline`}>{'(ชัยทัตราษฎร์บํารุง)'}</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex space-x-6 items-center">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className={`font-medium transition-colors hover:text-pink-400 ${scrolled ? 'text-gray-600' : 'text-white/90'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        {/* ปรับเปลี่ยนปุ่มเป็นแสดงเบอร์โทรศัพท์ 2 บรรทัด พร้อมไอคอน */}
                        <button className={`px-5 py-1 rounded-full transition-all shadow-md flex flex-col items-center justify-center leading-tight ${scrolled
                            ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-pink-200'
                            : 'bg-white text-pink-600 hover:bg-pink-50 shadow-black/10'
                            }`}>
                            <div className="flex items-center gap-1.5">
                                <Phone size={14} className={scrolled ? 'text-white' : 'text-pink-600'} />
                                <span className="text-sm font-bold">081-266-5104</span>
                            </div>
                            <span className="text-[10px] opacity-90">เบอร์ติดต่อ</span>
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={onMenuClick}
                            className={`focus:outline-none transition-colors ${scrolled ? 'text-gray-600 hover:text-pink-500' : 'text-white hover:text-pink-200'
                                }`}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
