(function (window) {
    var LKpower=window.LKpower,
        LK = LKpower,
        arr = [],
        push = arr.push;

    LKpower.fn.type = 'LKpower'; //添加一个属性,当做判断依据

    var inint = LKpower.fn.inint=function (selector) {
        if (!selector) return this; //处理null,undefined...等
        //处理字符串:选择器和html字符串
        if (typeof  selector == 'string') {
            if (selector.charAt(0) == '<' && selector.charAt(selector.length - 1) == '>') {
                push.apply(this, LKpower.parseHTML(selector));
                return this;
            }else {
                //选择器
                push.apply(this, LKpower.select(selector));
                return this;
            }
        }
        //处理DOM元素 nodeType
        if (selector.nodeType) {
            push.call(this,selector);
            return this;
        }
        //处理LKpower元素
        if (selector.type === 'LKpower') {
            push.apply(this,selector);
            return this;
        }

        //处理函数
        if (typeof selector == 'function') {

        }
    };

    inint.prototype = LKpower.fn;
})(window);

