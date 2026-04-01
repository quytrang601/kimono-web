import React from 'react';
import AlbumHero from '../components/Album/AlbumHero';
import AlbumSlider from '../components/Album/AlbumSlider';

const Album = () => {
    return (
        // Bỏ pt-32, để AlbumHero tự xử lý khoảng cách với Navbar
        <main className="bg-[#FCF9F7] min-h-screen overflow-x-hidden">
            <AlbumHero />

            {/* Slider bắt đầu ngay sau khi cuộn hết Hero */}
            <div className="bg-white">
                <AlbumSlider />
            </div>
        </main>
    );
};

export default Album;