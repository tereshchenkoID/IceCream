import { types } from '../types/types';

import getAccess from "../../helpers/getAccess";

const initialState = {
    access: getAccess() || false
};

export const accessReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACCESS_DATA:
            return {
                ...state,
                access: action.payload,
            };
        default:
            return state;
    }
}
