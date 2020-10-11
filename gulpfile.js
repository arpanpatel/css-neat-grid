'use strict';

const sass = require('gulp-sass');
const rename = require("gulp-rename");
const {src, dest, watch, series} = require('gulp');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

sass.compiler = require('node-sass');


const sassTask = function (done) {
	return src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./dist'))
		.pipe(postcss([
			cssnano()
		]))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(dest('./dist'));

};


const watchSource = function (done) {
	watch('./src/**/*.scss', exports.default);
	done();
};

exports.default = series(sassTask);


exports.watch = series(
	exports.default,
	watchSource
);
