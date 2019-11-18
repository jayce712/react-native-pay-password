const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const chalk = require('chalk');

const tsProject = ts.createProject('tsconfig.json');


function copy(cb) {
  gulp.src(['src/**/*.png'])
    .pipe(gulp.dest('lib'));
  cb();
};

function tsc(cb) {
  const tsResult = tsProject.src()
    .pipe(tsProject());

  merge([
    tsResult.dts.pipe(gulp.dest('lib')), // 生成.d.ts类型文件
    tsResult.js.pipe(gulp.dest('lib'))
  ]);
  cb();
};

function dev() {
  gulp.parallel(copy, tsc)();

  const watcher = [];
  watcher.push(gulp.watch(['src/**/*.ts', 'src/**/*.tsx'], tsc));
  watcher.push(gulp.watch(['src/**/*.png'], copy));

  watcher.forEach((ele) => {
    ele.on('change', (fileName, eventType) => {
      console.log(chalk.cyan(`${fileName} changed...`))
    });
  })
}

exports.dev = dev;

exports.default = gulp.parallel(copy, tsc);