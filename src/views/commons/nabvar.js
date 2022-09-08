import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
 

function NavBar() {
    return (
        <div>
            <nav className='nav'>    
                <span className='title'><Link to='/'>MYBRAND</Link></span>
                <span className='choices'><Link to='/Site'>Site</Link></span>
                <span className='choices'><Link to='/AboutMe'>About Me</Link></span>
            </nav>
        </div>
    )
};

 
const root = ReactDOM.createRoot(document.getElementById('root'));
export default NavBar;