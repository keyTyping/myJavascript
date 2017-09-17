(function ( window ) {

var arr = [],
    push = arr.push;

function Itcast( selector ) {
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    init: function ( selector ) {
        var list = select( selector );
        push.apply( this, list ); 
        return this;
    },
    each: function ( callback ) {
        return each( this, callback );
    },
    map: function ( callback ) {
        return map( this, callback );
    }
};

Itcast.fn.init.prototype = Itcast.fn;



function isArrayLike ( array ) {  
    var length = array && array.length;

    return typeof length === 'number' && length >= 0;

}
function each ( array, callback ) {
    var i, k;
    if ( isArrayLike( array ) ) {
        // 使用 for 循环
        for ( i= 0; i < array.length; i++ ) {
            if( callback.call( array[ i ], i, array[ i ] ) === false ) break;
        }
    } else {
        // 使用 for-in 循环
        for ( k in array ) {
            if( callback.call( array[ i ], k , array[ k ] ) === false ) break;
        }
    }
    return array; 
}
function map ( array, callback ) {
    var i, k,
        res = [],
        tmp;
    if ( isArrayLike( array ) ) {
        // 使用 for 循环
        for ( i= 0; i < array.length; i++ ) {
            tmp = callback( array[ i ], i );
            if ( tmp !== undefined ) {
                res.push( tmp );
            }
        }
    } else {
        // 使用 for-in 循环
        for ( k in array ) {
            tmp = callback( array[ k ], k );
            if ( tmp !== undefined ) {
                res.push( tmp );
            }
        }
    }
    return res; 
}
function select( selector ) {
    return document.querySelectorAll( selector );
}










window.Itcast = window.I = Itcast; // 在 全局范围内 引入两个变量

})( window );