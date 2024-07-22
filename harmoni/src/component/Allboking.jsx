import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

function Allboking() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const fetchBookings = axios.get(
      "http://localhost:3046/api/v1/users/showallbookings"
    );
    const fetchUsers = axios.get(
      "http://localhost:3046/api/v1/admin/getalluser",
      {
        headers: { Authorization: token },
      }
    );
    const fetchEvents = axios.get(
      "http://localhost:3046/api/v1/admin/showallevents"
    );

    Promise.all([fetchBookings, fetchUsers, fetchEvents])
      .then(([bookingsRes, usersRes, eventsRes]) => {
        setBookings(bookingsRes.data.data);
        setUsers(usersRes.data.data);
        setEvents(eventsRes.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const getUserById = (id) => {
    return users.find((user) => user._id === id);
  };

  const getEventById = (id) => {
    return events.find((event) => event._id === id);
  };

  if (loading) {
    return (
      <div>
        <AdminNavbar />
        <div className="allu ml-64 bg-slate-900 h-screen text-white">
          <p>Loading...</p>
        </div>
      </div>
    );
  }


  const filteredBookings = bookings.filter((booking) => {
    const user = getUserById(booking.user_id);
    const event = getEventById(booking.event_id);
    return user && event;
  });

  return (
    <>
      <div>
        <AdminNavbar />
        <div className="allu text-gray-200 bg-slate-800 ">
          <div>
            {filteredBookings.map((booking) => {
              const user = getUserById(booking.user_id);
              const event = getEventById(booking.event_id);
              return (
                <div key={booking._id} className="p-4 border-b border-gray-700 flex justify-around">
                  <div className="float-left h-1/2 w-1/2" ><img src={event.image} className="w-1/2 h-1/2 object-cover"></img></div>
                  <div className="float-right">
                  <p>
                    <strong>User:</strong> {user.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>mobile_no:</strong> {user.mobile_no}
                  </p>
                  <p>
                    <strong>Event:</strong> {event.title}
                  </p>
                  <p>
                    <strong>S_data:</strong> {event.s_date}
                  </p>
                  <p>
                    <strong>S_time:</strong> {event.s_time}
                  </p>
                  <p>
                    <strong>location:</strong> {event.location}
                  </p>
                  <p>
                    <strong>price:</strong> {event.price}
                  </p>
                  <p>
                    <strong>Booking ID:</strong> {booking._id}
                  </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Allboking;
