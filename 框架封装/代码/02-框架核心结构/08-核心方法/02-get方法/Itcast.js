(function ( window ) {

var arr = [],
    push = arr.push,
    slice = arr.slice;

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
    },
    toArray: function () {

        // 需要返回一个数组
        // this 就是一个伪数组

        /*
        var array = [];
        this.each(function () {
            // 此时 this 是遍历的 伪数组( 外面的 this ) 中的每一项
            array.push( this ); 
        }); 
        return array;
        */

        // 使用 map 方法
        /*
        return this.map(function ( v ) {
            // v 就是当前伪数组中的每一个元素
            return v;
        });
        */

        return slice.call( this );
    }, 
    get: function ( index ) {
        // arguments.length == 0 
        if ( index === undefined ) {
            // 没有传参
            return this.toArray();
        } else {
            // 传入了参数
            if ( index >= 0 ) {
                return this[ index ];
            } else if ( index < 0 ) {
                return this[ this.length + index ];
            }
        }

        return this; // 如果传入的既不是正数, 也不是负数, 也不是没有传参
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