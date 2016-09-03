import React from 'react';
import LocaleChangeComponentItem from '../LocalChangeComponentItem'
import chai from 'global/utils/chai'
import {shallow, mount} from 'enzyme'
const {expect, spy:createSpy} = chai;

const data={
    key:"de-DE",
    name:"German",
    flag:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
};

describe("components/LocaleChangeComponent", function(){
  let on_select;

  beforeEach(()=>{
    on_select = createSpy();
  });

  it("should render", function(){
    expect(
      ()=>{
        shallow(
          <LocaleChangeComponentItem
            data={data}
          />
        )
      }
    ).to.not.throw();
  })

  it("should call onSelect handler when clicked", function(){
    const rendered = shallow(
      <LocaleChangeComponentItem
        data={data}
        onSelect={on_select}
      />
    )
    rendered.find("img").simulate("click");
    expect(on_select).to.have.been.called.once;
    expect(on_select).to.have.been.called.with(data.key);
  });

  it("should call onSelect handler when Enter pressed", function(){
    const rendered = shallow(
      <LocaleChangeComponentItem
        data={data}
        onSelect={on_select}
      />
    )
    rendered.find("img").simulate("keydown", {which:13, keyCode:13});
    expect(on_select).to.have.been.called.once;
    expect(on_select).to.have.been.called.with(data.key)
  });
});
