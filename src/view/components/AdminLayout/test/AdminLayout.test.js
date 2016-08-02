import React from 'react'
import {createStore} from 'redux';
import AdminLayout from '../AdminLayout'
import chai from 'global/utils/chai'
import Immutable from 'immutable'
import SortBy from 'global/data/SortableEnum'
import SortDirection from 'global/data/SortDirectionEnum'
import {shallow} from 'enzyme'
const {expect} = chai;


describe('layouts/AdminLayout', function(){
  it('should shallow render', function(){
    const initial_state = {
      translations:Immutable.Map(),
      sorting:{sort_by:SortBy.ORIGIN, sort_order:SortDirection.ASCENDING},
      filtering:{search_term:""},
      login:{user:"", pass:"", logged_in:false}
    };
    const store = createStore(()=>{},initial_state);
    const func = ()=>{
      shallow(
        <AdminLayout translations={[]} store={store} initialState = {initial_state}/>
      );
    };

    expect(func).to.not.throw();
  })
})
