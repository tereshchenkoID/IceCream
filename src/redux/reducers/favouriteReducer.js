import { types } from '../types/types';

const initialState = {
    favourite: JSON.parse(localStorage.getItem('favourite')) || []
};

export const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FAVOURITE_DATA:
            return {
                ...state,
                favourite: action.payload,
            };
        default:
            return state;
    }
}
