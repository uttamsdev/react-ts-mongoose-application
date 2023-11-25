import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const [userData, setUsreData] = useState({
        id: '',
        name: '',
        username: '',
        password: '',
        address: {
            state: '',
            city: '',
            country: ''
        }
    })
    

        
    const {id} = useParams();

    // const handleInputChange = (e) => {
    //     // Update the user state when form fields change
    //     setUsreData({
    //       ...userData,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // If the changed field is part of the address object
        if (name.startsWith('address.')) {
          setUsreData(prevUser => ({
            ...prevUser,
            address: {
              ...prevUser.address,
              [name.split('.')[1]]: value,
            },
          }));
        } else {
          // If it's a regular field
          setUsreData({
            ...userData,
            [name]: value,
          });
        }
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/users/${id}`,userData).then(res => alert("user updated successfully"))
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/users/${id}`).then(res => {
        setUsreData(res.data.data)
        })
    },[id])
  return (
    <div>
    <div>
        <p className='text-center text-2xl text-red-500'>Update user form</p>
    </div>
    <div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-1/3 mx-auto shadow-xl p-4 mt-12' action="">
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="number" name="id" id="" placeholder='Enter ID' value={userData?.id} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="name" id="" placeholder='Enter Name' value={userData?.name} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="username" id="" placeholder='Enter username' value={userData?.username} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="password" name="password" id="" placeholder='Enter password'value={userData?.password} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="address.state" id="" placeholder='Enter state' value={userData?.address?.state} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="address.city" id="" placeholder='Enter city' value={userData?.address?.city} onChange={handleInputChange}/>
                <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="address.country" id="" placeholder='Enter country'value={userData?.address?.country} onChange={handleInputChange}/>
                <input type="submit" className='bg-blue-500 text-white h-10 cursor-pointer' value="Update User"/>
            </form>
        </div>
    </div>
</div>
  )
}

export default UpdateUser;