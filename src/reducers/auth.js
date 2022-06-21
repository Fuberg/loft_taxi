import { LOG_IN, LOG_OUT } from "../actions"

const initialState = {
    isLoggedIn: false,
}

export default function authReducer (state = initialState, action) { 
    switch (action.type) { 
        case LOG_IN: { 
            return {isLoggedIn:true}
        }
        case LOG_OUT: { 
            return {isLoggedOut:false}
        }
        default:
            return state
    }
}