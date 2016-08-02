import chai from 'global/utils/chai'
import FilteringReducer from '../FilteringReducer'

const {expect} = chai;

describe('reducers/FilteringReducer', function(){

  it('should handle a SET_SEARCH_TERM action by returning th new search term', function(){
    const payload = {search_term:"something"};
    const action = {type:"SET_SEARCH_TERM", payload};
    const result = FilteringReducer(undefined, action);
    expect(result).to.be.equal(payload);
  })

  it('should return the same store when an unrelevant action is being passed', function(){
      const store = ",jkh,lhn,hn,hn";
      const action = {type:"35sd.mkna s"};
      const result = FilteringReducer(store, action);
      expect(store === result).to.be.true;
  })
})
