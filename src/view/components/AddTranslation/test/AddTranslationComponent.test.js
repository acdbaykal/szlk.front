import React from 'react';
import AddTranslationComponent from 'view/components/AddTranslation/AddTranslationComponent'
import styles from 'view/components/AddTranslation/style/AddTranslationComponent.styl'
import chai from 'global/utils/chai'
import {shallow, mount, render} from 'enzyme'
const {expect, spy:createSpy} = chai;
const spyOn = chai.spy.on;


describe('components/AddTranslation/AddTranslationComponent', function(){

  let onAdd;

  beforeEach(function(){
    onAdd = createSpy();
  });

  it('should shallow render', function(){
      const func = ()=>{
        shallow(<AddTranslationComponent onAdd={onAdd}/>)
      };

      expect(func).to.not.throw();
  })

  it('should call the onAdd property when add button is triggerd', function(){
    const component = mount(<AddTranslationComponent onAdd={onAdd}/>);
    const add_btn = component.find('.js-add-btn');
    add_btn.simulate('click');
    expect(onAdd).to.have.been.called();
  })

  it('should be closed by default', function(){
    const component = shallow(<AddTranslationComponent/>);
    const input_area = component.find('.js-input-area');
    expect(input_area).to.have.className(styles["add-translation__input-area_closed"]);
  })

  it('should should render accourding to components "closed" state', function(){
    const component = mount(<AddTranslationComponent/>);
    const input_area = component.find('.js-input-area');

    component.setState({closed:false});
    expect(input_area).to.have.className(styles["add-translation__input-area_open"]);
    component.setState({closed:true});
    expect(input_area).to.have.className(styles["add-translation__input-area_closed"]);
  })
})
