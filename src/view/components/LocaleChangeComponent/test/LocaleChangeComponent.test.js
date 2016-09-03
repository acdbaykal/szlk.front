import React from 'react';
import LocaleChangeComponent from '../LocaleChangeComponent';
import LocaleChangeComponentItem from '../LocalChangeComponentItem';
import chai from 'global/utils/chai';
import {shallow, mount} from 'enzyme';
import Immutable from 'immutable';
const {expect} = chai;

/*eslint-disable no-undef, prefer-arrow-callback, func-names*/
const supported_locales = Immutable.fromJS({
  'de-DE': {
    name: 'German',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg'
  },
  'tr-TR': {
    name: 'Turkish',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg'
  },
  'en-GB': {
    name: 'English',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
  }
});

describe('components/LocaleChangeComponent', function(){
  it('should render', function(){
    expect(
      () => {
        shallow(
          <LocaleChangeComponent
            supportedLocales={supported_locales}
            current="tr-TR"
          />
        )
      }
    ).to.not.throw();
  })

  it('should present the flag of the current locale on top', function(){
      const current = 'tr-TR';
      const rendered = mount(
        <LocaleChangeComponent
          supportedLocales={supported_locales}
          current={current}
        />
    );
    const first_flag = rendered.find(LocaleChangeComponentItem).first().find('img').get(0);
    expect(first_flag.getAttribute('src')).to.be.equal(supported_locales.get(current).get('flag'));
  })
});
