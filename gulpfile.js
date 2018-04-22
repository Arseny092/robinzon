"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 2 versions"
            ]
            }),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(minify())
        .pipe(gulp.dest("./public/css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "./public",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
});