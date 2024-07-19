import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { toast } from "react-toastify";

function AddAdmin() {

    const [fullName,setFullname] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const Add = async(e) => {
        e.preventDefault();
        const data = {fullName,email,password};
        axios.post(`http://localhost:3046/api/v1/admin/register`,data)
        .then((res) => {
            console.log(res);
            if(res.data.success === true)
            {
                toast.success(res.data.message)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <>
      <div>
        <AdminNavbar />
        <div className="allu ml-64 bg-gray-900 h-screen">
          <div className="flex flex-col  w-2/5 justify-center  ml-80 mt-16 border-2 bg-slate-600 p-10 rounded-lg  ">
            <h2 className="text-center pt-2 pb-4 text-xl font-semibold text-green-500">
              Admin Registration
            </h2>
            <div className="pl-28">
              <label className="block mb-2 text-green-300 font-semibold ">
                FullName
              </label>
              <input
                type="text"
                className="w-2/3 p-2 pl-7 text-sm text-gray-700 border border-gray-300 rounded"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
              />
              <label className="block mb-2 text-green-300 font-semibold ">
                Email
              </label>
              <input
                type="text"
                className="w-2/3 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="block mb-2 text-green-300 font-semibold ">
                Password
              </label>
              <input
                type="text"
                className="w-2/3 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="bg-green-600 w-28 rounded-md p-1 ml-40 mt-3 text-white font-semibold hover:bg-green-500 duration-300"
              onClick={Add}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAdmin;
