// 等待页面加载完成
window.onload = function () {
    search();  //调用搜索框变色函数
    banner(); //调用轮播图函数
    downTime();
};

/**
 *  头部搜索功能实现
 *  1,滚动屏幕的时候,搜索框的背景颜色需要变换
 *  2,滚动到一定距离的时候颜色才变换
 *  颜色变化的程度,和 滚动的距离大小有关
 */
function search() {
    // 获取搜索盒子
    var searchBox = document.querySelector('.jd_header_box');
    // 获取轮播图盒子
    var bannerBox = document.querySelector('.jd_banner');
    // 获取高度
    var height = bannerBox.offsetHeight;
    // 监听滚动事件
    window.onscroll = function () {
        var top = document.body.scrollTop;
        // console.log(scrolltop);
        var opacity = 0;
        if (top > height) {
            opacity = 0.85;
        }
        else {
            opacity = 0.85 * (top / height);
        }
        // console.log(opacity);
        searchBox.style.backgroundColor = "rgba(201,21,35," + opacity + ")";
    }
}

/**
 * 实现轮播图
 * 1,无动作时自动滚动轮播图
 * 2,圆点随图片相应改变
 * 3,图片盒子能滑动,无缝衔接
 * 4,滑动时不超过一定距离,能吸附回去, 超过距离能吸附到前面（）
 */
function banner() {
    // 获取对象DOM
    var banner = document.querySelector(".jd_banner");
    var width = banner.offsetWidth;
    var imagesBox = banner.querySelector('ul:first-child') //图片盒子
    var pointBox = banner.querySelector('ul:last-child');  //点盒子
    var points = pointBox.querySelectorAll('li'); //获取所有的点
    /*公用方法*/
    /**
     * 添加过度
     */
    var addTransition = function () {
        imagesBox.style.webkitTransition = "all 0.2s";
        imagesBox.style.transition = "all 0.2s";
    }
    /**
     * 删除过度
     */
    var removeTransition = function () {
        imagesBox.style.webkitTransition = "none";
        imagesBox.style.transition = "none";
    }
    /**
     * 设置定位
     * @param x
     */
    var setTranslate = function (x) {
        imagesBox.style.webkitTransform = "translateX(" + x + "px)";
        imagesBox.style.transform = "translateX(" + x + "px)";

    }

    //自动轮播
    var index = 1; //当前索引,十个图中的第二个图片
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslate(-index * width);
    }, 3000);
    /**
     * 无缝对接
     * 如果索引是9,要瞬间定位到第一张图片
     * 如果所以是0,需要瞬间定位到第8张图片
     */
    common.transitionEnd(imagesBox, function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        removeTransition();
        setTranslate(-index * width);
        setPoint(index);
        /* // 圆点跟随的实现
         // 1,清除所有圆点
         for(var i=0;i<points.length;i++){
             points[i].className = "";
         }
         // 2,给当前索引对应的位置加圆点
         points[index-1].className="now";*/
    });
    // 第四步,点随着轮播图改变
    var setPoint = function (j) {
        // 去除当前样式
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        points[j - 1].className = "now";
    }
    // 第五步
    // 3,图片盒子滑动
    var startX = 0; //开始的时候X的坐标
    var moveX = 0; //移动时候X的坐标
    var distanceX = 0; //移动距离
    var isMove = false; //是否滑动
    imagesBox.addEventListener('touchstart', function (e) {
        /*清除定时器*/
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });
    imagesBox.addEventListener('touchmove', function () {
        isMove = true;
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        console.log(distanceX);
        /*在滑动的时候不断的给图片盒子做定位  来达到滑动的效果*/
        /*定位的位置  当前的图片的定位  加上 移动的距离*/
        /*清除过度*/
        removeTransition();
        /*设置当前的定位*/
        setTranslateX(-index*width+distanceX);
    });
    //谷歌浏览器模拟手机, touchend事件可能会丢失,解决办法是用window调用
    imagesBox.addEventListener('touchend', function () {
        /*第六步*/
        /*
         * 4.当滑动的时候不超过一定的距离的时候  吸附回去
         * 5.当滑动的距离超过了一定的距离的时候  图片做相应的滚动  左或右
         * 一定的距离  就是1/3的图片的宽度
        * */
        if(Math.abs(distanceX) > (width/3) && isMove){
            /*怎么判断上一张还是下一张
            * 是通过distanceX的值来判断
            * */
            if(distanceX>0){
                index --;
            }else{
                index ++;
            }
            /*动画的定位回去 当前的index*/
            addTransition();
            setTranslateX(-index*width);
        }else{
            /*动画的定位回去 其实就是吸附回去*/
            addTransition();
            setTranslateX(-index*width);
        }

        /*重置参数  防止第二次的时候影响计算*/
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;

        /*加上定时器*/
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;
            /*让图片动画的滚动  translateX  transition 来实现动画*/
            /*给imageBox加上过度*/
            addTransition();
            /*给imageBox设置当前的位置 */
            setTranslateX(-index*width);
        },3000);
    });

    /*倒计时*/
    function downTime() {
        /*
        * 1.得到需要倒计时的时间  这是固定定死的  5 小时 04 59 59
        * 2.每隔一秒来  计算  当前的  时间  格式
        * 3.渲染在页面当中
        * */

        /*倒计时的时间*/
        var time = 3 * 60 * 60;

        /*获取dom元素*/
        var skTime = document.querySelector('.sk_time');
        /*所有的span*/
        var spans = skTime.querySelectorAll('span');

        /*定时器*/
        var timer = setInterval(function () {
            time--;
            if (time < 0) {
                clearInterval(timer);
                return false;
            }
            /*格式化时间  得到  时  分  秒*/
            var h = Math.floor(time / 3600);
            var m = Math.floor((time % 3600) / 60);
            var s = time % 60;
            /*渲染*/
            spans[0].innerHTML = Math.floor(h / 10);
            spans[1].innerHTML = h % 10;

            spans[3].innerHTML = Math.floor(m / 10);
            spans[4].innerHTML = m % 10;

            spans[6].innerHTML = Math.floor(s / 10);
            spans[7].innerHTML = s % 10;
        }, 1000);
    }
}
