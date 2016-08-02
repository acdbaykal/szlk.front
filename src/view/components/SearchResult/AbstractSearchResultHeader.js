import React, {PropTypes} from 'react'
import SortBy from 'global/data/SortableEnum'
import SortOrder from 'global/data/SortDirectionEnum'
import grid_styles from 'view/components/SearchResult/style/SearchResultGrid.styl';
import styles from './style/SearchResultHeader.styl'


const UP_CHAR = String.fromCharCode(9650);
const DOWN_CHAR = String.fromCharCode(9660);

function createSortRequestHandler(header_component, dispatch, sort_by){
  return function(event){
    dispatch(

      {
        'target':header_component,
        'sort_by':sort_by
      }
    );
  }
}

function arrowFactory(arrow_char){
  return (is_sorted_by)=>{
    return is_sorted_by ? (<span className={styles.arrow}>{arrow_char}</span>):"";
  };
}

const BUTTON_LABEL_MAPPING = (()=>{
  const map = {};
  map[SortBy.ORIGIN] = "Almanca";
  map[SortBy.SHORT] = "Kısaltma";
  map[SortBy.TRANSLATION] = "Türkçe";
  map[SortBy.TYPE] = "İşlev";
  map[SortBy.CREATION_DATE] = "Yaratılış tarihi";
  map[SortBy.EDIT_DATE] = "Düzenleme tarihi";
  return map;
})();

export default (
  (sort_by_arr)=>{
    return class ASearchResultHeader extends React.Component {
      constructor(props) {
        super(props);
        const {onSortRequest:handler} = props;
        this._sortHandlers = sort_by_arr.map(
          (sort_by)=>{
            return createSortRequestHandler(this, handler, sort_by);
          }
        );
      }

      componentDidMount() {
          const {sortBy:sort_by} = this.props;
          const sort_handlers = this._sortHandlers;
          const is_not_presentable = !(sort_handlers.includes(sort_by));
          if(is_not_presentable && sort_handlers.length > 0){
            //send a request to change the sorting to a presentable default
            sort_handlers[0]();
          }
      }

      render(){
        const {sortOrder:sort_order, sortBy:sort_by} = this.props;
        const arrow = sort_order === SortOrder.ASCENDING ? DOWN_CHAR : UP_CHAR;
        const arrow_factory = arrowFactory(arrow);
        const sort_handlers = this._sortHandlers;
        const buttons = sort_by_arr.map((sb_arg, i)=>{
          const label = BUTTON_LABEL_MAPPING[sb_arg];
          const arrow = arrow_factory(sort_by === sb_arg);
          const onsort = sort_handlers[i];
          const id = "srh" + i; // just to satisfy React
          return(
            <div key={id}>
              <button onClick={onsort}>{label}{arrow}</button>
            </div>
          );
        });

        return(
          <div className={grid_styles.grid_row_container}>
            {buttons}
          </div>
        )
      }
    }


    ASearchResultHeader.propTypes = {
      onSortRequest: PropTypes.func.isRequired,
      sortOrder: PropTypes.string.isRequired,
      sortBy: PropTypes.string.isRequired
    };
  }
);
