import React from "react"
import chai from 'chai'
import {shallow} from 'enzyme'
import SearchResultItem from "../SearchResultItem"
import {createTranslation} from 'global/data/Translation'

const {expect} = chai;

describe("components/SearcResultItem", function(){

  it("should render with a short", function(){
    const translation = createTranslation({
        "origin":{"main":"Abblendung der Lichter", "short":"AdL"},
        "type":"e",
        "translation":"aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, uzun farları kısaya alma"
      });
    expect(()=>{
        shallow(
          <SearchResultItem translation={translation}/>
        )
    }).to.not.throw();
  });

  it("should render without a short", function(){
    const translation = createTranslation({
        "origin":{"main":"Abblendung der Lichter", "short":"AdL"},
        "type":"e",
        "translation":"aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, uzun farları kısaya alma"
      });
    expect(()=>{
      shallow(
        <SearchResultItem translation={translation}/>
      );
    }).to.not.throw();
  });
});
