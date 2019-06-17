import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

export default function Main() {
  return (
    <header className="main-navigation">
      <div className="main-navigation-logo">
        <h1>Event App</h1>
      </div>
      <nav className="main-navigation-items">
        <ul>
          <li>
            <NavLink to="/auth">Authenticate</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
