import { types } from '../types/types';

const initialState = {
    team: JSON.parse(localStorage.getItem('team')) || []
};

export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TEAM_DATA:
            return {
                ...state,
                team: action.payload,
            };
        default:
            return state;
    }
}
