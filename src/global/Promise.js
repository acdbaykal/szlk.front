import PromisePolyfill from 'promise-polyfill';

const Promise = (() => {
  if(window && typeof window.Promise !== 'undefined'){
    return window.Promise;
  }
  return PromisePolyfill;
})();

export function createExposedPromise(){
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {resolve = res; reject = rej;});

  return {
    promise,
    reject,
    resolve
  };
}

export default Promise;
