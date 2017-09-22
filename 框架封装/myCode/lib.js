/**
 * 判断数组还是伪数组,对象
 * @param array
 * @returns {boolean}
 */
function isArrayLike ( array ) {
    var length = array && array.length;
    return typeof length === 'number' && length >= 0;
}

/**
 * each方法的实现
 * @param array
 * @param callback
 * @returns {*}
 */
function each ( array, callback ) {
    var i, k;
    if ( isArrayLike( array ) ) {
        for ( i= 0; i < array.length; i++ ) {
            if( callback.call( array[ i ], i, array[ i ] ) === false ) break;
        }
    } else {
        for ( k in array ) {
            if( callback.call( array[ i ], k , array[ k ] ) === false ) break;
        }
    }
    return array;
}

function lkpower(selector) {
    var arr = {length: 0};
    var list = document.querySelectorAll(selector);
    [].push.apply(arr, list);
    arr.each = function (callback) {
        each(arr, callback);
    }
    return arr;
}
