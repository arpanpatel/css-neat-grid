'use strict';

const sass = require('gulp-sass');

const {src, dest, watch, series} = require('gulp');

sass.compiler = require('node-sass');


const sassTask = function (done) {
	return src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
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
