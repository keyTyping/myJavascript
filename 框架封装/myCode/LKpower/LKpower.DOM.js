(function (window) {
    var LKpower=window.LKpower,
        LK = LKpower,
        arr = [],
        push = arr.push;
    function parseHTML(str) {
        var div = document.createElement("div");
        var rest=[];
        div.innerHTML=str;
        for(var i=0;i<div.childNodes.length;i++){
            rest.push(div.childNodes[i]);
        }
        return rest;
    }
    LKpower.parseHTML = parseHTML;

})(window);



function parseHTML(str) {
    var div = document.createElement("div");
    var rest=[];
    div.innerHTML=str;
    for(var i=0;i<div.childNodes.length;i++){
        rest.push(div.childNodes[i]);
    }
    return rest;
}
LKpower.parseHTML = parseHTML;

