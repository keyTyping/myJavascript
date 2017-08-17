function ajax(type,url,callback) {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open(type, url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState==4) {
            if (xhr.status==200) {
                 data=xhr.responseText;
                callback(data);
            }
        }
    }
}
