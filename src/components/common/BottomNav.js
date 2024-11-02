import React, { forwardRef } from "react";
import "./BottomNav.scss";

const BottomNav = forwardRef(({ onSelect, activeIndex }, navRef) => {

  return (
    <ul className="nav nav-justified border-top bg-white" ref={navRef}>
      <li className="nav-item">
        <button type="button" className={`btn w-100 h-100 ${activeIndex === 0 ? "text-primary" : ""} d-flex flex-column align-items-center p-0`} onClick={() => onSelect(0)}>
          { activeIndex === 0 && <div className='bg-primary w-50' style={{ height: '1px'}} /> }
          <i className="bi bi-card-list" />
          <span>Menu</span>
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className={`btn w-100 h-100 ${activeIndex === 1 ? "text-primary" : ""} d-flex flex-column align-items-center p-0`} onClick={() => onSelect(1)}>
          { activeIndex === 1 && <div className='bg-primary w-50' style={{ height: '1px'}} /> }
          <i className="bi bi-cart-check" />
          <span>Order</span>
        </button>
      </li>
    </ul>
  )
});

export default BottomNav;
