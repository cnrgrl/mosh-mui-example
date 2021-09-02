import React from 'react';

function Navbar(props) {
   
    
        return ( <React.Fragment>

            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"> {props.totalIncrement} </span>
            </div>
            </nav>

        </React.Fragment> );
    
}
 
export default Navbar;
