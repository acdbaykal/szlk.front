import React from 'react';
import SearchInput from '../SearchInput';
import {shallow} from 'enzyme';
import chai from 'global/utils/chai';
const {expect, spy: createSpy} = chai;

/*eslint-disable no-undef, prefer-arrow-callback, func-names*/
describe('components/SearchInput', function(){
  it('should shallow render', function(){
    //eslint-disable-next-line no-unused-expressions
    expect(
      shallow(
        <SearchInput onInputChange={() => {}} />
      ).length
    ).to.be.one;
  });

  it('should call the function delivered by the onInpuChange property, whenever ' +
    'the text in the input changes', function(){
    const onChange = createSpy();
    const input = <SearchInput onInputChange={onChange} />;
    const rendered = shallow(input);
    rendered.find('input').simulate('change', {target: {input: {value: 'changed'}}});
    expect(onChange).to.have.been.called();
  });
});
