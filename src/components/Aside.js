import React, { Component } from 'react'
import './Aside.css'

class Aside extends Component {
    render() {
        return (
            <div>
                <aside className='nav-sidebar'>
                    <ul>
                    <li><span>Projects</span></li>
                    <li><a href="#">Making a website</a></li>
                    <li><a href="#">Creating a video</a></li>
                    <li><a href="#">SEO optimizing a website</a></li>
                    <li><a href="#">Walking through the park</a></li>
                    <li><a href="#">Just another day</a></li>
                    </ul>
                </aside>
            </div>
        )
    }
}

export default Aside