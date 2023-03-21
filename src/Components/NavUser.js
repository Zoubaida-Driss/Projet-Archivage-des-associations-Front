import React from 'react'
import { Link } from 'react-router-dom'

const NavUser = () => {
  return (
    <div> <ul className="nav">
    
    <li className="nav-item">
    <Link to={"/addDon"}>  <a className="nav-link" href="#">Donner un don</a></Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Logout</a>
    </li>
   
   
      
        
       
  </ul>
  
  </div>
  )
}

export default NavUser