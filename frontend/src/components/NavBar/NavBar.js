import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function NavBar() {
    let navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className="button-list">
                <NavBarButton
                    name="Home"
                    onClick={() => navigate('/')}
                />
                <NavBarButton name="Community"/>
                <NavBarButton name="My wardrobe"/>
                <NavBarButton
                    name="My profile"
                    onClick={() => navigate('/my_profile')}/>
                <NavBarButton
                    name="Sign in"
                    onClick={() => navigate('/sign_in')}
                />
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