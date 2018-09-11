let gulp = require("gulp");
let minifyjs = require("gulp-babel-minify");
let minifycss = require("gulp-clean-css");
let connect = require("gulp-connect")
gulp.task("build",()=>{
    gulp.src("./iphone/**/*.js").pipe(minifyjs()).pipe(gulp.dest("./dist"));
    gulp.src("./iphone/**/*.html").pipe(gulp.dest("./dist"));
    gulp.src("./iphone/**/*.css").pipe(minifycss()).pipe(gulp.dest("./dist"));
    gulp.src("./iphone/**/*.jpg").pipe(gulp.dest("./dist"));
})
gulp.task("refreshhtml",function(){
    gulp.src("./iphone/**/*.html").pipe(gulp.dest("./dist")).pipe(connect.reload());
})
gulp.task("refreshjs",function(){
    gulp.src("./iphone/**/*.js").pipe(minifyjs()).pipe(gulp.dest("./dist"));
})
gulp.task("refreshcss",function(){
    gulp.src("./iphone/**/*.css").pipe(minifycss()).pipe(gulp.dest("./dist"));
})
gulp.task("server",()=>{
    connect.server({
        root: 'dist',
        port: 10086,
        livereload: true
    });
})
gulp.watch(['./iphone/**/*.html'],['refreshhtml']);
gulp.watch(['./iphone/**/*.js'],['refreshjs','refreshhtml']);
gulp.watch(['./iphone/**/*.css'],['refreshcss','refreshhtml']);
