import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { PiArrowLeftLight, PiArrowRightLight } from 'react-icons/pi';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white relative overflow-hidden h-full shadow-inner" ref={ref}>
            <div className="w-full h-full relative p-[1px] bg-white">
                <div className="w-full h-full overflow-hidden bg-[#FDFDFD]">
                    <img src={props.src} alt="Look" className="w-full h-full object-cover select-none" />
                </div>
                <div className={`absolute top-0 h-full w-[1px] bg-black/5 z-20 ${props.number % 2 === 0 ? 'right-4' : 'left-4'}`}></div>
                <div className={`absolute top-0 h-full w-24 pointer-events-none z-10 
                    ${props.number % 2 === 0 ? 'left-0 bg-gradient-to-r from-black/[0.08] to-transparent' : 'right-0 bg-gradient-to-l from-black/[0.08] to-transparent'} 
                    opacity-40`}></div>
            </div>
        </div>
    );
});

const AlbumSlider = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Dùng 'smooth' nếu muốn cuộn từ từ, 'instant' để bật lên là ở đầu luôn
        });
    }, []);
    const bookRef = useRef();
    const containerRef = useRef(null); // Ref để theo dõi vị trí cuộn của cả section
    const [pageDisplay, setPageDisplay] = useState("1 - 2");
    const [dimensions, setDimensions] = useState({ width: 450, height: 600 });

    // 1. LOGIC THEO DÕI CUỘN CHUỘT ĐỂ TẠO HIỆU ỨNG KÉO LÊN
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Bắt đầu khi mép trên album chạm đáy màn hình
    });

    // Tạo chuyển động mượt (Spring) để tránh bị giật khi cuộn nhanh
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Biến Progress thành giá trị Y (Album sẽ trượt từ dưới 300px lên 0)
    const y = useTransform(smoothProgress, [0, 0.4], [300, 0]);
    // Hiệu ứng mờ dần (Fade in)
    const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

    useEffect(() => {
        const updateDimensions = () => {
            const vh = window.innerHeight;
            const bookHeight = vh * 0.65;
            setDimensions({ width: (bookHeight * 3.2) / 4, height: bookHeight });
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const images = [
        "/ảnh_tóc_dọc_1.jpg", "/ảnh_tóc_dọc_4.jpg",
        "/ảnh_tóc_ngang_3.jpg", "/ảnh_tóc_dọc_2.jpg",
        "/ảnh_tóc_ngang_5.jpg", "/ảnh_tóc_dọc_3.jpg",
        "/ảnh_tóc_dọc_1.jpg", "/ảnh_tóc_dọc_4.jpg",
    ];

    const onFlip = useCallback((e) => {
        const currentIndex = e.data; // Đây là index của trang bên trái (0, 2, 4...)
        setPageDisplay({
            start: currentIndex + 1,
            end: Math.min(currentIndex + 2, images.length)
        });
    }, [images.length]);

    return (
        <section
            ref={containerRef}
            className="relative z-20 w-full min-h-[120vh] bg-[#FCF9F7] flex flex-col items-center justify-start pt-[15vh] overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
        >
            {/* CONTAINER CHỨA NỘI DUNG SẼ TRƯỢT THEO CHUỘT */}
            <motion.div
                style={{ y, opacity }}
                className="relative flex flex-col items-center w-full"
            >
                {/* DECOR TRANG TRÍ (Di chuyển chậm hơn để tạo hiệu ứng Parallax) */}
                <div className="absolute inset-0 pointer-events-none select-none z-0">
                    <motion.div
                        style={{ y: useTransform(smoothProgress, [0, 1], [0, -150]) }}
                        className="absolute top-[-5%] left-[-8%] w-[32vw] h-[45vw] rotate-[-12deg] opacity-[0.08] blur-[1px] hidden xl:block"
                    >
                        <img src={images[4]} className="w-full h-full object-cover grayscale" alt="" />
                    </motion.div>
                    <motion.div
                        style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
                        className="absolute bottom-[0%] right-[-5%] w-[30vw] h-[42vw] rotate-[10deg] opacity-[0.07] blur-[1px] hidden xl:block"
                    >
                        <img src={images[2]} className="w-full h-full object-cover grayscale" alt="" />
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <span className="text-[20vw] font-serif italic text-[#7F170E]/[0.012] whitespace-nowrap">KYO LOOKBOOK</span>
                    </div>
                </div>

                {/* CUỐN SÁCH CHÍNH */}
                <div className="relative z-10 p-[1.5px] bg-[#DED9D5] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] rounded-[1px]">
                    <div className="bg-white p-0.5">
                        <HTMLFlipBook
                            width={dimensions.width} height={dimensions.height}
                            size="fixed" showCover={false} usePortrait={false}
                            flippingTime={1000} onFlip={onFlip} ref={bookRef}
                            drawShadow={true} className="kyo-responsive-book"
                        >
                            {images.map((src, index) => (
                                <Page key={index} src={src} number={index + 1} />
                            ))}
                        </HTMLFlipBook>
                    </div>
                </div>

                {/* BỘ ĐẾM */}
                <div className="mt-10 flex flex-col items-center w-full max-w-[400px]">
                    <div className="flex items-center justify-between w-full px-4 text-gray-500">
                        <button
                            onClick={() => bookRef.current.pageFlip().flipPrev()}
                            className="p-2 opacity-30 hover:opacity-100 transition-all hover:-translate-x-1"
                        >
                            <PiArrowLeftLight className="text-2xl" />
                        </button>

                        <div className="flex flex-col items-center">
                            <span className="text-[9px] uppercase tracking-[0.6em] text-[#7F170E]/50 font-bold mb-1">
                                Collection
                            </span>
                            <div className="text-[13px] font-serif italic tracking-widest flex items-center">
                                {/* Hiển thị 1-2, 3-4,... */}
                                <span className="text-[#7F170E]">
                                    {pageDisplay.start} - {pageDisplay.end}
                                </span>
                                <span className="mx-3 opacity-20">/</span>
                                <span className="text-gray-400">{images.length}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => bookRef.current.pageFlip().flipNext()}
                            className="p-2 opacity-30 hover:opacity-100 transition-all hover:translate-x-1"
                        >
                            <PiArrowRightLight className="text-2xl" />
                        </button>
                    </div>

                    {/* THANH PROGRESS ĐÃ SỬA LOGIC WIDTH */}
                    <div className="mt-6 w-32 h-[1px] bg-gray-200/40 relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#7F170E]/40 transition-all duration-500 ease-out"
                            style={{
                                width: `${(pageDisplay.end / images.length) * 100}%`
                            }}
                        ></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AlbumSlider;