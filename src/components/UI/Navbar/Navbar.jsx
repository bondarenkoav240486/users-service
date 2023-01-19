import React, {useContext} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar ">
        <div className="navbar__row">
            <div className="logo">&#9998;USERSSERVICE&#10000;</div>
            <div className="navbar__links">
                <div>
                    <Link className="link" to="/userslist">USERSLIST</Link>
                </div>
                <div>
                    <Link className="link" to="/userposts">USERPOSTS</Link>
                </div>
            </div>
        </div >
   </div>
   );
};

export default Navbar;