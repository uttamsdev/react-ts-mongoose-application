import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-blue-700'>
        <nav className='container mx-auto h-[80px] text-white flex justify-between items-center'>
            <div><h1 className='text-2xl font-bold font-white'>Logo</h1></div>
            <ul>
                <li className='flex gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/add-user">Add User</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;