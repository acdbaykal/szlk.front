import React from 'react';
import {expect, spy as createSpy} from 'chai';
import {shallow, mount} from 'enzyme';
import AdminSearchResultItem from '../AdminSearchResultItem';
import {createTranslation} from 'global/data/Translation';

/*eslint-disable no-undef, func-names, prefer-arrow-callback*/
describe('components/AdminSearcResultItem', function(){
  const translation = createTranslation({
    origin: {main: 'Abblendung der Lichter', short: 'AdL'},
    type: 'e',
    translation: 'aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, ' +
                  'uzun farları kısaya alma'
  });

  it('should render with a short', function(){
    expect(() => shallow(<AdminSearchResultItem translation={translation} />)
    ).to.not.throw();
  });

  it('should render without a short', function(){
    expect(() => {
      shallow(
        <AdminSearchResultItem translation={translation.remove('short')} />
      );
    }).to.not.throw();
  });

  it('should call the onDelete property when the delete button is triggered', function(){
    const spy = createSpy();
    const component = shallow(
      <AdminSearchResultItem translation={translation} onDelete={spy} />
    );
    const del_btn = component.find('.js-delete-btn');
    del_btn.simulate('click');
    expect(spy).to.have.been.called.once;
    expect(spy).to.have.been.called.with(translation);
  });

  it('should call the onEdit property when the a editable field is focused, ' +
      'changed and then focused out', function(){
    const spy = createSpy();
    const component = mount(
      <AdminSearchResultItem translation={translation} onEdit={spy} />
    );
    const origin_field = component.find('.js-origin-field');
    origin_field.simulate('focus');
    origin_field.get(0).innerText = 'something different';
    origin_field.simulate('blur');
    expect(spy).to.have.been.called.once;
  });

  it('should NOT call the onEdit property when the a editable field is focused' +
      'and then focused out without a change', function(){
    const spy = createSpy();
    const component = mount(
      <AdminSearchResultItem translation={translation} onEdit={spy} />
    );
    const origin_field = component.find('.js-origin-field');
    origin_field.simulate('focus');
    origin_field.simulate('blur');
    expect(spy).to.not.have.been.called;
  });
});
