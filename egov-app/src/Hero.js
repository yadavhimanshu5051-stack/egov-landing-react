import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>20 years of digital transformation</h1>
            <p>Catalysing change across India with scalable public solutions.</p>
            <button className="btn btn-primary btn-custom me-2">Our Impact</button>
            <button className="btn btn-outline-primary btn-custom">Our Approach</button>
          </div>
          <div className="col-md-6 text-center">
            <img src="/images/main-image-png-1024x553.png" className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
