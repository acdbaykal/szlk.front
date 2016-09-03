import React, {PropTypes} from 'react';
import SortBy from 'global/data/SortableEnum';
import SortOrder from 'global/data/SortDirectionEnum';
import {FormattedMessage} from 'react-intl';
import grid_styles from 'view/components/SearchResult/style/SearchResultGrid.styl';
import styles from './style/SearchResultHeader.styl';


const UP_CHAR = String.fromCharCode(9650);
const DOWN_CHAR = String.fromCharCode(9660);

function createSortRequestHandler(header_component, dispatch, sort_by){
  return function onSortRequest(){
    dispatch(
      {
        target: header_component,
        sort_by
      }
    );
  };
}

function arrowFactory(arrow_char){
  //eslint-disable-next-line arrow-body-style
  return (is_sorted_by) => {
    return is_sorted_by ?
        (<span className={styles.arrow}>{arrow_char}</span>) : '';
  };
}

const BUTTON_MESSAGE_ID_MAPPING = (() => {
  const map = {};
  map[SortBy.ORIGIN] = 'app.translation.origin';
  map[SortBy.SHORT] = 'app.translation.short';
  map[SortBy.TRANSLATION] = 'app.translation.destination';
  map[SortBy.TYPE] = 'app.translation.type';
  map[SortBy.CREATION_DATE] = 'app.translation.creation_date';
  map[SortBy.EDIT_DATE] = 'app.translation.edit_date';
  return map;
})();

export default (
  (sort_by_arr) => {
    class ASearchResultHeader extends React.Component{
      constructor(props){
        super(props);
        const {onSortRequest: sort_handler = () => {}} = props;
        this._sortHandlers = sort_by_arr.map(
          sort_by => createSortRequestHandler(this, sort_handler, sort_by)
        );
      }

      componentWillMount(){
        const {sortBy: sort_by} = this.props;
        const sort_handlers = this._sortHandlers;
        const is_not_presentable = !(sort_handlers.includes(sort_by));
        if(is_not_presentable && sort_handlers.length > 0){
          //send a request to change the sorting to a presentable default
          sort_handlers[0]();
        }
      }

      render(){
        const {sortOrder: sort_order, sortBy: sort_by} = this.props;
        const arrow_char = sort_order === SortOrder.ASCENDING ? DOWN_CHAR : UP_CHAR;
        const arrow_factory = arrowFactory(arrow_char);
        const sort_handlers = this._sortHandlers;
        const buttons = sort_by_arr.map((sb_arg, i) => {
          const message_id = BUTTON_MESSAGE_ID_MAPPING[sb_arg];
          const arrow_node = arrow_factory(sort_by === sb_arg);
          const onsort = sort_handlers[i];
          const id = sb_arg; //just to satisfy React
          return (
            <div key={id}>
              <button onClick={onsort}>
                <FormattedMessage id={message_id} /> {arrow_node}
              </button>
            </div>
          );
        });

        return (
          <div className={grid_styles.grid_row_container}>
            {buttons}
          </div>
        );
      }
    }


    ASearchResultHeader.propTypes = {
      onSortRequest: PropTypes.func,
      sortOrder: PropTypes.string.isRequired,
      sortBy: PropTypes.string.isRequired
    };

    return ASearchResultHeader;
  }
);
