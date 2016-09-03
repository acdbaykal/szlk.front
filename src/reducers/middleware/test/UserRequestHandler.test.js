import UserRequestHandler from '../UserRequestHandler.js';
import SortBy from 'global/data/SortableEnum';
import {Translation} from 'global/data/Translation';
import chai from 'global/utils/chai';
const {expect, spy: createSpy} = chai;
const spyOn = chai.spy.on;

/*eslint-disable no-undef, prefer-arrow-callback, func-names*/
describe('middleware/UserRequestHandler', function(){
  const promise = new Promise(() => {});
  const server_mock = {
    //eslint-disable-next-line quote-props
    'delete': () => promise,
    update: () => promise,
    add: () => promise,
    logIn: () => promise,
    search: () => promise
  };
  //eslint-disable-next-line arrow-body-style
  const store_mock = {getState: () => {
    return {
      login: {
        user: 'test',
        pass: 'test'
      }
    };
  }};
  let next;
  let middleware;

  beforeEach(function(){
    next = createSpy(({payload}) => payload);
    middleware = UserRequestHandler(server_mock)(store_mock)(next);
  });

  describe('it should handle actions/request send from the UI ', function(){
    describe('by sending out a request to the server and passing a promise to' +
            'the next middleware', function(){
      it('for the action SEARCH_REQUESTED', function(){
        const action = {type: 'SEARCH_REQUESTED', search: 'something'};
        const search_spy = spyOn(server_mock, 'search');
        middleware(action);
        expect(search_spy).to.have.been.called.with(action.search);
        expect(next).to.have.been.called.with({type: 'SEARCH', payload: promise});
      });

      it('for the action LOGIN_REQUESTED', function(){
        const action = {type: 'LOGIN_REQUESTED', user: 'user', pass: 'pass'};
        const login_spy = spyOn(server_mock, 'logIn');
        middleware(action);
        expect(login_spy).to.have.been.called.exactly(1);
        expect(login_spy).to.have.been.called.with('user');
        expect(login_spy).to.have.been.called.with('pass');
        expect(next).to.have.been.called.with({type: 'LOGIN', payload: promise});
      });

      it('for the action TRANSLATION_UPDATE_REQUESTED', function(){
        const translation = (new Translation()).set('_id', 'id');
        const action = {type: 'TRANSLATION_UPDATE_REQUESTED', translation};
        const update_spy = spyOn(server_mock, 'update');
        middleware(action);
        expect(update_spy).to.have.been.called.with(translation);
        expect(next).to.have.been.called.with({type: 'UPDATE_TRANSLATION', payload: promise});
      });

      it('for the action TRANSLATION_DELETE_REQUESTED', function(){
        const translation = (new Translation()).set('_id', 'id');
        const action = {type: 'TRANSLATION_DELETE_REQUESTED', translation};
        const delete_spy = spyOn(server_mock, 'delete');
        middleware(action);
        expect(delete_spy).to.have.been.called.with(translation);
        expect(next).to.have.been.called.with({type: 'DELETE_TRANSLATION', payload: promise});
      });

      it('for the action TRANSLATION_ADD_REQUESTED', function(){
        const translation = (new Translation()).set('_id', 'id');
        const action = {type: 'TRANSLATION_ADD_REQUESTED', translation};
        const add_spy = spyOn(server_mock, 'add');
        middleware(action);
        expect(add_spy).to.have.been.called.with(translation);
        expect(next).to.have.been.called.with({type: 'ADD_TRANSLATION', payload: promise});
      });
    });

    describe('by converting the action', function(){
      it('from SORT_REQUESTED to SET_SORTBY', function(){
        const sort_by = SortBy.ORIGIN;
        const action = {type: 'SORT_REQUESTED', sort_by};
        middleware(action);
        expect(next).to.have.been.called.with({type: 'SET_SORTBY', sort_by});
      });

      it('from LOGIN_NAVIGATION_REQUESTED to ROUTE_TO', function(){
        const action = {type: 'LOGIN_NAVIGATION_REQUESTED'};
        middleware(action);
        expect(next).to.have.been.called.with({type: 'ROUTE_TO', url: '/login'});
      });
    });

    it('by forwarding the seacrh term to the reducer whenever a SEARCH_REQUESTED ' +
        'action commes in', function(){
      const search_term = 'something';
      const action = {type: 'SEARCH_REQUESTED', search: search_term};
      middleware(action);
      expect(next).to.have.been.called.with({type: 'SET_SEARCH_TERM', payload: {search_term}});
    });
  });

  it('should block search requests where the term is shorter than 3 characters ' +
      'and forward others', function(){
    let action = {type: 'SEARCH_REQUESTED', search: '12'};
    const search_spy = spyOn(server_mock, 'search');
    middleware(action);
    expect(search_spy).to.not.have.been.called();

    search_spy.reset();

    action = {type: 'SEARCH_REQUESTED', search: '123'};
    middleware(action);
    expect(search_spy).to.have.been.called();
  });
});
