/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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