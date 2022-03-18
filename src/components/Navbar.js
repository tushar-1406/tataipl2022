import React from 'react'
import '../css/Navbar.css'
import logo from '../images/ipl1.png'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <nav className='mb-5'>
    <Link to="/"> <img src={logo} id="logo" alt=""/></Link>
    <ul>
        <Link to="/">
            <li>Teams</li>
        </Link>
        <Link to="/schedule">
            <li>Schedule</li>
        </Link>
        <Link to="/pointstable">
            <li>Points-Table</li>
        </Link>
        <Link to="/scoreboard">
            <li>Scoreboard</li>
        </Link>

    </ul>


</nav>
  )
}
