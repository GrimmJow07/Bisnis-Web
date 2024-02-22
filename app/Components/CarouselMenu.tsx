import React from "react";
import { slides } from "../constants/index";

function Carousel() {
  return (
    <div
      className="carousel w-100 h-100 bg-transparent text-black"
      style={{ paddingTop: 40, marginLeft: 380, marginRight: 320 }}
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.imgUrl}
            className="w-full"
            style={{ width: 1000, height: 600 }}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={slide.prev}
              className="btn btn-circle bg-white text-slate-500"
            >
              ❮
            </a>
            <a
              href={slide.next}
              className="btn btn-circle bg-white text-slate-500"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
