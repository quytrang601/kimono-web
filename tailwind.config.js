/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
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