import React from "react";
import TypeCell from './SearchResultItemTypeCell';
import grid_styles from './style/SearchResultGrid.styl';
import styles from './style/SearchResultItem.styl';

export default ({translation : translation_record}) =>{
  const origin = translation_record.get("origin");
  const origin_main = origin.get("main");
  const origin_short = origin.get("short") || "";
  const translation = translation_record.get("translation");
  const type = translation_record.get("type");
  const className = `${grid_styles.grid_row_container} ${styles.search_result_item}`;
  return (
    <li className={className}>
      <span>
        <span>
          <span className="search-result-item__main">{origin_main}</span>
          <span className="search-result-item__short">{origin_short}</span>
        </span>
      </span>
      <span>
          <TypeCell type={type} />
      </span>
      <span>
          <span className="search-result-item__translation">{translation}</span>
      </span>
    </li>
  );
};
