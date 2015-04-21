var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require("gulp-protractor").protractor;

gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will live inside of app/
        port: 8080
    });
});

gulp.task('protractor', function(){

    gulp.src(["spec/**/*_spec.js"])
        .pipe(protractor({
            configFile: "spec/protractor_config.js"
            //args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) { throw e })
});