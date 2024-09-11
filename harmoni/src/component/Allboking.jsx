import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
function Allboking() {
  const [Booking, setBookings] = useState([]);
  const [User, setUsers] = useState([]);
  const [Event, setEvents] = useState([]);

  const tokan = sessionStorage.getItem(`accessToken`);
  useEffect(() => {
    const Booking = axios.get(
      `http://localhost:3046/api/v1/users/showallbookings`
    );

    const Users = axios.get(`http://localhost:3046/api/v1/admin/getalluser`, {
      headers: {
        Authorization: tokan,
      },
    });
    const Events = axios.get(
      `http://localhost:3046/api/v1/admin/showallevents`
    );

    Promise.all([Booking, Users, Events]).then(
      ([resBoking, resUsers, resEvents]) => {
        setBookings(resBoking.data.data);
        setUsers(resUsers.data.data);
        setEvents(resEvents.data.data);
      }
    );
  }, [tokan]);

  const getUserById = (id) => {
    return User.find((user) => user._id === id);
  };

  const getEventById = (id) => {
    return Event.find((events) => events._id === id);
  };

  const book = Booking.filter((booking) => {
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
            {book.map((booking) => {
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
                      <span className="font-semibold text-lg">User:</span>{" "}
                      {user.fullName}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Email:</span>{" "}
                      {user.email}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">mobile_no:</span>{" "}
                      {user.mobile_no}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Event:</span>{"  "}
                      {event.title}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">S_data:</span>{" "}
                      {event.s_date}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">S_time:</span>{" "}
                      {event.s_time}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">location:</span>{" "}
                      {event.location}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">price:</span>{" "}
                      {event.price}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Booking ID:</span>{" "}
                      {booking._id}
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
