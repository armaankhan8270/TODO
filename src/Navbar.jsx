import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className=' bg-white shadow-lg w-full items-center text-center h-16 rounded m-5 flex  text-3xl   '>

    <ul className='ml-36 mr-36 items-center flex gap-40 '> 
      <Link to='/Contact'>

      <li className='hover:bg-cyan-300 hover:p-5 p-2  rounded'>contact</li>
      </Link>
      <Link to='/'>
        <li className='hover:bg-cyan-300 hover:p-5 p-2  rounded'>Home</li>

      </Link>
      <Link to='/SignIn'>
      <li className='hover:bg-cyan-300 hover:p-5 p-2  rounded'>SignIn</li>

      </Link>
      <Link to='/About'>

      <li className='hover:bg-cyan-300 hover:p-5 p-2  rounded'>About</li>
      </Link>
       
       
        
    </ul>

            </div>
        </div>
    )
}

export default Navbar
