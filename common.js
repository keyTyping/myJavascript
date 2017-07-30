/**
 * Created by lytton on 2017/6/30.
 */
/**
 * 获取任意对象的内部文本的 兼容函数
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if ( typeof element.innerText === "string" ) {
        return element.innerText;
    }
    else {
        return element.textContent;
    }
}
/**
 * 设置任意对象的内部文本的 兼容函数
 * @param element
 * @param content
 */
function setInnerText(element,content) {
    if ( typeof element.innerText === "string" ) {
        element.innerText = content;
    }
    else {
        element.textContent = content;
    }
}
/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if ( element.nextElementSibling ) {
        return element.nextElementSibling;
    }
    else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if ( element.previousElementSibling ) {
        return element.previousElementSibling;
    }
    else {
        var prev = element.previousSibling;
        while (prev && prev.nodeType !== 1) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}
/**
 * 获取第一个子元素的 兼容函数
 * @param element
 * @returns {Element}
 */
function getFirstElementChild(element) {
    if ( element.firstElementChild ) {
        return element.firstElementChild;
    }
    else {
        var node = element.firstChild;
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
    }
}
/***
 * 获取最后一个子元素的 兼容函数
 * @param element
 * @returns {Element}
 */
function getLastElementChild(element) {
    if ( element.lastElementChild ) {
        return element.lastElementChild;
    }
    else {
        var node = element.lastChild;
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
    }
}
/**
 * 根据ID获取元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 *
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element,className) {
    if ( element.getElementsByClassName ) {
        return element.getElementsByClassName(className);
    }
    else {
        //先寻找element 里面的所有标签,然后判断类名是否符合要求如果符合要求,就放到一个数组中,最后返回这个数组
        var filterArr = [];
        var elements = element.getElementsByTagName("*");//通配符 表示所有标签
        //遍历数组,把每一个标签都取出来, 判断是否符合
        for ( var i = 0; i < elements.length; i++ ) {
            var nameArr = elements[i].className.split(" ");
            for ( var j = 0; j < nameArr.length; j++ ) {
                if ( nameArr[j] === className ) {
                    filterArr.push(elements[i]);
                    break;
                }
            }
        }
    }
    return filterArr;
}
/**
 *   类名替换函数
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element,oldStr,newStr) {
    var nameArr = element.className.split(" ");  //把类名切割成一个一个的类名
    for ( var i = 0; i < nameArr.length; i++ ) {
        if ( nameArr[i] === oldStr ) {
            nameArr[i] = newStr;
        }
    }
    element.className = nameArr.join(" ");
}
/**
 * 封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理1
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") { //特殊处理2
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 15);
}
/**
 * 封装获取页面被卷去的头部高度和左侧宽度的 兼容函数
 * @returns {obj}
 */
function scroll() {
    return {top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0};
}
/**
 *封装 获取计算后样式属性的兼容函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr) {
    if ( window.getComputedStyle ) {
        return window.getComputedStyle(obj,null)[attr];
    }
    else {
        return obj.currentStyle[attr];
    }
}
/**
 * 能过获取网页可视区的宽度和高度 的封装函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
/**
 *封装添加事件的兼容函数
 *element--要绑定的对象,eventName--事件字符串,不加on的,listene--事件处理函数r
 * @param element
 * @param eventName
 * @param listener
 */
function addEvent(element,eventName,listener){
    if ( element.addEventListener ) {
        element.addEventListener(eventName,listener,false);
    }
    else if(element.attachEvent) {
        element.attachEvent("on" + eventName,listener);
    }
    else {
        element["on" + eventName] = listener;
    }
}
/**
 * 移除事件的兼容函数
 * @param element
 * @param eventName
 * @param listener
 */
function removeEvent(element,eventName,listener){
    if ( element.removeEventListener ) {
        element.removeEventListener(eventName,listener,false);
    }
    else if ( element.detachEvent ) {
        element.detachEvent("on" + eventName,listener);
    }
    else {
        element["on" + eventName] = null;
    }
}
/**
 * /事件对象兼容处理的综合大封装
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, stopPropagation: Function, getTarget: Function}}
 */
var eventUtils = {
    getEvent:function (event) {
        return event || window.event;
    },
    getPageX:function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    getPageY:function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    stopPropagation:function (event) {
        if ( event.stopPropagation ) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    },
    getTarget:function (event) {
        return event.target || event.srcElement;
    }
}
