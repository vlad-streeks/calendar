import eventReducer from './eventReducer';
import timeLineReducer from './timeLineReducer';
import { combineReducers } from 'redux';
import heightFieldReducer from "./heightFieldReducer";

export default combineReducers({
    heightFieldReducer,
    timeLineReducer,
    eventReducer,
});
