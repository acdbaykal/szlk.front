import React, {PropTypes} from 'react'
import SortBy from 'global/data/SortableEnum'
import SortOrder from 'global/data/SortDirectionEnum'
import AbstractSearchResultHeader from '../AbstractSearchResultHeader'
import {shallow} from 'enzyme'
import chai from 'chai'
const {expect, spy:createSpy} = chai;

describe('components/AbstractSearchResultHeader', function(){
  const HeaderClass = AbstractSearchResultHeader([
      SortBy.ORIGIN, SortBy.TRANSLATION, SortBy.TYPE
  ]);

  it('sould shallow render', function(){
    const func = ()=>{
      shallow(<HeaderClass/>)
    }
    expect(func).to.not.throw();
  })

  it('should have as many buttons as children as given while craeting a concrete class', function(){
    const rendered = shallow(<HeaderClass/>);
    expect(rendered.find("button").length).to.be.equal(3);
  })

  it('triggering a button should cause the onSortRequest propety to be called', function(){
    const spy = createSpy();
    const rendered = shallow(
      <HeaderClass
        sortBy={SortBy.TRANSLATION}
        sortOrder={SortOrder.ASCENDING}
        onSortRequest = {spy}
      />
    );
    const buttons = rendered.find("button");
    const origin_sort_btn = buttons.first();
    origin_sort_btn.simulate('click');
    expect(spy).to.have.been.called.once;
  })
});
