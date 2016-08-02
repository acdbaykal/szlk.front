export default ((history)=>{
    const route_to = history.push; //local alias
    return (store)=>(next)=>(action)=>{
        const {type} = action;

        if(type === "ROUTE_TO"){
          const{url} = action;
          route_to(url);
        }
        else if(type === "LOGIN_FULFILLED"){
          route_to('/admin');
        }
        else{//does not concern this mid ware, just forward it
          next(action);
        }
    };
});
