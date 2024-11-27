import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <div className="">

    <Link to="/">
    <p>Home</p>
    </Link>
    <Link to="/task_section">
    <button>Task Sections</button>
    </Link>
     </div>
    </>
  )
}

export default NavBar