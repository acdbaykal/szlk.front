import chai from 'global/utils/chai';
import LocaleReducer from '../LocaleReducer';

const {expect} = chai;

/*eslint-disable no-undef, prefer-arrow-callback, func-names, no-unused-expressions*/
describe('reducers/LocaleReducer', function(){
  it('should handle a SET_LOCALE action by setting the locale', function(){
    const action = {type: 'SET_LOCALE', payload: 'en'};
    const result = LocaleReducer({}, action);
    expect(result.current).to.be.equal('en');
  });
});
