const gulp = require("gulp");
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// Error handling utility
function handleError(err) {
  console.error(err.message);
  this.emit("end");
}

// Development Task: Compile LESS with source maps
gulp.task("less-dev", function () {
  return gulp
    .src("src/styles/**/*.less") // Watch all LESS files including subfolders
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(less().on("error", handleError)) // Compile LESS and handle errors
    .pipe(sourcemaps.write(".")) // Write sourcemaps to the same directory as CSS
    .pipe(gulp.dest("src/styles/compiledCSS/")); // Output directory
});

// Production Task: Compile and minify LESS
gulp.task("less-prod", function () {
  return gulp
    .src("src/styles/**/*.less") // Watch all LESS files
    .pipe(less().on("error", handleError)) // Compile LESS and handle errors
    .pipe(cleanCSS({ compatibility: "ie8" })) // Minify CSS for production
    .pipe(gulp.dest("src/styles/compiledCSS/")); // Output directory
});

// Watch Task: Recompile on changes
gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.less", gulp.series("less-dev")); // Watch all LESS files
});

// Default Task: Development mode
gulp.task("default", gulp.series("less-dev", "watch"));

// Build Task: Production mode
gulp.task("build", gulp.series("less-prod"));
