import React from 'react'
import './index.css'

function AppBar() {
    return (
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Contact</a></li>
                <li style={{float:'right'}}><a className="active" href="#">Logout</a></li>
            </ul>
        </div>
    )
}

export default AppBar
