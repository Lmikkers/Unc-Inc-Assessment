import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (  
        <nav>
            <ul>
                <li><Link to="/home" aria-label="Ga naar de homepagina">Home</Link></li>
                <li><Link to="/login" aria-label="Ga naar de login pagina">Login</Link></li>
                <li><Link to="/dashboard" aria-label="Ga naar de dashboard pagina">Dashboard</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;