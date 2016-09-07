const A_KEY_CODE = 65;

const ACTION_TO_HANDLER_MAP = {
  LOGIN_NAVIGATION_REQUESTED: dispatch => event => {
    if(event.shiftKey && event.ctrlKey &&
      (event.which === A_KEY_CODE || event.keyCode === A_KEY_CODE)){
      dispatch({type: 'LOGIN_NAVIGATION_REQUESTED'});
    }
  },
  LOGIN_REQUESTED: dispatch => ({user = '', pass = ''}) => {
    dispatch({type: 'LOGIN_REQUESTED', user, pass});
  },
  LOGIN_CANCEL_REQUESTED: dispatch => () => {
    dispatch({type: 'LOGIN_CANCEL_REQUESTED'});
  },
  SEARCH_REQUESTED: dispatch => ({value}) => dispatch(
    {type: 'SEARCH_REQUESTED', search: value}
  ),
  SORT_REQUESTED: dispatch => ({sort_by}) => dispatch({type: 'SORT_REQUESTED', sort_by}),
  TRANSLATION_ADD_REQUESTED: dispatch => translation => dispatch(
    {type: 'TRANSLATION_ADD_REQUESTED', translation}
  ),
  TRANSLATION_DELETE_REQUESTED: dispatch => translation => dispatch(
    {type: 'TRANSLATION_DELETE_REQUESTED', translation}
  ),
  TRANSLATION_UPDATE_REQUESTED: dispatch => translation => dispatch(
    {type: 'TRANSLATION_UPDATE_REQUESTED', translation}
  )
};

export default (type, dispatch) => {
  const handler_factory = ACTION_TO_HANDLER_MAP[type];
  return typeof handler_factory === 'function' ?
    handler_factory(dispatch) : () => {};
};
