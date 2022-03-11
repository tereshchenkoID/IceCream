import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import { settingReducer } from './settingReducer';
import { profileReducer } from './profileReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  cardReducer,
  settingReducer,
  profileReducer,
  userReducer
});
