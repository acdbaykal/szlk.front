import {createSelector} from 'reselect'
import SortBy from "global/data/SortableEnum"
import SortOrder from "global/data/SortDirectionEnum"
import localeCompare from 'global/utils/localeCompare'

function getPropertyValue(translation, property_name){
  const prop_location = property_name.split(".");

  var current_obj = translation;
  for(let i = 0, iLimit = prop_location.length; i < iLimit; i++){
    let prop = prop_location[i];
    current_obj = current_obj.get(prop);
  }

  return current_obj;
}

function sortStringFunctionFactory(property_name){
  return (sorting_order)=>(x, y)=>{ // we expect two translation records
      const x_val = getPropertyValue(x, property_name);
      const y_val = getPropertyValue(y, property_name);
      return localeCompare(x_val, y_val, "tr", sorting_order);
  };
}

function sortDateFunctionFactory(property_name){
  return (sorting_order)=>(x, y)=>{ // we expect two translation records
      const x_val = getPropertyValue(x, property_name);
      const y_val = getPropertyValue(y, property_name);
      const mult = sorting_order === SortOrder.ASCENDING ? 1 : -1
      return (x_val.getTime() - y_val.getTime()) * mult;
  };
}


const enumToSortFuncMap = (()=>{
  const result = {};

  result[SortBy.ORIGIN] = {};
  result[SortBy.ORIGIN][SortOrder.ASCENDING] = sortStringFunctionFactory("origin.main")(SortOrder.ASCENDING);
  result[SortBy.ORIGIN][SortOrder.DESCENDING] = sortStringFunctionFactory("origin.main")(SortOrder.DESCENDING);
  result[SortBy.SHORT] = {};
  result[SortBy.SHORT][SortOrder.ASCENDING] = sortStringFunctionFactory("origin.short")(SortOrder.ASCENDING);
  result[SortBy.SHORT][SortOrder.DESCENDING] = sortStringFunctionFactory("origin.short")(SortOrder.DESCENDING);
  result[SortBy.TRANSLATION] = {};
  result[SortBy.TRANSLATION][SortOrder.ASCENDING] = sortStringFunctionFactory("translation")(SortOrder.ASCENDING);
  result[SortBy.TRANSLATION][SortOrder.DESCENDING] = sortStringFunctionFactory("translation")(SortOrder.DESCENDING);
  result[SortBy.TYPE] = {};
  result[SortBy.TYPE][SortOrder.ASCENDING] = sortStringFunctionFactory("type")(SortOrder.ASCENDING);
  result[SortBy.TYPE][SortOrder.DESCENDING] = sortStringFunctionFactory("type")(SortOrder.DESCENDING);
  result[SortBy.CREATION_DATE] = {};
  result[SortBy.CREATION_DATE][SortOrder.ASCENDING] = sortDateFunctionFactory("creationDate")(SortOrder.ASCENDING);
  result[SortBy.CREATION_DATE][SortOrder.DESCENDING] = sortDateFunctionFactory("creationDate")(SortOrder.DESCENDING);
  result[SortBy.EDIT_DATE] = {};
  result[SortBy.EDIT_DATE][SortOrder.ASCENDING] = sortDateFunctionFactory("editDate")(SortOrder.ASCENDING);
  result[SortBy.EDIT_DATE][SortOrder.DESCENDING] = sortDateFunctionFactory("editDate")(SortOrder.DESCENDING);

  return result;
})();


function translationsSelector(state){
  return state.translations;
}

function sortOrderSelector(state)   {
  return state.sorting.sort_order;
}

function sortBySelector(state){
  return state.sorting.sort_by;
}

function searchSelector(state){
  return state.filtering.search_term;
}

export function getTranslations(translations, sort_by, sort_order, search_term){ // exported for testing
  if(search_term.length > 2)
  {
    const sort_function = enumToSortFuncMap[sort_by][sort_order];
    return translations.filter((translation)=>{
      const origin = translation.get("origin").get("main");
      const regex = new RegExp(search_term, "i");
      return regex.exec(origin) !== null;
    }).sort(sort_function).toArray();
  }
  else{
    return [];
  }
}

export default createSelector(
  translationsSelector,
  sortBySelector,
  sortOrderSelector,
  searchSelector,
  getTranslations
);
