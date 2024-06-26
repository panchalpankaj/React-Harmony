import React from 'react';
import '../Css/Passwordchange.css';
import AdminNavbar from './AdminNavbar';

export default function Passwordchange() {
  return (
    <div>
      <AdminNavbar/>
      <div className='profiles'>
        <div className='whitelogo'>
        <img src='/img/boy.png' className='rounsd'/>
        </div>
        <div className='btlko'>
        <button className='blackbtn'>Persnal Detail</button>
        <button className='blackbtn' >Change Password</button>
        </div>
        <div className='whitelogo2'>
       <p className='lossa'>Change Password</p>
       <div className='inpio'>
        <label className='lab'>Old Password:
        <input type='password'  className='ips'></input>
        </label>
        <label className='lab'>New Password:
        <input type='password' className='ips'></input>
        </label>
        <label className='lab'>Confirm Password:
        <input type='password'  className='ips'></input>
        </label>
       </div>
       <button className='btnyu'>UpDate</button>
        </div> 
      </div>
    </div>
  )
}
