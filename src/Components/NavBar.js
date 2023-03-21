import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul className="nav">
    <li className="nav-item">
     <Link to="/"><a className="nav-link active" href="#">Accueil</a></Link> 
    </li>
    <li className="nav-item">
     <Link to="/login"><a className="nav-link" href="#">Login</a></Link> 
    </li>
 
  </ul>

    </div>
  )
}

export default NavBar