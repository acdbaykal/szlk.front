import React from 'react';
import LoginComponent from '../LoginComponent'
import chai from 'global/utils/chai'
import {shallow, mount} from 'enzyme'
const {expect, spy:createSpy} = chai;

describe('components/LoginComponent', function(){
  it('should shallow render', function(){
    const func = ()=> {
      shallow(<LoginComponent/>);
    }
  });

  it('should call onLogIn property when login button triggered', function(){
    const spy = createSpy();
    const component = mount(<LoginComponent onLogIn ={spy}/>);
    const btn = component.find('.js-send-btn');
    btn.simulate('click');
    expect(spy).to.have.been.called.once;
  });

  it('should call onCancel property when canceö button triggered', function(){
    const spy = createSpy();
    const component = mount(<LoginComponent onCancel ={spy}/>);
    const btn = component.find('.js-cancel-btn');
    btn.simulate('click');
    expect(spy).to.have.been.called.once;
  });
});
