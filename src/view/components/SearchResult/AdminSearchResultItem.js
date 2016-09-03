import React from "react";
import grid_styles from './style/SearchResultGrid.styl';
import styles from './style/AdminSearchResultItem.styl';

let focused_content;

function updateAssociatedProperty(cell, translation){
  const property_name = cell.attributes["data-property"].value;
  const content = cell.innerHTML;
  const translation_origin = translation.get("origin");
  switch(property_name){
  case 'translation':
    return translation.set('translation', content);
  case 'origin':
    return translation.set('origin', translation_origin.set('main', content));
  case 'short':
    return translation.set('origin', translation_origin.set('short', content));
  case 'creation_date':
    return translation.set('creation_date', content);
  case 'edit_date':
    return translation.set('edit_date', content);
  default:
    return undefined;
  }
}

function editHandlerFactory(translation, callback){
  return (event) => {
    const {currentTarget} = event;
    const updated = updateAssociatedProperty(currentTarget, translation);
    callback(updated);
  };
}

function onFocusInCell(event){
  const {currentTarget} = event;
  focused_content = currentTarget.innerHTML;
}

function focusInCellHandlerFactory(){ //simply for the sake of consistency
  return onFocusInCell;
}

function focusOutCellHandlerFactory(translation, callback){
  const edit_handler = editHandlerFactory(translation, callback);

  const handler = (event)=>{
    const {currentTarget} = event;
    const new_content = currentTarget.innerHTML;

    if(new_content !== focused_content){
      edit_handler({...event, type:"change"});
    }

    focused_content = undefined;
  }

    return handler;
}

export default ({translation : translation_record, onDelete=()=>{}, onEdit=()=>{}}) =>{
  const origin = translation_record.get("origin");
  const origin_main = origin.get("main");
  const origin_short = origin.get("short") || "";
  const translation = translation_record.get("translation");
  const type = translation_record.get("type");
  const creation_date = translation_record.get("creationDate").toString();
  const edit_date = translation_record.get("editDate").toString();
  const className = `${grid_styles.grid_row_container} ${styles['search-result-item']}`;
  const inputClassName = `${styles['search-result-item']} ${styles['search-result-item__cell']} ${styles['search-result-item__cell_read']}`;

  const focusin_handler = focusInCellHandlerFactory();
  const focusout_handler = focusOutCellHandlerFactory(translation_record, onEdit);
  const delete_handler = ()=>{onDelete(translation_record)};

  return <li className={className}>
            <span>
              <span>
                <div
                  onFocus={focusin_handler}
                  onBlur={focusout_handler}
                  className={inputClassName}
                  contentEditable
                  data-property="origin"
                >
                {origin_main}
              </div>
              </span>
            </span>
            <span>
              <div
                onFocus={focusin_handler}
                onBlur={focusout_handler}
                className={inputClassName}
                contentEditable
                data-property="short"
                className="js-origin-field"
              >
                {origin_short}
            </div>
            </span>
            <span>
            <div
              onFocus={focusin_handler}
              onBlur={focusout_handler}
              className={inputClassName}
              contentEditable
              data-property="type"
              className="js-type-field"
            >
              {type}
            </div>
            </span>
            <span>
              <div
                onFocus={focusin_handler}
                onBlur={focusout_handler}
                className={inputClassName}
                contentEditable
                data-property="translation"
                className="js-translation-field"
              >
              {translation}
            </div>
            </span>
            <span>
              <div
                onFocus={focusin_handler}
                onBlur={focusout_handler}
                className={inputClassName}
                data-property="creation_date"
                className="js-creation-date-field"
              >
              {creation_date}
            </div>
            </span>
            <span>
              <div
                onFocus={focusin_handler}
                onBlur={focusout_handler}
                className={inputClassName}
                data-property="edit_date"
                className="js-edit-date-field"
              >
                {edit_date}
              </div>
            </span>
            <span>
              <button className="js-delete-btn" onClick={delete_handler}>-</button>
            </span>
        </li>
};
