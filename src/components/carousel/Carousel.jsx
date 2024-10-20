import React from "react";

import { UncontrolledCarousel } from "reactstrap";

function Carousel() {
  return (
    <header>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ filter: "brightness(100%)",  }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="9000">
            <img
              src={require("../../assets/1.jpg")}
              class="d-block w-100"
             
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <img
              src={require("../../assets/6.jpg")}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src={require("../../assets/7.jpg")}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}

export default Carousel;
