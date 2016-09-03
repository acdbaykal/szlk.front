import LanguageMiddlewareFactory from '../LanguageMiddleware';
import chai from 'global/utils/chai';
const {expect, spy: createSpy} = chai;

/*eslint-disable no-undef, prefer-arrow-callback, func-names, no-unused-expressions*/
const data_connection = {
  //eslint-disable-next-line arrow-body-style
  getMessages: createSpy(() => {
    return {
      key: 'translation'
    };
  }),
  //eslint-disable-next-line arrow-body-style
  getSupportedLanguages: createSpy(() => {
    return {
      de: {
        message_id: 'app.lang.german',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg'
      }
    };
  })
};

describe('middleware/LanguageMiddleware', function(){
  const LanguageMiddleware = LanguageMiddlewareFactory(data_connection);
  const next = createSpy();

  beforeEach(function(){
    //eslint-disable-next-line guard-for-in
    for(const f in data_connection){
      const spy = data_connection[f];
      spy.reset();
    }

    next.reset();
  });

  describe('should handle INIT_LANGUAGE', function(){
    it('by requesting data from the server and forwarding the resulting promisses', function(){
      //eslint-disable-next-line arrow-body-style
      const store = {getState: () => {return {};}};
      LanguageMiddleware(store)(next)({type: 'INIT_LANGUAGE'});
      expect(next).to.have.been.called();
    });
  });
});
