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
function getElementByClassName(element,className){
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    }
    else {
        var filterArr = [];
        var elements = element.getElementsByTagName("*"); //通配符
        for(var i=0;i<elements.length;i++){
            if (elements[i].className.indexOf(className) !== -1) {   //会有问题
                filterArr.push(elements[i]);
            }
        }
        return filterArr;
    }
}

