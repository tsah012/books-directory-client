import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, LOGOUT, LOGGED_IN, LOGGED_OUT, LOGIN_FAILURE } from '../../actions/auth';
import axios from 'axios';
import Wrapper from './index.css.js';


function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (auth.isLogged) {
            history.push('/');
        }
    }, []);

    const performLogin = async () => {
        try {
            console.log('Start login')
            dispatch({ type: LOGIN });
            const response = await axios.post(process.env.REACT_APP_SERVER_END_POINT + '/login', {
                mail: mail,
                password: password
            });

            if (response.data.status) {
                console.log('login success');
                dispatch({ type: LOGGED_IN })
                history.push('/');
            }
        }
        catch (error) {
            console.log('error occurred during login. error:\n' + error);
            dispatch(LOGIN_FAILURE, error);
        }
    }

    return (
        <Wrapper>
            <div className="wrapper">
                <div id="formContent">
                    <h1>Login</h1>
                    <div>
                        <input type="text" name="mail" id="mail" placeholder="Enter Email" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                        <input type="text" name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="button" id="loginBtn" value="log in" onClick={performLogin}></input>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login
