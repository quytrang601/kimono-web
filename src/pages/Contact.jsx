import React, { useEffect } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactMap from '../components/Contact/ContactMap';

const Contact = () => {
    // Cuộn lên đầu trang khi vào page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-[#FCF9F7] min-h-screen pt-32 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* 1. Header (Gọn gàng hơn) */}
                <header className="mb-20 opacity-0 animate-fade-in-up">
                    <ContactHero />
                </header>

                {/* 2. Phần Info + Bức Ảnh Nghệ Thuật (Trái tim của Layout) */}
                <section className="mb-32 opacity-0 animate-fade-in-up delay-200">
                    <ContactInfo />
                </section>

                {/* 3. Phần Bản đồ (Giữ nguyên nhưng giảm delay một chút cho mượt) */}
                <section className="opacity-0 animate-fade-in-up delay-400 border-t border-gray-200/50 pt-20">
                    <ContactMap />
                </section>

            </div>
        </main>
    );
};

export default Contact;