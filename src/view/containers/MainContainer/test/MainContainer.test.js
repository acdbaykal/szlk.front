import React from 'react';
import MainContainer from '../MainContainer'
import {shallow} from 'enzyme'
import chai from 'global/utils/chai'

const {expect} = chai;

describe('container/MainContainer', function(){
  it('it should shallow render', function(){
    const func = ()=>{shallow(<MainContainer><div/></MainContainer>)};
    expect(func).to.not.throw();
  });
});
