/**
 * Created by lytton on 2017/6/30.
 */

/**
 * 获取任意对象的内部文本的 兼容函数
 * @param element
 * @returns {*}
 */
function getInnerText (element){
    if(typeof element.innerText === "string"){
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
function setInnerText(element,content){
    if(typeof element.innerText === "string"){
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
function getNextElement (element) {
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
function getPreviousElement (element) {
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

