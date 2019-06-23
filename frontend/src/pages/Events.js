import React, { Component } from "react";
import "./Events.css";
import Modal from "../components/modal/Modal";
import Backdrop from "../components/backdrop/Backdrop";

export default class Events extends Component {
  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal title="Add Event" canCancel canConfirm>
            <p>Modal Content</p>
          </Modal>
        )}
        <div className="events-control">
          <p>Share Your Events</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}
