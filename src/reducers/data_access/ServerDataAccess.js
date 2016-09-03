import {createTranslation} from 'global/data/Translation';
import {createExposedPromise} from 'global/Promise';
import ajax from 'qwest';
import {sha256 as sha} from 'js-sha256';

//maybe this will become more ellborate
function ResponseErrorFactory(err/*, xhr, response*/){
  return err;
}

//we pass the returned function into qwest's catch function
//the reject parameter is the reject function of a Promise
function rejectForward(reject){
  return (err, xhr, response) =>
    reject(new ResponseErrorFactory(err, xhr, response));
}

function convertTranslations(xhr, response_data){
  const translations = typeof response_data === 'string' ?
                       JSON.parse(response_data) : response_data;

  const parsed = [];
  if(translations instanceof Array){
    translations.forEach((t) => {
      try{
        const translation = createTranslation(t);
        parsed.push(translation);
      }catch(err){
        console.log(err);//TODO:Better error handling
      }
    });
  }else{
    throw new Error(`Failed while parsing server's response:
                ${JSON.stringify(response_data)}`);
  }

  return parsed;
}

const TranslationSearchTemplate = server_root => search_term => {
  const {promise, resolve, reject} = createExposedPromise();
  ajax.get(`${server_root}/translations/${search_term}`).then(
    (xhr, request_data) => resolve(convertTranslations(xhr, request_data))
  ).catch(rejectForward(reject));
  return promise;
};

const TranslationUpdateTemplate = server_root => (translation_record, user, pass) => {
  const joined_request_data = {translations: [translation_record.toJS()], user, pass};
  const {promise, resolve, reject} = createExposedPromise();
  ajax.post(`${server_root}/translations`, joined_request_data,
    {dataType: 'json'}).then(
    (xhr, request_data) => resolve(convertTranslations(xhr, request_data))
  ).catch(rejectForward(reject));
  return promise;
};

const TranslationDeleteTemplate = server_root => (translation_record, user, pass) => {
  const joined_request_data = {translations: [translation_record.toJS()], user, pass};
  const {promise, resolve, reject} = createExposedPromise();
  //eslint-disable-next-line dot-notation
  ajax['delete'](`${server_root}/translations`, joined_request_data,
    {dataType: 'json'}).then(
    (xhr, request_data) => resolve(convertTranslations(xhr, request_data))
  ).catch(rejectForward(reject));
  return promise;
};

function getMessagesTemplate(server_root = ''){
  return function getMessages(locale){
    const {promise, resolve, reject} = createExposedPromise();
    ajax.get(`${server_root}/languages/${locale}`).then((xhr, response_data) => {
      const messages = typeof response_data === 'string' ?
                            JSON.parse(response_data) : response_data;
      resolve(messages);
    }).catch(rejectForward(reject));
    return promise;
  };
}

function getSupportedLanguagesTemplate(server_root = ''){
  return function getSupportedLanguages(){
    const {promise, resolve, reject} = createExposedPromise();
    ajax.get(`${server_root}/languages`).then((xhr, response_data) => {
      const supported = typeof response_data === 'string' ?
                            JSON.parse(response_data) : response_data;
      resolve(supported);
    }).catch(rejectForward(reject));
    return promise;
  };
}

function logInTemplate(server_root = ''){
  return function logIn(user, pass){
    const {promise, resolve, reject} = createExposedPromise();
    const data = {user, pass: sha(pass)};
    ajax.post(`${server_root}/login/`, data).then((xhr, response_data) => {
      const login_data = typeof response_data === 'string' ?
                            JSON.parse(response_data) : response_data;
      resolve(login_data);
    }).catch(rejectForward(reject));

    return promise;
  };
}

function ServerDataAcces(server_root = ''){
  return {
    getSupportedLanguages: getSupportedLanguagesTemplate(server_root),
    getMessages: getMessagesTemplate(server_root),
    add: TranslationUpdateTemplate(server_root),
    search: TranslationSearchTemplate(server_root),
    //eslint-disable-next-line quote-props
    'delete': TranslationDeleteTemplate(server_root),
    update: TranslationUpdateTemplate(server_root),
    logIn: (user, pass) => logInTemplate(server_root)(user, pass)
  };
}

export default ServerDataAcces;
