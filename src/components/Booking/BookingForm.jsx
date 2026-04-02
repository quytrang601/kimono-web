import React from "react";
import { HiOutlineUser, HiOutlinePhone, HiOutlineEnvelope, HiOutlineCalendar, HiOutlineClock, HiOutlineInformationCircle } from "react-icons/hi2";

export default function BookingForm({
  formData,
  setFormData,
  guests,
  onGuestChange,
  addons,
  onAddonToggle,
  onSubmit,
}) {
  // GuestCounter được tinh chỉnh để thanh thoát hơn
  const GuestCounter = ({ label, type }) => (
    <div className="flex flex-col justify-center bg-white border border-[#7F170E]/5 rounded-2xl p-4 shadow-sm hover:border-[#7F170E]/20 transition-all duration-300">
      <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-3 font-semibold">{label}</span>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onGuestChange(type, -1)}
          className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#7F170E] hover:text-white hover:border-[#7F170E] transition-all duration-300 shadow-sm"
        >
          <span className="text-lg leading-none">-</span>
        </button>
        <span className="text-sm font-serif font-bold text-[#1a1111]">
          {guests[type]}
        </span>
        <button
          type="button"
          onClick={() => onGuestChange(type, 1)}
          className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#7F170E] hover:text-white hover:border-[#7F170E] transition-all duration-300 shadow-sm"
        >
          <span className="text-lg leading-none">+</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white border border-[#7F170E]/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(127,23,14,0.05)] mt-6 relative overflow-hidden">
      {/* Trang trí góc subtle */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#7F170E]/[0.01] rounded-br-[5rem] -ml-16 -mt-16 border border-[#7F170E]/5"></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-10 h-[1px] bg-[#7F170E]/30"></div>
          <h3 className="text-2xl font-serif text-[#1a1111] tracking-tight">
            Thông tin <span className="italic text-[#7F170E]/80">liên lạc</span>
          </h3>
        </div>

        <form className="space-y-7" onSubmit={onSubmit}>
          {/* Nhóm Họ tên & SĐT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
                <HiOutlineUser className="w-3 h-3" /> Họ và tên <span className="text-[#7F170E]">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ví dụ: Nguyễn Văn A"
                className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm focus:border-[#7F170E]/20 focus:bg-white outline-none transition-all duration-300 shadow-inner"
              />
            </div>
            <div className="relative group">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
                <HiOutlinePhone className="w-3 h-3" /> Số điện thoại <span className="text-[#7F170E]">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="090..."
                className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm focus:border-[#7F170E]/20 focus:bg-white outline-none transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
              <HiOutlineEnvelope className="w-3 h-3" /> Email <span className="text-[#7F170E]">*</span>
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@gmail.com"
              className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm focus:border-[#7F170E]/20 focus:bg-white outline-none transition-all duration-300 shadow-inner"
            />
          </div>

          {/* Ngày & Số người */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
                <HiOutlineUser className="w-3 h-3" /> Tổng số khách
              </label>
              <input
                type="number"
                readOnly
                value={guests.men + guests.women + guests.boys + guests.girls || 1}
                className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm text-[#1a1111] font-medium shadow-inner"
              />
            </div>
            <div className="relative group">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
                <HiOutlineCalendar className="w-3 h-3" /> Ngày thuê <span className="text-[#7F170E]">*</span>
              </label>
              <input
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm text-[#4b5563] focus:border-[#7F170E]/20 focus:bg-white outline-none transition-all duration-300 shadow-inner cursor-pointer"
              />
            </div>
          </div>

          {/* Giờ đến */}
          <div className="relative group">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold transition-colors group-focus-within:text-[#7F170E]/60">
              <HiOutlineClock className="w-3 h-3" /> Giờ đến dự kiến <span className="text-[#7F170E]">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-[#FCF9F7] border border-transparent rounded-2xl p-4 text-sm text-[#4b5563] focus:border-[#7F170E]/20 focus:bg-white outline-none appearance-none transition-all duration-300 shadow-inner cursor-pointer"
              >
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Warning Box nâng cấp */}
            <div className="bg-[#7F170E]/[0.03] p-4 rounded-2xl mt-4 flex gap-3 items-start border border-[#7F170E]/5">
              <HiOutlineInformationCircle className="w-5 h-5 text-[#7F170E]/60 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-500 leading-relaxed italic">
                Lưu ý: Phụ phí sẽ được áp dụng cho các lượt đặt lịch sớm hơn 09:00 hoặc muộn hơn 17:00. Vui lòng liên hệ để được hỗ trợ chi tiết.
              </p>
            </div>
          </div>

          {/* Chi tiết đoàn khách - Card-in-card style */}
          <div className="bg-[#FCF9F7] rounded-[2rem] p-6 border border-[#7F170E]/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#7F170E]/40"></div>
              <h4 className="text-[11px] font-bold text-[#1a1111] uppercase tracking-[0.2em]">
                Chi tiết đoàn khách
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GuestCounter label="Nam (Người lớn)" type="men" />
              <GuestCounter label="Nữ (Người lớn)" type="women" />
              <GuestCounter label="Bé trai (Trẻ em)" type="boys" />
              <GuestCounter label="Bé gái (Trẻ em)" type="girls" />
            </div>
          </div>

          {/* Dịch vụ đi kèm */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#7F170E]/40"></div>
              <h4 className="text-[11px] font-bold text-[#1a1111] uppercase tracking-[0.2em]">
                Dịch vụ đi kèm
              </h4>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onAddonToggle("photo")}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 text-xs font-bold rounded-2xl border transition-all duration-500 ${addons.photo ? "bg-[#7F170E] text-white border-[#7F170E] shadow-lg shadow-[#7F170E]/20" : "bg-white border-gray-100 text-gray-500 hover:border-[#7F170E]/30 hover:text-[#7F170E]"}`}
              >
                <img src="/camera.png" alt="Camera" className="w-6 h-6 inline-block align-middle object-contain" /> Chụp ảnh nghệ thuật
              </button>
              <button
                type="button"
                onClick={() => onAddonToggle("hair")}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 text-xs font-bold rounded-2xl border transition-all duration-500 ${addons.hair ? "bg-[#7F170E] text-white border-[#7F170E] shadow-lg shadow-[#7F170E]/20" : "bg-white border-gray-100 text-gray-500 hover:border-[#7F170E]/30 hover:text-[#7F170E]"}`}
              >
                <img src="public/stars.png" alt="hair" className="w-8 h-8 inline-block align-middle object-contain" /> Làm tóc chuyên nghiệp
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full overflow-hidden bg-[#1a1111] text-white py-5 mt-4 rounded-2xl transition-all duration-500 font-bold tracking-[0.3em] uppercase text-[11px] hover:bg-[#7F170E] shadow-xl shadow-black/5"
          >
            <span className="relative z-10">Gửi Đặt Lịch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </form>
      </div>
    </div>
  );
}