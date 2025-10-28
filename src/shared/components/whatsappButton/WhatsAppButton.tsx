"use client";
import Image from "next/image";
import "./whatsappButton.css";
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/441623396943", "_blank");
  };
  return (
    <div className="whatsapp-button-container" onClick={handleClick}>
      <Image
        src="/whatsappicon.webp"
        alt="WhatsApp"
        className="whatsapp-icon"
        width={50}
        height={50}
      />
    </div>
  );
};

export default WhatsAppButton;
