import SortingReducer from './SortingReducer';
import TranslationsReducer from './TranslationsReducer';
import LogInReducer from './LogInReducer';
import FilteringReducer from './FilteringReducer';
import ReducerFactory from './ReducerFactory';
import LocaleReducer from './LocaleReducer';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers(
  {
    sorting: SortingReducer,
    filtering: FilteringReducer,
    translations: TranslationsReducer,
    routing: routerReducer,
    language: LocaleReducer,
    login: LogInReducer
  }
);
