import { LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
    isLogged: false,
    user: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                isLogged: true,
                user: null
            }
        case LOGOUT:
            return {
                isLogged: false,
                user: null
            }
        default:
            return {...state}
    }
}

export default reducer;