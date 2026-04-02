import '../styles/index.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import file CSS của AOS
// Nhập khẩu tất cả các mảnh ghép
import TopBar from '../components/common/TopBar';
import Navbar from '../components/common/Navbar/Navbar';
import HeroSlider from '../components/Home/HeroSlider/HeroSlider';
import Footer from '../components/common/Footer/Footer';
import Sakura from '../components/common/Sakura/Sakura';
import About from '../components/Home/Aboutstore'
import Process from '../components/Home/Process';
import Review from '../components/Home/Review/Review';
import CTA from '../components/Home/CallToAction/CTA'

export default function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Khởi tạo AOS bên trong useEffect để đảm bảo chỉ chạy ở phía Client
        try {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false,
                offset: 50, // Giảm offset xuống để hiệu ứng chạy sớm hơn
            });

            // Refresh lại AOS để nó nhận diện các phần tử mới
            AOS.refresh();
        } catch (error) {
            console.error("AOS initialization failed:", error);
        }
    }, []);

    return (
        <div className="font-sans flex flex-col min-h-screen">
            {/* Tạo cánh hoa rơi */}
            {/* <Sakura /> */}
            {/* <TopBar /> */}
            {/* <Navbar /> */}

            {/* 3. Hình ảnh động */}
            <main className="flex-grow">
                <HeroSlider />
                <About />
                <Process />
                <Review />
                <CTA />
            </main>

            {/* 4. Chân trang */}
            {/* <Footer /> */}
        </div>
    );
}