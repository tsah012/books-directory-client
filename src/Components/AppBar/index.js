import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './index.css.js'

function AppBar() {
    return (
        <Wrapper>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to="login"> Login </Link></li>
                <li style={{ float: 'right' }}><a className="active" href="#">Logout</a></li>
            </ul>
        </Wrapper>
    )
}

export default AppBar
