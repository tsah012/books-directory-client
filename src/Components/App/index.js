import React, { useEffect } from 'react';
import axios from 'axios';
import AppRouter from '../AppRouter';
import { useDispatch } from 'react-redux';
import { LOGGED_IN, LOGGED_OUT, LOGIN_FAILURE } from '../../actions/auth';

function App() {
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_SERVER_END_POINT + '/api/user', { withCredentials: true });

            if (response.status == 200) {
                dispatch({ type: LOGGED_IN, payload: response.data });
            }
            else {
                dispatch({ type: LOGGED_OUT });
            }
        }
        catch (error) {
            console.log('error occurred during fetching user data. error:\n' + error);
            dispatch({ type: LOGIN_FAILURE, payload: error.message || '' });
        }
    }, []);

    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App
