export default (action_function_map, default_val) =>{
  return (store=default_val, action)=>{
    if(typeof action_function_map[action.type] === "function"){
        let func = action_function_map[action.type];
        return func(store, action);
    }
    else{
      return store;
    }
  };
}
