import { types } from '../types/types';

const initialState = {
    user: parseInt(localStorage.getItem('user_role'), 10) || 0
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };
        case types.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
