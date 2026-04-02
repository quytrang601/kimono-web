import React from "react";

export default function CartSummary({
  cart,
  onUpdateQty,
  onRemove,
  calculateTotal,
}) {
  return (
    <div className="bg-white border border-[#7F170E]/10 rounded-[2.5rem] p-8 shadow-[#7F170E]/5 shadow-xl">
      <h3 className="text-lg font-serif text-[#1a1111] mb-6">
        Lựa chọn của bạn
      </h3>

      {cart.length === 0 ? (
        <p className="text-sm text-[#6b7280] italic text-center py-6">
          Chưa có dịch vụ nào được chọn
        </p>
      ) : (
        <div className="space-y-5 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="text-xs text-[#1a1111] font-medium leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-[#8e8e8e] text-[10px]">{item.price}</p>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, -1)}
                  className="text-gray-400 hover:text-[#7F170E] transition-colors"
                >
                  -
                </button>
                <span className="w-3 text-center font-medium">{item.qty}</span>
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, 1)}
                  className="text-gray-400 hover:text-[#7F170E] transition-colors"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="text-red-300 hover:text-red-500 ml-2 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-[#7F170E]/10 pt-6 flex justify-between items-center bg-[#FCF9F7] -mx-8 -mb-8 px-8 pb-8 rounded-b-[2.5rem]">
        <span className="font-medium text-[#1a1111] text-sm">
          Tổng tạm tính:
        </span>
        <span className="text-lg font-serif font-bold text-[#7F170E]">
          {calculateTotal()}
        </span>
      </div>
    </div>
  );
}
