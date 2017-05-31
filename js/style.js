$(function(){
    /** 清除边框 **/
    $('.bn').css('border','none');
    /** 用户切换性别 **/
    var userInfo = $('.usersex>span');
    userInfo.on('click',function(){
        $(this).find('.man').addClass('userS');
        $(this).siblings().find('.man').removeClass('userS');
    });
    /** 消费记录 **/
    var xfRrecordate = $('.xf_record_date');
    xfRrecordate.each(function(){
        var xfRecordxj = $(this).find('.xf_record_xj:last-child');
        xfRecordxj.find('.xf_record_s').hide();
        xfRecordxj.find('.xf_record_xjbd').addClass('ml');
    });
    /** 理疗效果大图 **/
    var lleffUl = $('.llEffect_txt').find('ul');
    var ckdtUl = $('.ckdt').find('ul');
    var effraio = $('.effraio');
    var effImg = '';
    var mySwiper = '';

    lleffUl.each(function(){
        $(this).find('img').on('click',function(){

            $('.effBig').show();
            $('.llEffect').hide();

            effBig($(this).parents('ul'));
            function effBig(obj) {
                effImg = obj.find('img');
                effImg.each(function () {
                    var effImgSrc = effImg.attr('src');
                    ckdtUl.append('<li class="swiper-slide"><img src=' + effImgSrc + '></li>');
                });
            }

            //li的长度不为0时，每次切换窗口自动刷新
            var ckdtLi = ckdtUl.find('li');
            if (ckdtLi.length !== 0) {
                window.addEventListener('resize', function () {
                    location.reload();
                })
            }

            //自动设置宽高
            var ckdtLiW = ckdtLi.eq(0).outerWidth(true);
            ckdtUl.css('width', ckdtLiW * ckdtLi.length + 'px');

            var effWw = window.screen.height;
            var effWw1 = $('.header').height() + $('.ckdt').outerHeight(true);
            if(effWw1 < effWw){
                $('.effBig').css('height',effWw);
            }else{
                $('.effBig').css('height',effWw1);
            }
            //加载swiper
            mySwiper = new Swiper('.swiper-container',{
            pagination : '.swiper-pagination',
            paginationClickable : true
            });
        })
    });

    //关闭大图
    $('.gbdt').on('click',function(){
        location.reload();
    });
    /*
    function add(x) {
        var sum = x;
        var tmp = function (y) {
            sum = sum + y;
            return tmp;
        };
        tmp.toString = function () {
            return sum;
        };
        return tmp;
    }
    console.log(add(1)(2)(3));  //6
    console.log(add(1)(2)(3)(4));   //10

    var mysum = function(num1,num2){
        if(num2 !== undefined){
            console.log(num1 + num2);
        }else{
            return function(num2){
                console.log(num1 + num2);
            };
        }
    };
    mysum(1,2);
    mysum(1)(2);*/
});

