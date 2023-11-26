import axios from 'axios';
import React from 'react'

const AddUser = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const name = event.target.name.value;
        const username = event.target.username.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        const state = event.target.state.value;
        const city = event.target.city.value;
        const country = event.target.country.value;
        console.log(id, name, username, password, email, state, city, country)

        const user = {id, name, username, password, email, state, city, country};
        axios.post("http://localhost:5000/api/users", user).then(res => alert("User added successfully"))
    }
  return (
    <div>
        <div>
            <p className='text-center text-2xl text-red-500'>Add user form</p>
        </div>
        <div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/3 mx-auto shadow-xl p-4 mt-12' action="">
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="number" name="id" id="" placeholder='Enter ID'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="name" id="" placeholder='Enter Name'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="username" id="" placeholder='Enter username'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="password" name="password" id="" placeholder='Enter password'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="email" name="email" id="" placeholder='Enter email'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="state" id="" placeholder='Enter state'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="city" id="" placeholder='Enter city'/>
                    <input className='bg-gray-200 h-10 outline-none px-2 mb-2' type="text" name="country" id="" placeholder='Enter country'/>
                    <input type="submit" className='bg-blue-500 text-white h-10 cursor-pointer' value="Add User"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser;