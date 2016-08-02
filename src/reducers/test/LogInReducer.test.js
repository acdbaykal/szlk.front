import chai from 'global/utils/chai'
import LogInReducerFactory from '../LogInReducer'

const {expect} = chai;

describe('reducers/LogInReducer', function(){

  const history_mock = { };
  const LogInReducer = LogInReducerFactory(history_mock);

  it('should handle a LOGIN_FULFILLED action by setting the loggedin user', function(){
    const payload = {user:"user", pass:"pass"};
    const action = {type:"LOGIN_FULFILLED", payload};
    const result = LogInReducer(undefined, action);
    expect(result).to.be.equal(payload);
  })

  it('should return the same store when an unrelevant action is being passed', function(){
      const store = ",jkh,lhn,hn,hn";
      const action = {type:"35sd.mkna s"};
      const result = LogInReducer(store, action);
      expect(store === result).to.be.true;
  })
})
