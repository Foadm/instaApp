var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require("gulp-protractor").protractor;

gulp.task('connect', function() {
    connect.server({ root: 'app/' });
});

gulp.task('protractor', ['connect'], function(){
    gulp.src(["specs/ETEspecs.js"])
        .pipe(protractor({ configFile: "conf.js" }))
        .on('error', function(e) { throw e })
        .on('end', function() { connect.serverClose(); })
});

gulp.task('default', ['protractor']);
