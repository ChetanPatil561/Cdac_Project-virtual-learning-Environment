import React from "react";
import "./common.css";

function CoursesList() {
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          
          <div className="row justify-content-center">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>
                        <stron>Title : </stron>Quant ruybi shirts
                      </h5>
                      <h6>
                        <strong>Rating : </strong>XYZ{" "}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      </h6>
                      <div>
                        Rating : *****
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">$17.99</h4>
                       
                      </div>
                      <h6 className="text-success">Free</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                          Details
                        </button>
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursesList;
