import React from 'react';
import MainContainer from '../MainContainer'
import {shallow} from 'enzyme'
import chai from 'global/utils/chai'

const {expect} = chai;

describe('container/MainContainer', function(){
  it('it should shallow render', function(){
    const top_float = <div></div>;
    const main = <div></div>;
    const func = () => shallow(<MainContainer top_float={top_float} main={main} />);
    expect(func).to.not.throw();
  });
});
