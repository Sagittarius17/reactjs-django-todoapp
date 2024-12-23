import '../assets/css/Navbar.css';

import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div class="nav-container">
                <div class="brand">ToDo</div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar