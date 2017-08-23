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

/**
 * 封装tap
 * @param dom
 * @param callback
 */
common.tap = function(dom,callback){
    /*
     * 要求  没有触发 touchmove 事件
     *       并且响应速度要比click快
    */
    if(dom && typeof  dom == 'object'){
        var isMove = false;
        var startTime = 0;
        dom.addEventListener('touchstart',function(e){
            //console.log('touchstart');
            //console.time('tap');/*记录tap这个参数现在的时间*/
            startTime = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            //console.log('touchmove');
            isMove = true;
        });
        dom.addEventListener('touchend',function(e){
            //console.log('touchend');
            //console.timeEnd('tap')/*打印tap这个参数距离上一次记录的时候的时间*/
            /*判读  是否满足tap 的要求  一般要求tap的响应时间150*/
            if(!isMove && (Date.now()-startTime) < 150){
                /*调用 callback*/
                callback && callback(e);
            }
            /*重置 参数*/
            isMove = false;
            startTime = 0;
        });
    }
}
