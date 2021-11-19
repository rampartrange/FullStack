import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="button-list">
                <Link to='/'>
                    <NavBarButton name="Home"/>
                </Link>
                <NavBarButton name="Community"/>
                <NavBarButton name="My wardrobe"/>
                <NavBarButton name="My profile"/>
                <Link to='/sign_in'>
                    <NavBarButton name="Sign in"/>
                </Link>
            </div>
        </nav>
    )
}

function NavBarButton(props) {
    return (
        <button className='navbar-button'
                onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}

// export default BrowserRouter(NavBar);