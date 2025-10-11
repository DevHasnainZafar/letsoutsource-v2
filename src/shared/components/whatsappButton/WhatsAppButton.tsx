"use client";
import "./whatsappButton.css";
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/441623396943", "_blank");
  };
  return (
    <div className="whatsapp-button-container" onClick={handleClick}>
      <img src="/whatsappicon.webp" alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
