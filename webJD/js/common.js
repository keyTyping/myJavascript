/*公用JS文件*/
window.common = {};
/**
 * 封装过渡结束事件
 * @param element
 * @param callback
 */
common.transitionEnd = function (element, callback) {
    if (element && typeof element == 'object') {
        element.addEventListener('webkitTransitionEnd', function () {
            callback&&callback();
        });
        element.addEventListener('transitionEnd', function () {
            callback&&callback();
        });
    }
}
