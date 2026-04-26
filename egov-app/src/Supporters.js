import React from "react";

function Supporters() {
  return (
    <section className="text-center">
      <h3>Our Supporters</h3>
      <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
        <img src="/images/omidyar-network.png" alt="Omidyar Network" height="200" />
        <img src="/images/08tata.gif" alt="Tata Trusts" height="150" />
        <img src="/images/share.jpg" alt="Nilekani Philanthropies" height="150" />
      </div>
    </section>
  );
}

export default Supporters;
