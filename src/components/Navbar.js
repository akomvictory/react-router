import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    
        return(
            <div>
                <nav>
                  <div className="nav-wrapper">
                        <Link to="/Home"> Reacta </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                       <li> <Link to="/"> About  </Link> </li>
                       <li>  <Link to="/resource">  Resource </Link> </li> 
                       <li>  <Link to="/contact"> Contact </Link> </li> 
                        </ul>
                   </div>
                </nav>
            </div>
        )
   
}

export default Navbar
