import React from "react";

function Features() {
  return (
    <section>
      <div className="container">
        <h2 className="text-center mb-5">Big Problems Need Bold Approaches</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 card-hover">
              <img src="/images/twiph-hero.png" alt="Public Health" />
              <h5 className="mt-3">Public Health</h5>
              <p>210+ cities, 2Bn+ transactions</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 card-hover">
              <img src="/images/Stronger-Communities.png" alt="Local Governance" />
              <h5 className="mt-3">Local Governance</h5>
              <p>Empowering municipalities with digital tools</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 card-hover">
              <img src="/images/water-sanitation.jpg" alt="Water & Sanitation" />
              <h5 className="mt-3">Water & Sanitation</h5>
              <p>Improving services for citizens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
