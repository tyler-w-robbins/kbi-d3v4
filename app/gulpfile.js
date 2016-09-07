var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  gutil = require('gulp-util'),
  coffee = require('gulp-coffee'),
  wiredep = require('gulp-wiredep'),
  inject = require('gulp-inject'),
  livereload = require('gulp-livereload');

gulp.task('compile', function() {
  gulp.src('./public/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('wiredep', function () {
  gulp.src('./views/header.ejs')
  .pipe(wiredep({
    fileTypes: {
      ejs: {
        block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
        detect: {
          js: /<script.*src=['"]([^'"]+)/gi,
          css: /<link.*href=['"]([^'"]+)/gi
        },
        replace: {
          js: '<script src="{{filePath}}"></script>',
          css: '<link rel="stylesheet" href="{{filePath}}" />'
        }
      }
    }
  })).pipe(gulp.dest('./views/'));
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js css ejs coffee',
    stdout: true
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'compile',
  'develop'
]);
