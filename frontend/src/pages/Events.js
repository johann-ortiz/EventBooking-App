import React, { Component } from "react";
import "./Events.css";

export default class Events extends Component {
  render() {
    return (
      <div className="events-control">
        <p>Share Your Events</p>
        <button className="btn">Create Event</button>
      </div>
    );
  }
}
