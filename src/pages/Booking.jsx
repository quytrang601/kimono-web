import React, { useState, useRef, useEffect } from "react";
import Reveal from "../components/common/Reveal";
import Toast from "../components/common/Toast";
import BookingBreadcrumb from "../components/Booking/BookingBreadcrumb";
import ServiceSelection from "../components/Booking/ServiceSelection";
import CartSummary from "../components/Booking/CartSummary";
import BookingForm from "../components/Booking/BookingForm";
import BookingHero from "../components/Booking/BookingHero";
// Import your existing data
import { packages } from "../data/products";

export default function Booking() {
  // --- STATE ---
  const [cart, setCart] = useState([]);
  const [guests, setGuests] = useState({ men: 0, women: 0, boys: 0, girls: 0 });
  const [addons, setAddons] = useState({ photo: false, hair: false });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "09:00",
  });

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const toastTimeout = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- HANDLERS ---
  const showToast = (message, type = "success") => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ visible: true, message, type });
    toastTimeout.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 500);
  };

  const handleAddToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)),
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    showToast(`Đã thêm ${item.title}`, "success");
  };

  const handleUpdateQty = (id, delta) => {
    setCart(
      cart
        .map((c) => {
          if (c.id === id) {
            const newQty = c.qty + delta;
            return newQty > 0 ? { ...c, qty: newQty } : null;
          }
          return c;
        })
        .filter(Boolean),
    );
  };

  const handleRemove = (id) => {
    const itemToRemove = cart.find((c) => c.id === id);
    if (itemToRemove) {
      setCart(cart.filter((c) => c.id !== id));
      showToast(`Đã xóa ${itemToRemove.title}`, "error");
    }
  };

  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  const toggleAddon = (type) =>
    setAddons((prev) => ({ ...prev, [type]: !prev[type] }));

  // Dynamic price calculation
  const calculateTotal = () => {
    let totalMin = 0;
    let totalMax = 0;

    cart.forEach((item) => {
      const matches = item.price.match(/[\d,]+/g);
      if (matches) {
        const vals = matches.map((m) => parseInt(m.replace(/,/g, ""), 10));
        const min = vals[0];
        const max = vals.length > 1 ? vals[vals.length - 1] : vals[0];
        totalMin += min * item.qty;
        totalMax += max * item.qty;
      }
    });

    if (totalMin === 0) return "¥ 0";
    if (totalMin === totalMax) return `¥ ${totalMin.toLocaleString()}`;
    return `¥ ${totalMin.toLocaleString()} ~ ¥ ${totalMax.toLocaleString()}`;
  };

  // --- n8n SUBMISSION FORMAT ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating a clean JSON payload for your Webhook -> Google Sheets
    const bookingPayload = {
      order_id: `KYO-${Date.now()}`,
      created_at: new Date().toLocaleString("vi-VN"),
      customer: {
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        appointment_date: formData.date,
        appointment_time: formData.time,
      },
      party_details: {
        adult_men: guests.men,
        adult_women: guests.women,
        kids_boys: guests.boys,
        kids_girls: guests.girls,
        total_people: guests.men + guests.women + guests.boys + guests.girls,
      },
      extra_services: {
        photography: addons.photo ? "Yes" : "No",
        hairstyling: addons.hair ? "Yes" : "No",
      },
      estimated_total: calculateTotal(),
      // Send cart items as a stringified list so it fits in one Google Sheet cell easily
      items_summary: cart
        .map((item) => `${item.qty}x ${item.title} (${item.price})`)
        .join("\n"),
    };

    console.log("SENDING TO n8n:", bookingPayload);
    showToast("Đang gửi thông tin đặt lịch...", "success");

    /* ADD YOUR N8N WEBHOOK LOGIC HERE:
    try {
      await fetch("YOUR_WEBHOOK_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload)
      });
      alert("Đặt lịch thành công!");
      // Optionally clear cart and form here
    } catch (error) {
      console.error(error);
      alert("Lỗi kết nối mạng, vui lòng thử lại.");
    }
    */
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans relative">
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
      />

      <main className="max-w-[1300px] mx-auto px-6 py-10">
        {/* <Reveal>
          <BookingBreadcrumb />
        </Reveal> */}
        <BookingHero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <ServiceSelection
                packages={packages}
                onAddToCart={handleAddToCart}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <Reveal delay={0.3} direction="left">
              <CartSummary
                cart={cart}
                onUpdateQty={handleUpdateQty}
                onRemove={handleRemove}
                calculateTotal={calculateTotal}
              />
              <BookingForm
                formData={formData}
                setFormData={setFormData}
                guests={guests}
                onGuestChange={handleGuestChange}
                addons={addons}
                onAddonToggle={toggleAddon}
                onSubmit={handleSubmit}
              />
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}
