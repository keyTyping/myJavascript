/*封装自己的LKpower 框架*/
(function (window) {
    var arr = [];
    var push = arr.push;
    var slice = arr.slice;

    function LKpower(selector) {
        return new LKpower.fn.inint(selector);
    }
    LKpower.fn = LKpower.prototype = {
        // lkpower: version,
        constructor:LKpower,
        length:0,
        inint: function (selector) {
            if (!selector) return this;

            if (typeof  selector == 'string') {
                if (selector.charAt(0) == '<' && selector.charAt(selector.length - 1) == '>') {
                    push.apply(this, LKpower.parseHTML(selector));
                    return this;
                }else {
                    push.apply(this, LKpower.select(selector));
                    return this;
                }
            }


        },
        each :function (callback) {
            return LKpower.each(this,callback);
        },
        map :function (callback) {
            return LKpower.map(this,callback);
        },
        toArray:function () {
           /* return this.map(function (v) {
                return v;

            });*/
           return slice.call(this);
        },
        get:function (index) {
            if (index===undefined) {
                return this.toArray();
            }else{
                if (index >= 0) {
                    return this[index];
                }else if (index < 0) {
                    return this[this.length + index];
                }
            }
            return this;
        }
    };
    LKpower.fn.inint.prototype = LKpower.fn;

    LKpower.isArrayLike =function ( array ) {
        var length = array && array.length;

        return typeof length === 'number' && length >= 0;

    }
    LKpower.each = function ( array, callback ) {
        var i, k;
        if ( LKpower.isArrayLike( array ) ) {
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
    LKpower.map=function ( array, callback ) {
        var i, k,
            res = [],
            tmp;
        if ( LKpower.isArrayLike( array ) ) {
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
    LKpower.select=function( selector ) {
        return document.querySelectorAll( selector );
    }

    LKpower.fn.extend=LKpower.extend = function(obj) {
        for(var k in obj){
            this[k] = obj[k];
        }
    }
    function parseHTML(str) {
        var div = document.createElement("div");
        var rest=[];
        div.innerHTML=str;
        for(var i=0;i<div.childNodes.length;i++){
            rest.push(div.childNodes[i]);
        }
        return rest;
    }
    LKpower.parseHTML = parseHTML;


    window.LKpower = window.LK = LKpower; //映射全局变量
})(window);
