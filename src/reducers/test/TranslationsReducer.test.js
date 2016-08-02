import chai from 'global/utils/chai'
import TranslationsReducer from '../TranslationsReducer'
import {createTranslation, EntryType as Type} from 'global/data/Translation'
import {Map} from 'immutable'

const {expect} = chai;

  describe('reducers/TranslationsReducer', function(){

  let store;
  const ID = "1";
  const OTHER_ID = "2";
  const entry = createTranslation({
    _id:ID,
    origin:{
      main:"main"
    },
    translation:"translation",
    type:Type.NOUN_FEM
  })

  const updated_entry = entry.set('type', Type.NOUN_MAS);
  const different_entry = entry.set('_id', OTHER_ID);

  beforeEach(function(){
    store = (Map()).set(ID, entry);
  });

  describe('should handle a SEARCH_FULFILLED action', function(){

    it('by updating previosly existing translations', function(){
      const payload = [updated_entry];
      const action = {type:"SEARCH_FULFILLED", payload}
      const result = TranslationsReducer(store, action);
      expect(Map.isMap(result)).to.be.true;
      expect(result.get(ID)).to.be.equal(updated_entry);
    })

    it('by adding translations not previosly present', function(){
      const payload = [different_entry];
      const action = {type:"SEARCH_FULFILLED", payload}
      const result = TranslationsReducer(store, action);
      expect(Map.isMap(result)).to.be.true;
      expect(result.get(OTHER_ID)).to.be.equal(different_entry);
      expect(result.get(ID)).to.be.equal(entry);
    })
  })

  describe('it should handle DELETE_TRANSLATION_FULFILLED', function(){
    it('by removing the translation from the store', function(){
      const payload = entry;
      const action = {type:"DELETE_TRANSLATION_FULFILLED", payload}
      const result = TranslationsReducer(store, action);
      expect(Map.isMap(result)).to.be.true;
      expect(result.get(ID)).to.be.undefined;
    })
  })

  describe('it should handle UPDATE_TRANSLATION_FULFILLED', function(){
    it('by updating the translation in the store', function(){
      const payload = updated_entry;
      const action = {type:"UPDATE_TRANSLATION_FULFILLED", payload}
      const result = TranslationsReducer(store, action);
      expect(Map.isMap(result)).to.be.true;
      expect(result.get(ID)).to.be.equal(updated_entry);
    })
  })

  describe('it should handle ADD_TRANSLATION_FULFILLED', function(){
    it('by adding the new translation to the store', function(){
      const payload = different_entry;
      const action = {type:"ADD_TRANSLATION_FULFILLED", payload}
      const result = TranslationsReducer(store, action);
      expect(Map.isMap(result)).to.be.true;
      expect(result.get(ID)).to.be.equal(entry);
      expect(result.get(OTHER_ID)).to.be.equal(different_entry);
    })
  })

  it('should return the same store when an unrelevant action is being passed', function(){
      const store = ",jkh,lhn,hn,hn";
      const action = {type:"35sd.mkna s"};
      const result = TranslationsReducer(store, action);
      expect(store === result).to.be.true;
  })
})
