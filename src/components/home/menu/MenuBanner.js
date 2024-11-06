import React, { useState } from "react";

const MenuBanner = () => {
  const banners = [
    "/assets/home/banner.png",
    "/assets/home/banner.png",
    "/assets/home/banner.png"
  ]
  const [bannerIndex, setBannerIndex] = useState(0);

  const onPrevious = () => {
    setBannerIndex((prev) => Math.max(0, prev - 1));
  }

  const onNext = () => {
    setBannerIndex((prev) => Math.min(banners.length - 1, prev + 1));
  }

  const onSelect = (index) => {
    setBannerIndex(index);
  }

  return (
    <section className="bg-primary m-0 p-0">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {
            banners.map((_, index) => 
              <button type="button" data-bs-target="#carouselExampleIndicators" className={`${bannerIndex === index ? "active" : ""}`} key={index} onClick={() => onSelect(index)}/>
            )
          }
        </div>
        <div className="carousel-inner">
          {
            banners.map((banner, index) => 
              <div key={index} className={`carousel-item ${bannerIndex === index ? "active" : ""}`}>
                <img src={banner} className="d-block w-100" alt="..." />
              </div>
            )
          }
        </div>
        <button className="carousel-control-prev" type="button" onClick={onPrevious}>
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" onClick={onNext}>
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
};

export default MenuBanner;
