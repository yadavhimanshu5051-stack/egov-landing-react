import React from "react";

function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="/images/eGov-Foundation-768x291.png" alt="eGov" height="30" />
            <h6>Digital public infrastructure for India</h6>
          </div>
          <div className="col-md-4">
            <h6>Links</h6>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Careers</h6>
          </div>
          <div className="col-md-4">
            <h6>Subscribe</h6>
            <input className="form-control mb-2" placeholder="Email" aria-label="Email" />
            <button className="btn btn-primary w-100">Subscribe</button>
          </div>
        </div>
        <div className="text-center mt-4">
          <small>© 2026 eGov. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
