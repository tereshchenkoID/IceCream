import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import { countryReducer } from './countryReducer';
import { categoryReducer } from './categoryReducer';
import { companyReducer } from './companyReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  cardReducer,
  countryReducer,
  categoryReducer,
  companyReducer,
  userReducer
});
