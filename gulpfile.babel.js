import gulp from 'gulp';
import webpack from "webpack";
import gutil from 'gulp-util';
import WebpackDevServerConfig from './webpack.config.dev';
import WebpackProductionConfig from './webpack.config.production';
import WebpackDevServer from 'webpack-dev-server';
import mocha from 'gulp-spawn-mocha';
import print from 'gulp-print'
import babel from 'babel-core/register';
import {fork} from 'child_process';
import {Server as KarmaServer} from 'karma';

const destination_folder = 'dist/';
const js_source = ["src/**/*.js"];
const html_source  = ["index.html"];
const js_test_src  = ['**/test/*.test.js', '!node_modules/**/*'];
const all_source = [js_source, html_source];

gulp.task('build:all', (done)=>{
  const productionConfig =  WebpackProductionConfig;
    webpack(productionConfig).run((err, stats) => {
      /* eslint-disable no-console */
      err && console.log('Error', err);
      stats && console.log(stats.toString({ colors: true }));
      done && done();
      /* eslint-enable no-console */
    });
})

gulp.task('server', gulp.series(function() {
  process.env.CLIENT_ONLY = true;
  new WebpackDevServer(webpack(WebpackDevServerConfig), {
    hot: true,
    publicPath: WebpackDevServerConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(WebpackDevServerConfig.port, 'localhost', (err) => {
    /* eslint-disable no-console */
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at localhost: ${WebpackDevServerConfig.port}`);
    /* eslint-enable no-console */
  });
}));

gulp.task('test', (done)=>{
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  },function() {
        done();
    }).start();
});

gulp.task('watch:test', (done)=>{
    new KarmaServer({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false,
      autoWatch:true
    },function() {
          done();
      }).start();
});

gulp.task('default', gulp.series('watch:test'));
