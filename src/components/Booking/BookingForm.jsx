import React from "react";

export default function BookingForm({
  formData,
  setFormData,
  guests,
  onGuestChange,
  addons,
  onAddonToggle,
  onSubmit,
}) {
  const GuestCounter = ({ label, type }) => (
    <div className="flex flex-col justify-center bg-[#F9F7F5] border border-[#1a1111]/5 rounded-xl p-3">
      <span className="text-xs text-[#6b7280] mb-2">{label}</span>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={() => onGuestChange(type, -1)}
          className="w-6 h-6 rounded-full border border-[#7F170E]/20 flex items-center justify-center text-[#1a1111] hover:bg-[#7F170E] hover:text-white transition-colors text-sm leading-none"
        >
          -
        </button>
        <span className="text-sm font-medium w-4 text-center">
          {guests[type]}
        </span>
        <button
          type="button"
          onClick={() => onGuestChange(type, 1)}
          className="w-6 h-6 rounded-full border border-[#7F170E]/20 flex items-center justify-center text-[#1a1111] hover:bg-[#7F170E] hover:text-white transition-colors text-sm leading-none"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white border border-[#7F170E]/10 rounded-[2.5rem] p-8 shadow-[#7F170E]/5 shadow-xl mt-6">
      <h3 className="text-lg font-serif text-[#1a1111] mb-6">
        Thông tin liên lạc
      </h3>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] text-[#4b5563] mb-1.5">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Họ và tên..."
              className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm focus:border-[#7F170E]/30 focus:bg-white outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[#4b5563] mb-1.5">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="090..."
              className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm focus:border-[#7F170E]/30 focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] text-[#4b5563] mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="name@example.com"
            className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm focus:border-[#7F170E]/30 focus:bg-white outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] text-[#4b5563] mb-1.5">
              Số người <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              readOnly
              value={
                guests.men + guests.women + guests.boys + guests.girls || 1
              }
              className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm focus:border-[#7F170E]/30 focus:bg-white outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[#4b5563] mb-1.5">
              Ngày thuê <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm text-[#4b5563] focus:border-[#7F170E]/30 focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] text-[#4b5563] mb-1.5">
            Giờ đến dự kiến <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-[#F9F7F5] border border-transparent rounded-xl p-3 text-sm text-[#4b5563] focus:border-[#7F170E]/30 focus:bg-white outline-none appearance-none transition-all"
          >
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
          </select>
          <div className="bg-[#FEF9E7]/50 p-3 rounded-xl mt-3 flex gap-2 items-start border border-[#F2C94C]/20">
            <svg
              className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-[10px] text-[#92400e] leading-relaxed">
              Lưu ý: Phụ phí sẽ được áp dụng cho các lượt đặt lịch sớm hơn 09:00
              hoặc muộn hơn 17:00. Vui lòng liên hệ để được hỗ trợ chi tiết.
            </p>
          </div>
        </div>

        <div className="bg-[#FCF9F7] rounded-2xl p-4 border border-[#7F170E]/5">
          <h4 className="text-[11px] font-semibold text-[#1a1111] mb-3 uppercase tracking-wider">
            Chi tiết đoàn khách
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <GuestCounter label="Nam (Người lớn)" type="men" />
            <GuestCounter label="Nữ (Người lớn)" type="women" />
            <GuestCounter label="Bé trai (Trẻ em)" type="boys" />
            <GuestCounter label="Bé gái (Trẻ em)" type="girls" />
          </div>
        </div>

        <div className="pt-2">
          <h4 className="text-[11px] font-semibold text-[#1a1111] mb-3 uppercase tracking-wider">
            Dịch vụ đi kèm
          </h4>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onAddonToggle("photo")}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-xl border transition-all duration-300 ${addons.photo ? "bg-[#7F170E] text-white border-[#7F170E] shadow-md shadow-[#7F170E]/20" : "bg-white border-[#7F170E]/20 text-[#4b5563] hover:border-[#7F170E]/50"}`}
            >
              📸 Chụp ảnh
            </button>
            <button
              type="button"
              onClick={() => onAddonToggle("hair")}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-xl border transition-all duration-300 ${addons.hair ? "bg-[#7F170E] text-white border-[#7F170E] shadow-md shadow-[#7F170E]/20" : "bg-white border-[#7F170E]/20 text-[#4b5563] hover:border-[#7F170E]/50"}`}
            >
              ✨ Làm tóc
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A46A6A] hover:bg-[#7F170E] text-white py-4 mt-6 rounded-xl transition-all duration-300 font-medium tracking-wide shadow-lg shadow-[#7F170E]/10"
        >
          Gửi Đặt Lịch
        </button>
      </form>
    </div>
  );
}
