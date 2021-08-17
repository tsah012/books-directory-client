import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT, LOGGED_OUT, LOGOUT_FAILURE } from '../../actions/auth';
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
                    <li><Link> Library </Link></li>
                    <li style={{ float: 'right' }}><Link className="active" onClick={performLogout}>Logout</Link></li>
                </ul>
            </Wrapper>
        )
    }
    else{
        return(<></>)
    }
}

export default AppBar
