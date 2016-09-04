import React from 'react';
import chai from 'chai';
import {shallowWithIntl} from 'view/utils/test/IntlHelper';
import SearchResultItem from '../SearchResultItem';
import {createTranslation} from 'global/data/Translation';

const {expect} = chai;

/*eslint-disable no-undef, func-names, prefer-arrow-callback, no-unused-expressions*/
describe('components/SearcResultItem', function(){

  it('should render with a short', function(){
    const translation = createTranslation({
        'origin':{'main':'Abblendung der Lichter', short:'AdL'},
        'type':'e',
        'translation':'aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, uzun farları kısaya alma'
    });
    expect(() => {
      shallowWithIntl(
        <SearchResultItem translation={translation} />
      )
    }).to.not.throw();
  });

  it('should render without a short', function(){
    const translation = createTranslation({
        'origin':{'main':'Abblendung der Lichter'},
        'type':'e',
        'translation':'aydınlatmanın kapatılması veya azaltılması, ışıkları köreltme, uzun farları kısaya alma'
      });
    expect(() => {
      shallowWithIntl(
        <SearchResultItem translation={translation}/>
      );
    }).to.not.throw();
  });
});
