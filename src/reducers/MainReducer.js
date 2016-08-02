import SortingReducer from "./SortingReducer"
import TranslationsReducer from "./TranslationsReducer"
import LogInReducer from "./LogInReducer"
import FilteringReducer from "./FilteringReducer"
import ReducerFactory from "./ReducerFactory"
import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'



export default (history)=>{
  const concrete_login_reducer = LogInReducer(history);
  return combineReducers(
    {
      sorting:SortingReducer,
      filtering:FilteringReducer,
      translations:TranslationsReducer,
      routing:routerReducer,
      login:concrete_login_reducer
    }
  );
};
