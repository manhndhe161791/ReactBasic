import React from "react";
import './Nav.scss'
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav" >
                <NavLink exact to="/" activeClassName="active">Home </NavLink>
                <NavLink to="/todo" activeClassName="active">Todo </NavLink>
                <NavLink to="/about" activeClassName="active">About </NavLink>
            </div >
        )
    }
}

export default Nav;