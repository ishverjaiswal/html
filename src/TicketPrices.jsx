import React, { useState } from "react";
import "./TicketPrices.css"; // Add CSS for styling

const TicketPrices = () => {
  // State for ticket selections
  const [tickets, setTickets] = useState({
    indianAdults: 0,
    indianChildren: 0,
    indianUnder6: 0,
    foreignAdults: 0,
    foreignChildren: 0,
    foreignUnder6: 0,
  });

  // Function to handle dropdown changes
  const handleChange = (event, category) => {
    setTickets({
      ...tickets,
      [category]: parseInt(event.target.value),
    });
  };

  // Function to calculate total price
  const totalPrice = () => {
    return (
      tickets.indianAdults * 70 +
      tickets.indianChildren * 35 +
      tickets.foreignAdults * 400 +
      tickets.foreignChildren * 200
    );
  };

  return (
    <div className="ticket-container">
      <h1>Ticket Prices</h1>

      {/* Indian Prices Section */}
      <div className="section">
        <h2>For Indians</h2>
        <div className="ticket-row">
          <span>Adults</span>
          <span>Rs. 70</span>
          <select
            value={tickets.indianAdults}
            onChange={(e) => handleChange(e, "indianAdults")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="ticket-row">
          <span >Children<br/> (6-15)</span>
          <span>Rs. 35</span>
          <select
            value={tickets.indianChildren}
            onChange={(e) => handleChange(e, "indianChildren")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="ticket-row">
          <span>Under 6</span>
          <span>Rs. 0</span>
          <select
            value={tickets.indianUnder6}
            onChange={(e) => handleChange(e, "indianUnder6")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Foreigner Prices Section */}
      <div className="section">
        <h2>For Foreigners</h2>
        <div className="ticket-row">
          <span>Adults</span>
          <span>Rs. 400</span>
          <select
            value={tickets.foreignAdults}
            onChange={(e) => handleChange(e, "foreignAdults")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="ticket-row">
          <span>Children<br/> (6-15)</span>
          <span>Rs. 200</span>
          <select
            value={tickets.foreignChildren}
            onChange={(e) => handleChange(e, "foreignChildren")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="ticket-row">
          <span>Under 6</span>
          <span>Rs. 0</span>
          <select
            value={tickets.foreignUnder6}
            onChange={(e) => handleChange(e, "foreignUnder6")}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Total Price Section */}
      <div className="total-section">
        <h3>Total Price: Rs. {totalPrice()}</h3>
      </div>
    </div>
  );
};

export default TicketPrices;
