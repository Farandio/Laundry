import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './headerStyle.css';

class header extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>LAUNDRY</div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/laundry">Laundry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history">History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">User</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default header;