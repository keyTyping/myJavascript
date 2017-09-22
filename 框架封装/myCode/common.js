/**
 *
 * @param sel
 * @returns {Array}
 */
function selector(sel) {
    var array = [];
    array.push.apply(array, document.querySelectorAll(sel));
    return array;
}
