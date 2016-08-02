import React from 'react';
import SearchInput from '../SearchInput';
import {shallow} from 'enzyme'
import chai from 'global/utils/chai'
const {expect, spy:createSpy} = chai;
const spyOn = chai.spy.on;

describe('components/SearchInput', ()=>{

  it('should shallow render', ()=>{
    expect(
      shallow(
        <SearchInput onInputChange={()=>{}} initial="Enter your search term"/>
      ).length
    ).to.be.one;
  })

  it('should call the function delivered by the onInpuChange property, whenever the text in the input changes', ()=>{
    const onChange = createSpy();
    const input = <SearchInput onInputChange={onChange} initial="Enter your search term"/>;
    const rendered = shallow(input);
    rendered.find("input").simulate("change", {target:{input:{value:"changed"}}});
    expect(onChange).to.have.been.called();
  })
});
