import SortingReducer from '../SortingReducer'
import SortBy from 'global/data/SortableEnum'
import SortOrder from 'global/data/SortDirectionEnum'
import chai from 'global/utils/chai'
const {expect} = chai;

describe('reducers/SortingReducer', function(){

  describe('it should handle the SET_SORTBY actions', function(){
    it('by setting the sort_by property if the value is different than one before', function(){
      const store = {sort_by : SortBy.TYPE, sort_order:SortOrder.ASCENDING};
      const action = {type:"SET_SORTBY", sort_by : SortBy.ORIGIN};
      const result = SortingReducer(store, action);
      expect(result.sort_by).to.be.equal(SortBy.ORIGIN);
      expect(result.sort_order).to.be.equal(SortOrder.ASCENDING);
    })

    it('by switching the sort_order property if the value is the same as the one before', function(){
      const store = {sort_by : SortBy.TYPE, sort_order:SortOrder.ASCENDING};
      const action = {type:"SET_SORTBY", sort_by : SortBy.TYPE};
      const result = SortingReducer(store, action);
      expect(result.sort_by).to.be.equal(SortBy.TYPE);
      expect(result.sort_order).to.be.equal(SortOrder.DESCENDING);
    })
  })
  it('should return the same store when an unrelevant action is being passed', function(){
      const store = ",jkh,lhn,hn,hn";
      const action = {type:"35sd.mkna s"};
      const result = SortingReducer(store, action);
      expect(store === result).to.be.true;
  })
})
