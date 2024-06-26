import React from 'react';
import '../Css/Profile.css';
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  const Navigater = useNavigate('');
  return (
    <div>
      <AdminNavbar/>
      <div className='profiles'>
        <div className='whitelogo'>
        <img src='/img/boy.png' className='rounsd'/>
        </div>
        <div className='btlko'>
        <button className='blackbtn'>Persnal Detail</button>
        <button className='blackbtn' onClick={() => Navigater('./password')}>Change Password</button>
        </div>
        <div className='whitelogo2'>
       <p className='lossa'>Persnal Detail</p>
       <div className='inpio'>
        <label className='lab'>Full Name:
        <input type='text' placeholder='Event Managment' className='ips'></input>
        </label>
        <label className='lab'>Email Adrees:
        <input type='email' placeholder='abc@gmail.com' className='ips'></input>
        </label>
       </div>
       <button className='btnyu'>UpDate</button>
        </div> 
      </div>
    </div>
  )
}
