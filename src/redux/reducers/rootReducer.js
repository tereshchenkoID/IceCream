import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import { settingReducer } from './settingReducer';

export const rootReducer = combineReducers({
  cardReducer,
  settingReducer
});
