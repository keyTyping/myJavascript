function select ( selector ) {
    var arr = [];
    arr.push.apply( arr, document.querySelectorAll( selector ) );
    return arr;
}