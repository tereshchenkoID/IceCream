import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import { settingReducer } from './settingReducer';
import { profileReducer } from './profileReducer';
import { userReducer } from './userReducer';
import { accessReducer } from "./accessReducer";
import { teamReducer } from "./teamReducer";
import { favouriteReducer } from "./favouriteReducer";

export const rootReducer = combineReducers({
  cardReducer,
  settingReducer,
  profileReducer,
  userReducer,
  accessReducer,
  teamReducer,
  favouriteReducer
});
