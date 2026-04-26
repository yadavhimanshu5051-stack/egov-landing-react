import React from "react";

function Stats() {
  return (
    <section className="stats text-center">
      <img src="/images/World-Map.png" alt="Stats" height="300" width="300" />
      <div className="container">
        <h2>1,000,000,100+ Citizens Impacted</h2>
        <div className="row mt-5">
          <div className="col-md-4"><h4>11B+ Transactions</h4></div>
          <div className="col-md-4"><h4>50+ Partners</h4></div>
          <div className="col-md-4"><h4>20 Years of Service</h4></div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
