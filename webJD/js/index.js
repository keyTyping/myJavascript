// 等待页面加载完成
window.onload = function () {
    search();  //调用搜索框变色函数
    banner(); //调用轮播图函数
};
/**
 *  头部搜索功能实现
 *  1,滚动屏幕的时候,搜索框的背景颜色需要变换
 *  2,滚动到一定距离的时候颜色才变换
 *  颜色变化的程度,和 滚动的距离大小有关
 */
function search() {
    // 获取搜索盒子
    var searchBox= document.querySelector('.jd_header_box');
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
        else{
            opacity = 0.85*(top/height);
        }
        // console.log(opacity);
        searchBox.style.backgroundColor="rgba(201,21,35,"+opacity+")";
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
    var width= banner.offsetWidth;
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
    var removeTransition= function () {
        imagesBox.style.webkitTransition = "none";
        imagesBox.style.transition = "none";
    }
    /**
     * 设置定位
     * @param x
     */
    var setTranslate = function (x) {
        imagesBox.style.webkitTransform = "translateX("+x+"px)";
        imagesBox.style.transform = "translateX("+x+"px)";

    }

    //自动轮播
    var index = 1; //当前索引,十个图中的第二个图片
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslate(-index*width);
    },3000);
    /**
     * 无缝对接
     * 如果索引是9,要瞬间定位到第一张图片
     * 如果所以是0,需要瞬间定位到第8张图片
     */
    common.transitionEnd(imagesBox,function () {
        if (index >= 9) {
            index=1;
        } else if (index<=0){
            index=8;
        }
        removeTransition();
        setTranslate(-index*width);

    })

}
