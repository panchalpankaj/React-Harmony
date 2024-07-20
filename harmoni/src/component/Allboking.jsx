import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';

function Allboking() {

    const [userData,setUserData] = useState([])
    const [userIds, setUserIds] = useState([]);
    const [EventIds,setEventIds] = useState([]);
    const tokan = sessionStorage.getItem(`accessToken`)

    useEffect(() => {
        axios.get(`http://localhost:3046/api/v1/users/showallbookings`)
         .then((res) => {
            console.log(res.data.data)
            const userIds = res.data.data.map((user) => user.user_id);
            const EventIds = res.data.data.map((user) => user.event_id);
            setUserIds(userIds);
            setEventIds(EventIds);     
          })
         .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log(userIds,'userIDs');
      console.log(EventIds,'EventIds');  

  return (
    <>
    <div>
    <AdminNavbar/>
        <div className='allu ml-64 bg-slate-900 h-screen text-white'>
          
        </div>
    </div>
    </>
  )
}

export default Allboking
