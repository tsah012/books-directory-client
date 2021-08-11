import React from 'react'
import Wrapper from './index.css.js'

function Login() {
    return (
        <Wrapper>
            <div className="wrapper">
                <div id="formContent">
                    <h1>Login</h1>
                    <div>
                        <input type="text" name="mail" id="mail" placeholder="Enter Email"></input>
                        <input type="text" name="password" id="password" placeholder="Enter password"></input>
                        <input type="button" id="loginBtn" value="log in"></input>
                        <div id="formFooter">
                            <a class="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login
