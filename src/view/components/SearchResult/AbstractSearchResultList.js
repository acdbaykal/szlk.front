import React from "react"
import styles from './style/SearchResultList.styl'

export default (SearchResultItemClass) =>({
  translations=[],
  onEdit=()=>{},
  onDelete=()=>{}
}) =>{
    const items = translations.map((item)=>{
      return <SearchResultItemClass translation={item} key={item.get("_id")} onEdit={onEdit} onDelete={onDelete}/>
    });

    return <ol className={styles.search_result}>{items}</ol>
};
