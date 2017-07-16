window.onload = function () {
    //1,鼠标经过轮播图, 让箭头渐渐显示
    var wrap = $("wrap");
    var arrow = $("arrow");
    var slide = $("slide");
    var arrLeft = $("arrLeft");
    var arrRight = $("arrRight");
    var ul = slide.children[0];
    var lis = ul.children;
    wrap.onmouseover = function () {
        animate(arrow,{"opacity":1});
    }
    wrap.onmouseout = function () {
        animate(arrow,{"opacity":0});
    }
    //2,设置图片的位置
    var config = [          //一个定义位置的数组
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //获取页面上所有的li, 让他们从当前的位置,以动画的效果,到指定的位置
    function assign(){
        for(var i = 0; i<lis.length;i++) {
            animate(lis[i],config[i],function () {
                flag = true;
            });
        }
    }
    assign();
    //3,点击箭头, 图片旋转
    arrRight.onclick = function () {
        if ( flag ) {
            flag = false;
            config.push(config.shift());
            assign();
        }
    }
    arrLeft.onclick = function () {
        if ( flag ) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    }
    //添加节流阀
    var flag = true;

}