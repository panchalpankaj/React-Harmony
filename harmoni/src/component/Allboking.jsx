import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

function Allboking() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

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
                <div
                  key={booking._id}
                  className="p-4 border-b border-gray-700 flex justify-around"
                >
                  <div className="float-left h-1/2 w-1/2">
                    <img
                      src={event.image}
                      className="w-1/2 h-1/2 object-cover"
                    ></img>
                  </div>
                  <div className="float-right">
                    <p>
                      <span className="font-semibold text-lg">User:</span> {user.fullName}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Email:</span> {user.email}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">mobile_no:</span> {user.mobile_no}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Event:</span> {event.title}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">S_data:</span> {event.s_date}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">S_time:</span> {event.s_time}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">location:</span> {event.location}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">price:</span> {event.price}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Booking ID:</span> {booking._id}
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
