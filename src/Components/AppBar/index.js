import React from 'react'
import Wrapper from './index.css.js'

function AppBar() {
    return (
        <Wrapper>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Contact</a></li>
                <li style={{float:'right'}}><a className="active" href="#">Logout</a></li>
            </ul>
        </Wrapper>
    )
}

export default AppBar
