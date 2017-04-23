/**
 * Created by lenovo on 2017/3/1.
 */
'use strict'
$(function () {
    //当页面加载完成后才会执行
    function resize() {
        //获取屏幕宽度
        var printWidth = $(window).width();
        //判断屏幕属于大还是小
        var isSmallScreen = printWidth < 768;
        //根据大小为界判断是加载那张图片
        $('#main_ad>.carousel-inner>.item ').each(function (i, item) {
            var $item = $(item)//因为拿到的是一个DOM对象，需要转换
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg')
            $item.css('backgroundImage', 'url(' + imgSrc + ')')
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '">')
            } else {
                $item.empty();
            }
        })
    }

    $(window).on('resize', resize).trigger('resize')
    //初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip()


    /**
     * 控制标签页的标签容器宽度
     */
    var $ulContainer = $('.nav-tabs');
    // 获取所有子元素的宽度和
    var width = 30; // 因为原本ul上有padding-left
    // 遍历子元素
    $ulContainer.children().each(function (index, element) {
        // console.log(element.clientWidth);
        // console.log($(element).width());
        width += element.clientWidth;
    });
    // 此时width等于所有LI的宽度总和
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
    if (width > $(window).width()) {

        $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
    }

    //a点击注册事件
    var $newstitle = $('.news-title')
    $('#news .nav-pills a').on('click', function () {
        var $this = $(this);
        var title = $this.data('title')
        $newstitle.text(title)
    })

    //获取页面上的轮播图容器
    var $carousel=$('.carousel')
    var startX,endX,offset=50;
    //注册滑动事件
    $carousel.on('touchstart',function(e){
        startX=e.originalEvent.touches[0].clientX
        console.log(startX)
    })
    $carousel.on('touchend',function(e){
        endX=e.originalEvent.changedTouches[0].clientX
        console.log(endX)
        var distance=Math.abs(startX-endX)
        if(distance>offset){
            $(this).carousel(startX>endX?'next':'prev')
        }
    })

    //1.先获取手指在轮播图的元素上的一个滑动方向

    //2.根据获得到的方向选择上一张或者下一张
        //$(a).click
        //carousel
    //3.



})









