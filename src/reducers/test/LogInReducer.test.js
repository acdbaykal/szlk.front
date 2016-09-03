import chai from 'global/utils/chai';
import LogInReducer from '../LogInReducer';

const {expect} = chai;
/*eslint-disable no-undef, func-names, prefer-arrow-callback*/
describe('reducers/LogInReducer', function(){
  it('should handle a LOGIN_FULFILLED action by setting the loggedin user', function(){
    const payload = {user: 'user', pass: 'pass'};
    const action = {type: 'LOGIN_FULFILLED', payload};
    const result = LogInReducer(undefined, action);
    expect(result).to.include.keys('user', 'pass', 'logged_in');
    const {user, pass, logged_in} = result;
    expect(user).to.be.equal('user');
    expect(pass).to.be.equal('pass');
    expect(logged_in).to.be.equal(true);
  });

  it('should return the same store when an unrelevant action is being passed', function(){
    const store = ',jkh,lhn,hn,hn';
    const action = {type: '35sd.mkna s'};
    const result = LogInReducer(store, action);
    expect(store === result).to.be.equal(true);
  });
});
