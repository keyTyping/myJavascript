
// 获得包
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var press = require( 'gulp-uglify' );

gulp.task( 'concat', function () {
    gulp.src( [ './js/Itcast.core.js',
                './js/Itcast.ctor.js',
                './js/Itcast.dom.js',
                './js/Itcast.event.js',
                './js/Itcast.style.js',
                './js/Itcast.attr.js' ] )
        .pipe( concat( 'Itcast.js' ) )
        .pipe( gulp.dest( './dist' ) );
} );

gulp.task( 'concatPress', function () {
    return gulp.src( [ './js/Itcast.core.js',
                './js/Itcast.ctor.js',
                './js/Itcast.dom.js',
                './js/Itcast.event.js',
                './js/Itcast.style.js',
                './js/Itcast.attr.js' ] )
        .pipe( concat( 'Itcast.min.js' ) )
        .pipe( gulp.dest( './dist' ) );
} );

gulp.task( 'default', [ 'concat', 'concatPress' ], function () {

    gulp.src( './dist/Itcast.min.js' )
        .pipe( press() )
        .pipe( gulp.dest( './dist' ) );
} );


