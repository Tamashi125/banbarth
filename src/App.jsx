import React, { useState, useEffect } from 'react';
import { Search, ChevronUp, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import NewsCard from './components/NewsCard';
import NewsModal from './components/NewsModal';
import PersonnelCategories from './components/PersonnelCategories';
import Footer from './components/Footer';
import { newsData } from './data/newsData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // State สำหรับควบคุมการแสดงผลข่าว (เริ่มที่ 3 ชิ้น)
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredNews = newsData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // คำนวณข่าวที่จะนำมาแสดงผล
  const displayedNews = isExpanded ? filteredNews : filteredNews.slice(0, 5);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-pink-100 selection:text-pink-600">
      <Navbar scrolled={scrolled} onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />

        {/* History Section Added Here */}
        <HistorySection />

        <div id="news" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">จดหมายข่าว</h2>
              <p className="text-gray-500 font-light">ติดตามความเคลื่อนไหวและกิจกรรมที่น่าสนใจ</p>
            </div>

            <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-pink-100 focus-within:border-pink-300 transition-all">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="ค้นหาข่าวสาร"
                className="bg-transparent border-none focus:outline-none text-sm w-full pt-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNews.length > 0 ? (
              displayedNews.map((item, index) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  featured={index === 0 && !searchTerm && !isExpanded} // แสดงFeatured เฉพาะตอนยังไม่ค้นหาและยังไม่กดดูทั้งหมด
                  onReadMore={setSelectedNews}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">
                <Search size={48} className="mx-auto mb-4 opacity-20" />
                <p>ไม่พบข่าวสารที่คุณค้นหา</p>
              </div>
            )}
          </div>

          {/* ปุ่ม ดูข่าวทั้งหมด / ย่อรายการข่าว */}
          {filteredNews.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-600 transition-colors border-b-2 border-transparent hover:border-pink-500 pb-1"
              >
                {isExpanded ? 'Hide' : 'View All'}
                {isExpanded ? <ChevronUp size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          )}
        </div>

        {/* เปลี่ยนจาก Newsletter เป็น PersonnelCategories */}
        <PersonnelCategories />
      </main>

      <Footer />

      {/* Modal Overlay - Removed AnimatePresence wrapper for static rendering */}
      {selectedNews && (
        <NewsModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
};

export default App;