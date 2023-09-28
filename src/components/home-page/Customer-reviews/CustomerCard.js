import React from "react";

export const CustomerCard = () => {
  return (
    <div className="customer-card">
      <div className="customer-section-head">
        <div className="customer-details">
          <p style={{ fontSize: "20px", fontWeight: "600" }}>Nidhi Singh</p>
          <p style={{ fontSize: "14px" }}>Customer Since 2022</p>
        </div>
      </div>
      <div className="customer-rating">
        <span>★ 4.5</span>
      </div>
      <div className="customer-feedback">
        Awesome travel experience with reserve excellent staf.
        <br />
      </div>
    </div>
  );
};
