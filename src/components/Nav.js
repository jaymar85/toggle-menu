import React, { Component } from 'react'
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className='nav-main'>
                <div className='btn-toggle-nav'></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>   
            </div>
        )
    }
}

export default Nav