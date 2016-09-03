export default ((history) => {
  const route_to = history.push; //local alias
  return () => (next) => (action) => {
    const {type} = action;

    if(type === 'ROUTE_TO'){
      const {url} = action;
      route_to(url);
    }else if(type === 'LOGIN_FULFILLED'){
      next(action);//let the log in be handled
      route_to('/admin');//an than move to the admin page
    }else{//does not concern this midware, just forward it
      next(action);
    }
  };
});
