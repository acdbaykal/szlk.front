import React from 'react';
import AddTranslationComponent from 'view/components/AddTranslation/AddTranslationComponent';
import styles from 'view/components/AddTranslation/style/AddTranslationComponent.styl';
import chai from 'global/utils/chai';
import {shallowWithIntl, mountWithIntl} from 'view/utils/test/IntlHelper';
const {expect, spy: createSpy} = chai;

/*eslint-disable no-undef, func-names, prefer-arrow-callback*/
describe('components/AddTranslation/AddTranslationComponent', function(){
  let onAdd;

  beforeEach(function(){
    onAdd = createSpy();
  });

  it('should render', function(){
    const func = () => {
      shallowWithIntl(<AddTranslationComponent onAdd={onAdd} />);
    };

    expect(func).to.not.throw();
  });

  it('should call the onAdd property when add button is triggerd', function(){
    const component = mountWithIntl(<AddTranslationComponent onAdd={onAdd} />);
    const add_btn = component.find('.js-add-btn');
    add_btn.simulate('click');
    expect(onAdd).to.have.been.called();
  });

  it('should be closed by default', function(){
    const component = mountWithIntl(<AddTranslationComponent />);
    const input_area = component.find('.js-input-area');
    expect(input_area).to.have.className(styles['add-translation__input-area_closed']);
  });

  it('should render accourding to components "closed" state', function(){
    let component = mountWithIntl(<AddTranslationComponent initiallyClosed={false} />);
    let input_area = component.find('.js-input-area');
    expect(input_area).to.have.className(styles['add-translation__input-area_open']);

    component = mountWithIntl(<AddTranslationComponent initiallyClosed={true} />);
    input_area = component.find('.js-input-area');
    expect(input_area).to.have.className(styles['add-translation__input-area_closed']);
  });
});
