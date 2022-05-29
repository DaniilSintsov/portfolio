import fileInclude from "gulp-file-include";

export const php = () => {
  return app.gulp
    .src(app.path.src.php)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "PHP",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.gulp.dest(app.path.build.php))
    .pipe(app.plugins.browsersync.stream());
};
