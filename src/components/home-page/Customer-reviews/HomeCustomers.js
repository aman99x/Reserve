import React from "react";
import { CustomerCard } from "./CustomerCard";
import "../../../styles/Home-page/Customer-review.css";

export const HomeCustomers = () => {
  return (
    <div className="home-customer-section">
      <div className="home-card-heading" style={{ margin: "50px 0" }}>
        <h1>
          Here's what a few of our customers <br />
          have to say about us{" "}
        </h1>
      </div>
      <div className="cards" style={{ backgroundColor: "#d3d3d345" }}>
        <CustomerCard Name="Nidhi Singh" Customer="customer since 2020" Star="★ 4.5" />
        <CustomerCard Name = "Arun Jaishwal" Customer="customer since 2021" Star="★ 4.7"/>
        <CustomerCard Name = "Dimple Rai" Customer="customer since 2022" Star="★ 4.4"/>
      </div>
    </div>
  );
};
