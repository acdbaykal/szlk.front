import {Translation, EntryType as Type, createTranslation} from '../Translation'
import chai from 'global/utils/chai'
const {expect} = chai;

const valid = { // treat as read only
  origin :{main:"main", short:"short"},
  type : Type.NOUN_FEM,
  translation : "translation"
};

const integer_main = {
  origin :{main:0,short:"short"},
  type : Type.NOUN_FEM,
  translation : "translation"
};

const missing_main = {
  origin :{short:"short"},
  type : Type.NOUN_FEM,
  translation : "translation"
};

const unknowen_type = {
  origin :{main:"main", short:"short"},
  type : "sdnöalfdaflfanl",
  translation : "translation"
};

const integer_translation ={ // treat as read only
  origin :{main:"main", short:"short"},
  type : Type.NOUN_FEM,
  translation : 0
};

const integer_short = {
  origin :{main:"main", short:0},
  type : Type.NOUN_FEM,
  translation : "translation"
};

describe("createTranslation function", function(){
  it("should create a translation object and insert its values, when the given object parameter is valid", function(){
    const tested = createTranslation(valid);
    expect(tested).to.be.instanceof(Translation);
    const tested_origin = tested.get("origin");
    expect(tested_origin.get("main")).to.be.equal(valid.origin.main);
    expect(tested_origin.get("short")).to.be.equal(valid.origin.short);
    expect(tested.get("type")).to.be.equal(valid.type);
    expect(tested.get("translation")).to.be.equal(valid.translation);;
  });

  it("should throw if the parameter object is somehow invalid", function(){
      expect(function(){
        createTranslation(integer_main);
      }).to.throw();

      expect(function(){
        createTranslation(missing_main);
      }).to.throw();

      expect(function(){
        createTranslation(unknowen_type);
      }).to.throw();

      expect(function(){
        createTranslation(integer_translation);
      }).to.throw();

      expect(function(){
        createTranslation(integer_short);
      }).to.throw();
  })
});
