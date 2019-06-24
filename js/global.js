$('.f-weixin').click(function () {
    $('.code').show()
})
$('.code').click(function () {
    $(this).hide()
})
$('.close').click(function () {
    $('.logIn').removeClass('active')
    $('.logOn').removeClass('active')
})
/*!
 * GlobalMethod JavaScript Library v1.0.1
 *
 * Includes jquery.js
 *
 * Date: 2018-12-19T19:00Z
 */

// var GlobalMethod =
!function ($,fn) {
    (fn($))()
}(jQuery,function () {
     var version = "1.0.1",

        GMethod = function(){


        };

    GMethod.fn = GMethod.prototype = {

        constructor: GMethod,
        data:{
            topNum:80
        },
        init:function(){
            console.log(this);
            this.bindDom();
            this.addEvent();
            this.wScroll();
            this.imgW();
            this.getWidth()
        },

        bindDom:function () {
            this.$toTop = $('.toTop');
            this.$iNav = $(".i-nav");
            this.$divLink = $(".divLink");
            this.navBtn = $('.nav-btn');
            this.$img = $('img');
            this.$leftNav = $('.leftNav span')
        },

        addEvent:function () {
            const base = this
            // 手机导航按钮
            this.navBtn.on('click', function () {
                $('.nav-table-cell').toggleClass('close');
                $('.mynav-ul').toggleClass('showNav');

            });
            //回到顶部
            this.$toTop.click(function () {
                this.toTop(0);
            });

            //锚点索引
            this.$divLink.click( function() {

                var m = $(this).attr('data');
                var t = $(m).offset().top - base.topNum;
                base.toTop(t);
            });

            this.$leftNav.hover(function () {
                var m = $(this).attr('data');
                var t = $(m).offset().top - base.topNum;
                base.toTop(t);
            })
        },

        imgW: function () {
            this.$img.each(function () {
                var w = $(this).attr('width');
                var h = $(this).attr('height');
                if (w) {
                    $(this).css({'width': w + 'px', 'height': h + 'px', 'max-width': '100%'})
                }
            });
        },
        getWidth(){
            this.topNum = window.innerWidth > 1200?80:60;
        },
        wScroll :function () {
            $(window).scroll( ()=> {
                var scroll_height2 = document.body.scrollTop;
                var scroll_height = document.documentElement.scrollTop;
                if (scroll_height >= 80 || scroll_height2 >= 80) {
                    $('.pcNav').css({'background':'rgba(255,255,255,1)'});
                    $('.pcNav_top').css({'height':'0px', 'padding': '0'});
                    // $('.pcNav .g_w').css({'background':'rgba(34,34,34,.5)'})
                } else {
                    $('.pcNav').css({'background':'rgba(255,255,255,1)'});
                    $('.pcNav_top').css({'height':'30px','padding': '6px 0'});
                    // $('.pcNav .g_w').css({'background':'rgba(0,0,0,0)'})
                }
            });
        },
        toTop: function (t) {
            $("html, body").animate({scrollTop: t}, {duration: 500, easing: "swing"});
            return false;
        }

    };
    GMethod.prototype.init();
    return GMethod
});

