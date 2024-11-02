import React, { forwardRef } from "react";

const NavBar = forwardRef((_property, navRef) => {
  return (
    <nav className="sticky-nav navbar bg-primary p-2" ref={navRef}>
      <div className="navbar-brand fw-bold text-white">
        Anie Restaurant
      </div>
    </nav>
  )
});

export default NavBar;