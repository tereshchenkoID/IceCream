import { types } from '../types/types';

const initialState = {
    modal: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MODAL_DATA:
            return {
                ...state,
                modal: action.payload,
            };
        default:
            return state;
    }
}
