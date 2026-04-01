import React from 'react';

const ContactMap = () => {
    // Địa chỉ chính xác của tiệm tại Gion, Kyoto
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255610.26967623082!2d135.5104605041582!3d35.101250057234395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f153d2e6d21%3A0x7b1aca1c753ae2e9!2sFushimi%20Inari%20Taisha!5e1!3m2!1sen!2s!4v1774977657553!5m2!1sen!2s";

    return (
        <section className="w-full">
            {/* Tiêu đề phụ phía trên bản đồ */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                    <h4 className="text-[#7F170E] font-medium tracking-[0.4em] uppercase text-[10px] opacity-70">
                        Location Guide
                    </h4>
                    <h3 className="text-gray-800 font-serif text-3xl font-light italic">
                        Tìm đường đến <span className="text-[#7F170E] font-normal not-italic text-2xl">Kyo Kimono</span>
                    </h3>
                </div>
                <p className="text-gray-400 text-[11px] uppercase tracking-widest font-light italic pb-1 border-b border-gray-200">
                    * Nằm tại tầng 3, ngay khu vực trung tâm Gion
                </p>
            </div>

            {/* Khung bản đồ nghệ thuật */}
            <div className="relative w-full h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#7F170E]/5 border-4 border-white">
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kyo Kimono Location"
                    className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Overlay nhẹ ở các góc để làm mềm khung hình */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2.5rem]"></div>
            </div>

            {/* Chỉ dẫn thêm dưới bản đồ */}
            <div className="mt-8 flex justify-center">
                <a
                    href="https://maps.app.goo.gl/PTeKot8ee3TXxozaA"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-[#7F170E] transition-colors border-b border-gray-300 pb-1"
                >
                    Mở bằng Google Maps trực tiếp
                </a>
            </div>
        </section>
    );
};

export default ContactMap;