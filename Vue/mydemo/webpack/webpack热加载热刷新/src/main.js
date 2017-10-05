//获取元素对象
var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var btn = document.getElementById('btn');
var res = document.getElementById('res');

require('../static/css/site.css');
require('../static/css/site1.scss');

btn.onclick = function () {
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    var add = require('./calc.js');
    res.value = add(v1value,v2value);
}
