import React, { useState } from "react";

const products = [
  { id: 1, name: "Urban Transformation", category: "Governance", price: "₹500", image: "/images/urban.webp" },
  { id: 2, name: "DIGIT Newsletter", category: "News", price: "₹200", image: "/images/310.jpg" },
  { id: 3, name: "Partnership Stories", category: "Impact", price: "₹300", image: "/images/biusiness.jpeg" },
];

function Latest() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <section>
      <div className="container">
        <h2 className="text-center mb-5">Latest at eGov</h2>
        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            placeholder="Search..."
            className="form-control w-50"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="form-select w-25"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Governance</option>
            <option>News</option>
            <option>Impact</option>
          </select>
        </div>
        <div className="row g-4">
          {filtered.length > 0 ? (
            filtered.map(p => (
              <div className="col-md-4" key={p.id}>
                <div className="card card-hover">
                  <img src={p.image} className="card-img-top" alt={p.name} />
                  <div className="card-body">
                    <h5>{p.name}</h5>
                    <p>{p.category} | {p.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Latest;
