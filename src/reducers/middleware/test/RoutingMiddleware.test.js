import RoutingMiddleware from '../RoutingMiddleware.js';
import chai from 'global/utils/chai'
const {expect, spy:createSpy} = chai;
const spyOn = chai.spy.on;

describe('middleware/RoutingMiddleware', function(){
  let history_mock = Object.defineProperties({}, {
    "push":{
      value:function(url){},
      writable:true,
      enumerable:true
    }
  });
  const store_mock = {};
  let next;
  let middleware;
  let push_spy;

  beforeEach(function(){
    next = createSpy();
    push_spy = spyOn(history_mock,'push');
    middleware = RoutingMiddleware(history_mock)(store_mock)(next);
  })

  it('should handle any ROUTE_TO action', function(){
    const action = {type:"ROUTE_TO", url:"any_location"};
    middleware(action);
    expect(push_spy).to.have.been.called.once;
    expect(push_spy).to.have.been.called.with(action.url);
  })

  it('should route to the administrative layout after a succesfull login (LOGIN_FULFILLED)', function(){
    const action = {type:"LOGIN_FULFILLED"};
    middleware(action);
    expect(push_spy).to.have.been.called.once;
    expect(push_spy).to.have.been.called.with('/admin');
  })

  it('it should passon any action it is not concerned with', function(){
    const action = {type:"lkröglkasrgnjöla rke gas"};
    middleware(action);
    expect(next).to.have.been.called.once;
    expect(next).to.have.been.called.with(action);
  })
});
