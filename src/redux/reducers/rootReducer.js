import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import { settingReducer } from './settingReducer';
import { profileReducer } from './profileReducer';
import { userReducer } from './userReducer';
import { accessReducer } from "./accessReducer";

export const rootReducer = combineReducers({
  cardReducer,
  settingReducer,
  profileReducer,
  userReducer,
  accessReducer
});
