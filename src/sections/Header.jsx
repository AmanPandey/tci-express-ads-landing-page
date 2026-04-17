import React, { useState } from "react";
import FormModal from "./FormModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mbg8i-header">
        <div className="mbg8i-header__inner">

          <div className="mbg8i-logos">
            <img src="/logo.svg" className="mbg8i-logo" />
            <span className="mbg8i-logo-sep" />
            <img src="/mbg-logo.svg" className="mbg8i-logo" />
          </div>

          <button
            className="cta-main-contact"
            onClick={() => setOpen(true)}
          >
            <span className="cta-main-contact__text">Contact Us</span>
            <span className="cta-main-contact__icon">✉</span>
          </button>

        </div>
      </header>

      <FormModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}