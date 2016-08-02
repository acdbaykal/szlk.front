import webpack from 'webpack'
import path from 'path'
import webpack_config from './webpack.config.dev'
import browsers from './webpack.config.browsers'

export default function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    exclude: ['*.styl'],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: webpack_config,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
