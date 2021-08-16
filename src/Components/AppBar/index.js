import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, LOGOUT, LOGGED_IN, LOGGED_OUT, LOGIN_FAILURE, LOGOUT_FAILURE } from '../../actions/auth';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Wrapper from './index.css.js';

function AppBar() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    const performLogout = async () => {
        try {
            dispatch({type: LOGOUT});
            const response = await axios.delete(process.env.REACT_APP_SERVER_END_POINT + '/logout');
            if (response.data.status){
                dispatch({type: LOGGED_OUT});
                history.push('/login')
            }   
        } catch (error) {
            console.log('error during logging out: ' + error);
            dispatch({type: LOGOUT_FAILURE, payload: error});
        }
    }

    if (auth.isLogged) {
        return (
            <Wrapper>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li> Library </li>
                    <li style={{ float: 'right' }}><a className="active" onClick={performLogout}>Logout</a></li>
                </ul>
            </Wrapper>
        )
    }
    else{
        return(<></>)
    }
}

export default AppBar
