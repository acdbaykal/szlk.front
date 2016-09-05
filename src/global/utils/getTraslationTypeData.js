import {Record} from 'immutable';
import {EntryType} from 'global/data/Translation';

const {
  ADJECTIVE, DIRECTIVE, NOUN_FEM, NOUN_MAS, NOUN_NEUT, NOUN_PL, PREFIX, VERB
} = EntryType;

const TranslationTypeData = Record({
  id: 'undefined translation type', defaultMessage: '', type: NOUN_FEM
});

const TypeToDataMap = (() => {
  const result = {};
  result[ADJECTIVE] = new TranslationTypeData(
    {id: 'app.translation.type.adj', defaultMessage: 'Sıfat', type: ADJECTIVE}
  );
  result[DIRECTIVE] = new TranslationTypeData(
    {id: 'app.translation.type.direct', defaultMessage: 'Direktif', type: DIRECTIVE}
  );
  result[NOUN_FEM] = new TranslationTypeData(
    {id: 'app.translation.type.noun.fem', defaultMessage: 'İsim (dişi)', type: NOUN_FEM}
  );
  result[NOUN_MAS] = new TranslationTypeData(
    {id: 'app.translation.type.noun.masc', defaultMessage: 'İsim (erkek)', type: NOUN_MAS}
  );
  result[NOUN_NEUT] = new TranslationTypeData(
    {id: 'app.translation.type.noun.neut', defaultMessage: 'İsim (neut)', type: NOUN_NEUT}
  );
  result[NOUN_PL] = new TranslationTypeData(
    {id: 'app.translation.type.noun.pl', defaultMessage: 'İsim (çoğul)', type: NOUN_PL}
  );
  result[PREFIX] = new TranslationTypeData(
    {id: 'app.translation.type.pre', defaultMessage: 'Ön ek', type: PREFIX}
  );
  result[VERB] = new TranslationTypeData(
    {id: 'app.translation.type.verb', defaultMessage: 'Fiil', type: VERB}
  );
  return result;
})();

function getTranslationTypeData(type){
  return TypeToDataMap[type];
}

export default getTranslationTypeData;
