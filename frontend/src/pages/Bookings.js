import React, { Component } from "react";
import AuthContext from "../context/auth-context";

export default class Bookings extends Component {
  state = {
    isLoading: false,
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
              createdAt
              event {
                _id
                title
                date
              }
            }
          }
        `
    };

    fetch("http://localhost:4000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings, isLoading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <ul>
        {this.state.bookings.map(booking => (
          <li>
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    );
  }
}
