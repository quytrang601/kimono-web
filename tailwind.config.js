/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px', // Đây thường là mốc của các máy màn hình lớn
        },
        extend: {
            fontFamily: {
                // Ghi đè class 'font-serif' cũ bằng font mới
                serif: ['"Playfair Display"', 'serif'],

                // Nếu bạn muốn đổi cả font mặc định (không chân) toàn web, thì thêm dòng sans này:
                // sans: ['"Tên Font Mới"', 'sans-serif'], 
            },
        },
    },
    plugins: [],
}