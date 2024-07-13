import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faFire, faHome, faMessage, faPen, faUser, faVenusMars, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Acount() {

  const [userData,setuserData] = useState({});

  const tokan = sessionStorage.getItem(`accessToken`)

  useEffect(()=>{

    axios.get(`http://localhost:3046/api/v1/users/getcurrentUser`,{
      headers : {
        Authorization : tokan
      }
    })
    .then((res) => {
      // console.log(res.data.data);
      setuserData(res.data.data);
    })
    .catch((err)=>{
      console.error(err)
    })

  },[])

  return (
    <>
        <Navbar/>
      <div className='bg-slate-900 h-screen text-white flex justify-center' >
      <div className='w-2/5 justify-center bg-slate-600 '>
        <h3 className='pl-3 pt-2 border-b-2 pb-2 border-gray-400'><FontAwesomeIcon icon={faFire} className='text-yellow-600'/> Account</h3>
      
      <div className='flex justify-between text-blue-400 font-semibold'>
        <p className='ml-3 mt-2'> <Link to ={'/'}> <FontAwesomeIcon icon={faHome} className='text-blue-400'/> Home</Link> </p>
        <p className='mr-3 mt-2'><Link to = {'/Changepass'}>Change Password</Link></p>
      </div>

      <div className='bg-slate-500 mt-3'>
            <p className='ml-2 pt-2'>Change Account Details</p>
            <img src={userData.avatar} className='size-10 rounded-full mx-auto mt-4'/>

        <div className='flex justify-between pb-1'>
            <p className='pl-3'><FontAwesomeIcon icon={faUser}/>{userData.fullName}</p>
            <p className='pr-3'><Link to={'/Changedetail'}><FontAwesomeIcon icon={faPen}/></Link></p>
        </div>
        <div className='flex justify-between pb-1'>
            <p className='pl-3'><FontAwesomeIcon icon={faMessage}/> {userData.email}</p>
            <p className='pr-3'><Link to={'/Changedetail'}><FontAwesomeIcon icon={faPen}/></Link></p>
        </div>
        <div className='flex justify-between pb-1'>
            <p className='pl-3'><FontAwesomeIcon icon={faVenusMars}/> {userData.gender}</p>
            <p className='pr-3'><Link to={'/Changedetail'}><FontAwesomeIcon icon={faPen}/></Link></p>
        </div>
        <div className='flex justify-between pb-1'>
            <p className='pl-3'><FontAwesomeIcon icon={faContactBook}/> {userData.mobile_no}</p>
            <p className='pr-3'><Link to={'/Changedetail'}><FontAwesomeIcon icon={faPen}/></Link></p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Acount
