import { combineReducers } from "redux";
import { characterReducer as character } from "./characterReducer";
// import {postReducer as post} from './postReducer'

export default combineReducers({
  character,
  // post
});
