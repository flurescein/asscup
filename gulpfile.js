const gulp    = require('gulp'),
      webpack = require('gulp-webpack'),
      pug     = require('gulp-pug'),
      stylus  = require('gulp-stylus'),
      connect = require('gulp-connect')

gulp.task('webpack', () =>
    gulp.src('js/main.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('docs/js'))
        .pipe(connect.reload())
)

gulp.task('pug', () => 
    gulp.src('pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest(''))
        .pipe(connect.reload())
)

gulp.task('stylus', () => 
    gulp.src('stylus/*.styl')
        .pipe(stylus({ compress: true }))
        .pipe(gulp.dest('docs/css'))
        .pipe(connect.reload())
)

gulp.task('connect', () => 
    connect.server({
        port: 8080,
        livereload: true,
        root: './'
    })
)

gulp.task('watch', () => {
    gulp.watch('js/*.js', ['webpack'])
    gulp.watch('pug/index.pug', ['pug'])
    gulp.watch('stylus/*.styl', ['stylus'])
})

gulp.task('default', ['webpack', 'pug', 'stylus', 'connect', 'watch'])
