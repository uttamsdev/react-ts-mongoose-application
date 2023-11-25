import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Users = ({user}) => {
    const {id, username, name, address} = user;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`).then(res => alert("User Deleted successful"))
    }

    const handleUpdate = (id) => {
        navigate(`/update-user/${id}`)
    }
  return (
    <div className='text-black w-72 p-4 shadow-md' >
        <h1 className='text-xl '>User name: {username}</h1>
        <h1 className='text-xl '>Name: {name}</h1>
        <h1 className='text-xl '>State: {address.state}</h1>
        <h1 className='text-xl '>City: {address.city}</h1>
        <h1 className='text-xl '>Country: {address.country}</h1>
        <button onClick={()=>{handleDelete(id)}} className='bg-red-200 p-1 px-4 rounded mr-4'>Delete</button>
        <button onClick={()=>{handleUpdate(id)}} className='bg-green-200 p-1 px-4 rounded'>Update</button>
    </div>
  )
}

export default Users;