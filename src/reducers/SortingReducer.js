import ReducerFactory from './ReducerFactory'
import SortBy from 'global/data/SortableEnum.js'
import SortOrder from 'global/data/SortDirectionEnum'


function sort(store, action){
  const old_sort_by = store.sort_by;
  const new_sort_by = action.sort_by;

  if(old_sort_by === new_sort_by){
    const old_sort_order = store.sort_order;
    const new_sort_order = old_sort_order === SortOrder.ASCENDING ?
                            SortOrder.DESCENDING : SortOrder.ASCENDING
    ;
    return {...store, sort_order:new_sort_order};
  }
  else{
    return {...store, sort_by:new_sort_by};
  }
}

const mapping = {
  SET_SORTBY:sort
};

export default (ReducerFactory(mapping, {sort_order:SortOrder.ASCENDING, sort_by:SortBy.ORIGIN}));
