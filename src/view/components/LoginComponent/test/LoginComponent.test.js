import React from 'react';
import LoginComponent from '../LoginComponent';
import {shallowWithIntl, mountWithIntl} from 'view/utils/test/IntlHelper';
import chai from 'global/utils/chai';
const {expect, spy: createSpy} = chai;

/*eslint-disable no-undef, prefer-arrow-callback, func-names*/
describe('components/LoginComponent', function(){
  it('should shallow render', function(){
    const func = () => {
      shallowWithIntl(<LoginComponent />);
    };

    expect(func).not.to.throw();
  });

  it('should call onLogIn property when login button triggered', function(){
    const spy = createSpy();
    const component = mountWithIntl(<LoginComponent onLogIn ={spy} />);
    const btn = component.find('.js-send-btn');
    btn.simulate('click');
    expect(spy).to.have.been.called.exactly(1);
  });

  it('should call onCancel property when canceö button triggered', function(){
    const spy = createSpy();
    const component = mountWithIntl(<LoginComponent onCancel ={spy} />);
    const btn = component.find('.js-cancel-btn');
    btn.simulate('click');
    expect(spy).to.have.been.called.exactly(1);
  });
});
