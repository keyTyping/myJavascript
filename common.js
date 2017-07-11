/**
 * Created by lytton on 2017/6/30.
 */

/**
 * 获取任意对象的内部文本的 兼容函数
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
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
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
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
    if (element.nextElementSibling) {
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
    if (element.previousElementSibling) {
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
    if (element.firstElementChild) {
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
    if (element.lastElementChild) {
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
function getElementsByClassName(element,className){
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    }
    else {
        //先寻找element 里面的所有标签,然后判断类名是否符合要求如果符合要求,就放到一个数组中,最后返回这个数组
        var filterArr = [];
        var elements = element.getElementsByTagName("*");//通配符 表示所有标签
        //遍历数组,把每一个标签都取出来, 判断是否符合
        for(var i= 0 ;i< elements.length;i ++) {
            var nameArr = elements[i].className.split(" ");
            for(var j=0; j<nameArr.length;j++) {
                if (nameArr[j] === className) {
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
function replaceClassName(element,oldStr,newStr){
    var nameArr = element.className.split(" ");  //把类名切割成一个一个的类名
    for(var i = 0; i< nameArr.length;i++) {
        if (nameArr[i] === oldStr) {
            nameArr[i] = newStr;
        }
    }
    element.className = nameArr.join(" ");
}

/**
 * 让任意对象移动到指定位置
 * @param obj
 * @param target
 */
function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10 ;
        step = leader<target?step:-step;
        if (Math.abs(leader-target)>= Math.abs(step)) {
            leader = leader + step ;
            obj.style.left = leader + "px";
        }
        else{
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    },15);
}
