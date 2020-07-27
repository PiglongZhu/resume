
/*
var guest_name = prompt('请告诉我你的名字：');     // 输入
alert('你好,'+ guest_name + '\n欢迎访问猪肠的个人网页');  // 输出
console.log('在控制台输出名字',guest_name);      //输出

*/

/* 定义鼠标悬浮函数 
var topbox = document.querySelector('.top-image-box');
var passion = document.querySelector('.passion');
var ambition = document.querySelector('.ambition');
var efficiency = document.querySelector('.efficiency');
console.log(topbox);
topbox.onmouseover = function(){
    passion.style.display = 'initial';
    ambition.style.display = 'initial';
    efficiency.style.display = 'initial';
}
topbox.onmouseleave = function(){
    passion.style.display = 'none';
    ambition.style.display = 'none';
    efficiency.style.display = 'none';
};
------------------------------------------------------------------*/ 


/* 淡入淡出效果 */
$('.img-box').mouseenter(function () {
    $('.passion').stop().fadeIn(1000);
    $('.ambition').stop().delay(100).fadeIn(1000);
    $('.efficiency').stop().delay(200).fadeIn(1000);
    $('.conscientious').stop().delay(300).fadeIn(1000);
    }
);
$('.img-box').mouseleave(function () { 
    $('.passion').stop().fadeOut(200);
    $('.ambition').stop().fadeOut(200);
    $('.efficiency').stop().fadeOut(200);
    $('.conscientious').stop().fadeOut(200);
});


$('.top-box').hover(function () {
        $('.favorite-note').stop().fadeIn(500);
    }, function () {
        $('.favorite-note').stop().fadeOut(10);
    }
);

$('.base-information-content').css('font-family','Microsoft YaHei');


/* 距离浏览器顶端的距离 = 距离文档顶端的偏移值 - 网页被卷起来的高度 */
$(window).scroll(function () { 
    var top = $(window).scrollTop();    /**网页被卷起来的高度 */
    var top2 = $('.name').offset().top;     /** 距离文档顶端的偏移值 */      
    if( top2-top < 20){
        $('.side-image').stop().fadeIn(200);
    }else{
        $('.side-image').stop().fadeOut(200);
    }
});

$(window).scroll(function () { 
    var windowheight = $(window).height();   /** 浏览器可视范围高度 */ 
    var top = $(window).scrollTop();    /**网页被卷起来的高度 */
    var top2 = $('.myself2').offset().top;     /** 距离文档顶端的偏移值 */  
    if( windowheight-(top2-top) > 250 ){
        $('.hobby').stop().fadeIn(500);
    } else{
        $('.hobby').stop().fadeOut(100);
    }
});


/** 点击头像则返回顶部***************************************************** */

$('.side-image').click(function () { 
    $("body,html").stop().animate(
        {
          scrollTop: 0
        },
        500
      );
});

/** 设置定时器，使头像旋转 */
var time = 0;
$('body').everyTime('0.05s','A',function(){
    time++;
    widthchange = Math.abs(Math.sin(time/10));
    $('.side-image-box').css('width',widthchange*100 + '%' );
});

/** 点击图片弹出介绍 */

$('.FJUT2').click(function () { 
    $('.FJUT2describe').stop().slideToggle(300);
});
$('.FJUT3').click(function () { 
    $('.FJUT3describe').stop().slideToggle(300);
});
$('.zhiyuan1').click(function () { 
    $('.zhijiao1-describe').stop().slideToggle(300);
});
$('.zhiyuan3').click(function () { 
    $('.zhijiao2-describe').stop().slideToggle(300);
});
$('.audiR8').click(function () { 
    $('.audiR8-describe').stop().slideToggle(300);
});
$('.halicarrier').click(function () { 
    $('.halicarrier-describe').stop().slideToggle(300);
});
$('.python1').click(function () { 
    $('.python1-describe').stop().slideToggle(300);
});
$('.python2').click(function () { 
    $('.python2-describe').stop().slideToggle(300);
});
$('.python3').click(function () { 
    $('.python3-describe').stop().slideToggle(300);
});
$('.python4').click(function () { 
    $('.python4-describe').stop().slideToggle(300);
});
$('.tf1').click(function () { 
    $('.tf1-describe').stop().slideToggle(300);
});
$('.tf2').click(function () { 
    $('.tf2-describe').stop().slideToggle(300);
});
$('.qianduan').click(function () { 
    $('.qianduan-describe').stop().slideToggle(300);
});
$('.qianduan2').click(function () { 
    $('.qianduan2-describe').stop().slideToggle(300);
});


/** 鼠标经过图片会生成阴影 */

$('.shadow').hover(function () {
        $(this).addClass('imgshadow');
        var width = $(this).css('width');
        var height = $(this).css('height');
        width_1 = 1.01*width.substring(0,3); 
        height_1 = 1.01*height.substring(0,3);
        $(this).css('width', width_1 + 'px');
        $(this).css('height', height_1 + 'px');
        console.log(width);
    }, function () {
        $(this).removeClass('imgshadow');
        var width = $(this).css('width');
        var height = $(this).css('height');
        width_1 = width.substring(0,3)/1.01; 
        height_1 = height.substring(0,3)/1.01;
        $(this).css('width', width_1 + 'px');
        $(this).css('height', height_1 + 'px');
    }
);

/*********输入密码才能访问 */
$('.password>button').click(function (e) { 
    e.preventDefault();
    psw = $('#pwd').val();
    if(psw == '990426'){
        $('.password').fadeOut(500);
        $('.top-box,.down-all').fadeIn(200);
    }else{
        $('.wrong').show();
    }
});