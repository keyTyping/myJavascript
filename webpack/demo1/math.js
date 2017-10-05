
function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
// module.exports.add = add;  //模块导出的是 module.exports 对象

module.exports = {
    add:add,
    sub:sub
}