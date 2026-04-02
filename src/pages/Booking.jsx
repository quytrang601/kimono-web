import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Needed to catch data from ProductDetail
import Reveal from "../components/common/Reveal";
import Toast from "../components/common/Toast";
import BookingBreadcrumb from "../components/Booking/BookingBreadcrumb";
import ServiceSelection from "../components/Booking/ServiceSelection";
import CartSummary from "../components/Booking/CartSummary";
import BookingForm from "../components/Booking/BookingForm";

// Import your existing data
import { packages } from "../data/products";

export default function Booking() {
  const location = useLocation();

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

  // --- PRE-FILL CART FROM PRODUCT DETAIL PAGE ---
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads

    // If the user clicked "Đặt Ngay" on a product page, add that product to the cart
    if (location.state && location.state.prefillProduct) {
      const item = location.state.prefillProduct;

      setCart((prevCart) => {
        // Prevent adding it twice (useful in React Strict Mode)
        const alreadyInCart = prevCart.find((c) => c.id === item.id);
        if (alreadyInCart) return prevCart;

        return [...prevCart, { ...item, qty: 1 }];
      });

      // Show toast and clear history so it doesn't re-add if user refreshes the page
      showToast(`Đã thêm ${item.title}`, "success");
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // --- HANDLERS ---
  const showToast = (message, type = "success") => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ visible: true, message, type });
    toastTimeout.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 1500); // 1.5 seconds so users can read it comfortably
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

  // Dynamic price calculation handling "¥ 30,000 ~ ¥ 45,000" formats
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

  // --- n8n SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast("Vui lòng chọn ít nhất 1 dịch vụ!", "error");
      return;
    }

    // Flattening the JSON payload to exactly match your Google Sheet Columns
    const bookingPayload = {
      "Order ID": `KYO-${Date.now()}`,
      "Created At": new Date().toLocaleString("vi-VN"),
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      Date: formData.date,
      Time: formData.time,
      "Total People": guests.men + guests.women + guests.boys + guests.girls,
      "Details (Men/Women/Boys/Girls)": `${guests.men}/${guests.women}/${guests.boys}/${guests.girls}`,
      Photography: addons.photo ? "Yes" : "No",
      Hairstyling: addons.hair ? "Yes" : "No",
      "Items Summary": cart
        .map((item) => `${item.qty}x ${item.title} (${item.price})`)
        .join("\n"),
      "Estimated Total": calculateTotal(),
    };

    console.log("SENDING TO n8n:", bookingPayload);
    showToast("Đang gửi thông tin đặt lịch...", "success");

    try {
      const response = await fetch(
        "http://localhost:5678/webhook-test/kimono-booking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingPayload),
        },
      );

      if (response.ok) {
        showToast("Đặt lịch thành công!", "success");

        // Clear all states to give the user a fresh screen
        setCart([]);
        setGuests({ men: 0, women: 0, boys: 0, girls: 0 });
        setAddons({ photo: false, hair: false });
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "09:00",
        });
      } else {
        showToast("Có lỗi xảy ra từ máy chủ.", "error");
      }
    } catch (error) {
      console.error(error);
      showToast("Lỗi kết nối mạng, vui lòng kiểm tra lại.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-32 relative">
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
      />

      <main className="max-w-[1300px] mx-auto px-6 py-10">
        <Reveal>
          <BookingBreadcrumb />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1111] mb-6">
              Đặt Lịch Thuê Kimono
            </h1>
            <div className="w-12 h-[1px] bg-[#7F170E]/30 mx-auto"></div>
          </div>
        </Reveal>

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
