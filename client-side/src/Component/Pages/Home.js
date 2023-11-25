import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Users from './Users'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users').then(res => {
            setUsers(res.data.data)
        })
    },[users])
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-blue-700'>List of all users</h1>
        <div className='container mx-auto grid grid-cols-3 place-items-center place-content-center gap-8'>
        {
            users?.map(user => <Users user={user}></Users>)
        }
        </div>
    </div>
  )
}

export default Home;