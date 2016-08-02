const Immutable = require('immutable');

const EntryType = Object.defineProperties({}, {
  NOUN_FEM : {value:"e", writable:false, enumerable:true},
  NOUN_MAS : {value:"r", writable:false, enumerable:true},
  NOUN_NEUT : {value:"s", writable:false, enumerable:true},
  NOUN_PL : {value:"pl", writable:false, enumerable:true},
  VERB : {value:"v", writable:false, enumerable:true},
  DIRECTIVE : {value:"d", writable:false, enumerable:true},
  ADJECTIVE : {value:"aj", writable:false, enumerable:true},
  PREFIX : {value:"pre", writable:false, enumerable:true}
})

const TranslationOrigin = Immutable.Record({ // the "origin" of the translation
  main:"",
  short:undefined //optional string
});

const Translation = Immutable.Record({
  _id:undefined,
  origin:new TranslationOrigin(),
  type:EntryType.NOUN_FEM,
  translation:"",
  creationDate:new Date(),
  editDate:new Date()
});

function checkType(type){
  var found = false;

  for(let t in EntryType){
    let val = EntryType[t];
    if(val === type){
      found = true;
      break;
    }
  }

  return found;
}

const createTranslation = function(obj){
  if( !(typeof obj._id === "undefined" || typeof obj._id === "string") ||
      typeof obj.origin !== "object" ||
      typeof obj.origin.main !== "string" ||
      typeof obj.type !== "string" ||
      typeof obj.translation !== "string" ||
      !(typeof obj.origin.short === "undefined" || typeof obj.origin.short === "string") ||
      !(typeof obj.creationDate === "undefined" || obj.creationDate instanceof Date) ||
      !(typeof obj.editDate === "undefined" || obj.editDate instanceof Date)||
      !checkType(obj.type)
){
    throw Error("Parameter given to create a translation is malformed: "  + JSON.stringify(obj));
}

  const origin = new TranslationOrigin(obj.origin);
  return  new Translation(Object.assign({}, obj, {origin:origin}));
}

module.exports = {
  createTranslation:createTranslation,
  EntryType:EntryType,
  TranslationOrigin:TranslationOrigin,
  Translation:Translation
}
