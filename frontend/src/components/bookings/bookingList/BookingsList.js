import React from "react";
import "./BookingsList.css";

const bookingList = props => (
  <ul className="bookings-list">
    {props.bookings.map(booking => {
      return (
        <li className="bookings-item">
          <div className="bookings-item-data">
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings-item-actions">
            <button className="btn">Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
