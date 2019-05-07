/*“use strict” mode on*/

"use strict";

$(window).on('load', function () {
    
    
    var windowWidth = $(window).width();
    
    
    $(window).on('resize', function () {
        
    });
    
    
});

(function ($) {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // при display:none размеры нельзя узнать
    // нужно, чтобы элемент был видим,
    // visibility:hidden - можно, т.к. сохраняет геометрию
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var sw = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    $('#form1, #form2, #form3').ajaxForm(function() {
        $('.cover3').fadeIn(400)
        function reset() {
            form1.reset();
            form2.reset();
            form3.reset();
            return;
        }
        setTimeout(reset,100)
    });
    $('#form4, #form5').ajaxForm(function() {
        function reset() {
            form4.reset();
            form5.reset();
            return;
        }        
        setTimeout(reset,100)
        $('.cover, .cover2').fadeOut(0);
        $('.cover3').fadeIn(400)
    });
    $('.haveq-desc2').hide(0);
    $('.btn-more').click(function(){
        $('.haveq-desc2').slideToggle()

        if ($(this).hasClass('hide-btn')) {
            $(this).text('Подробнее')
            $(this).removeClass('hide-btn')
        } else {
            $(this).text('Свернуть')
            $(this).addClass('hide-btn')
        }
    });
    $('.btn1').click(function(){
        $('.cover').fadeIn(400);

        var ww = $(window).width();
        $('html').css({
            'padding-right':sw+'px',
            'overflow-y':'hidden'
        })
    })
    $('.btn2, .call-btn').click(function(){
        $('.cover-bg').fadeIn(400);
        $('.cover2').fadeIn(400);

        var ww = $(window).width();
        $('html').css({
            'padding-right':sw+'px',
            'overflow-y':'hidden'
        })
    })
    $('.popup-close2, .cover-bg').click(function(){        
        $('.cover, .cover2, .cover3').fadeOut(400);
        $('html').css({
            'padding-right':'0px',
            'overflow-y':'scroll'
        })
    })
    $('.left-menu ul li a').click(function(){
        $('.left-menu-close').trigger('click');
    })
    
    $('#show-stars').on('click', function () { 
        $('#clients-companies').fadeOut( 200, function() {
            $('#clients-stars').fadeIn(200);
        });
        $(this).addClass('active');
        $('#show-companies').removeClass('active');
    });
    
    $('#show-companies').on('click', function () { 
        $('#clients-stars').fadeOut( 200, function() {
            $('#clients-companies').fadeIn(200);
        });
        $(this).addClass('active');
        $('#show-stars').removeClass('active');
    });
    
    $('#show-menu').on('click', function () { 
        $('#left-menu').css('left', '0');
    });
    
    $('#left-menu-close').on('click', function () { 
        $('#left-menu').css('left', '-200px');
    });
    
    //accordeon
    $(".accordeon dd").hide().prev().click(function() {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
    
    /*=== fancybox init ====*/      
    
    $(".fancybox").fancybox({
        tpl:  {
            //closeBtn : '<a title="Close" class="fancybox-close-btn" href="javascript:;"><i class="fa fa-close"></i></a>',
        }
    });

    
    $.validate();
    
    $(".phone").mask("+7 (999) 999 99 99");
    
    /*=== Owl carousels ====*/      
    var owl1 = $("#owl-gallery");
        owl1.owlCarousel({
        items: 1, //1 items above 1000px browser width
        itemsDesktop: [1000, 1], //1 items between 1000px and 901px
        itemsDesktopSmall: [993, 1], // betweem 900px and 601px
        itemsTablet: [768, 1], //1 items between 600 and 0
        pagination: false,
        loop: true,
        nav:false,
        navigation : false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:1
            }
        }
    });
    var owl2 = $("#owl-team");
        owl2.owlCarousel({
        items: 4, //1 items above 1000px browser width
        itemsDesktop: [1000, 4], //1 items between 1000px and 901px
        itemsDesktopSmall: [993, 3], // betweem 900px and 601px
        itemsTablet: [768, 1], //1 items between 600 and 0
        pagination: false,
        loop: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            1010:{
                items:3
            }
        }
    });
    var owl3 = $("#owl-clients");
        owl3.owlCarousel({
        items: 3, //1 items above 1000px browser width
        itemsDesktop: [1000, 4], //1 items between 1000px and 901px
        itemsDesktopSmall: [993, 3], // betweem 900px and 601px
        itemsTablet: [768, 1], //1 items between 600 and 0
        pagination: false,
        loop: true,
        nav:true,
        navigation : true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:3
            }
        }


    });
    var owl4 = $("#owl-company");
        owl4.owlCarousel({
        items: 4, //1 items above 1000px browser width
        itemsDesktop: [1000, 4], //1 items between 1000px and 901px
        itemsDesktopSmall: [993, 3], // betweem 900px and 601px
        itemsTablet: [768, 1], //1 items between 600 and 0
        pagination: false,
        loop: true,
        nav:true,
        responsive:{
            0: {
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            }
        }
    });
    var owl5 = $("#owl-stock");
        owl5.owlCarousel({
        items: 1, //1 items above 1000px browser width
        itemsDesktop: [1000, 1], //1 items between 1000px and 901px
        itemsDesktopSmall: [993, 1], // betweem 900px and 601px
        itemsTablet: [768, 1], //1 items between 600 and 0
        pagination: false,
        loop: true,
        nav:true,
        navigation : true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:1
            }
        }


    });
    // Custom Navigation Events
    $('#next-team').on('click', function(){
        owl2.trigger('owl.next');
        owl3.trigger('owl.next');
        owl4.trigger('owl.next');
        return false;
    });
    $('#prev-team').on('click', function(){
        owl2.trigger('owl.prev');
        owl3.trigger('owl.prev');
        owl4.trigger('owl.prev');
        return false;
    });    
    /*=== Sticky top menu ====*/        
    
    $(window).on('scroll', function(){
        
        if($.cookie('popup') !== 'a'){
        
            if($(window).width() > 900){
                if($(this).scrollTop() > 1000){
                    $('#popup').css('bottom', '0');
                }else{
                    $('#popup').css('bottom', '-180px');
                }
            }
            
        }
        
    });
    
    $('#popup-close').on('click', function () { 
        $('#popup').css('bottom', '-180px');
        $.cookie('popup', 'a');
    });
    
    $('#top-slide-close').on('click', function () { 
        $('.top-slide').css('top', '-100%');
        $('.top-slide-body').html('');
    });
    
    $('.navbar-nav a, .left-menu a, .header a').on('click', function () { 
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "form.php", //Change
            data: th.serialize()
        }).done(function() {
            //alert("Спасибо!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    
    
})(jQuery);

window.onload = function() {
    
    //Цели для Яндекс.Метрики и Google Analytics
    $("#form1 button.btn.btn-primary").on("click", (function() {
        //ga("send", "event", "goal", "goal");
        yaCounter41000189.reachGoal("4");
        return true;
    }));
    $("button.btn.btn-primary.btn1").on("click", (function() {
        //ga("send", "event", "goal", "goal");
        yaCounter41000189.reachGoal("1");
        return true;
    }));
    $("#form2 button.btn.btn-primary").on("click", (function() {
        //ga("send", "event", "goal", "goal");
        yaCounter41000189.reachGoal("2");
        return true;
    }));
    $("#form3 button.btn.btn-primary").on("click", (function() {
        //ga("send", "event", "goal", "goal");
        yaCounter41000189.reachGoal("3");
        return true;
    }));

}
$(document).ready(function(x){
    $('.btn-group.select-type button').click(function(){
        var i =$('.btn-group.select-type button').index(this);
        $('.price-iphone').stop().fadeOut(150);
        $('.btn-group.select-type button').removeClass('active');
        $('.price-iphone').eq(i).delay(150).stop().fadeIn(150);
        $('.btn-group.select-type button').eq(i).addClass('active');
        x = i;
        $('.price-iphone .nav-tabs:eq('+x+') .active').trigger('click')
    })
    $('.price-iphone > .nav-tabs >li:first').addClass('active');
    $('.price-iphone .nav-tabs li').click(function(){
            var i = $('.price-iphone .nav-tabs:eq('+x+') li').index(this);
            $('.price-iphone .nav-tabs:eq('+x+') li').removeClass('active');

            if (!($('.tab-content:eq('+x+') > .tab-pane').eq(i).hasClass('in'))) {

            $('.tab-content:eq('+x+') > .tab-pane').animate({'opacity':0},150)
            var rmc = function() {$('.tab-content:eq('+x+') > .tab-pane').removeClass('active in')}
            setTimeout(rmc,150)

            var amc = function() {$('.tab-content:eq('+x+') > .tab-pane').eq(i).addClass('fade active in')};
            setTimeout(amc,150)
                $('.tab-content:eq('+x+') > .tab-pane').delay(150).eq(i).css({'opacity':0}).animate({'opacity':1},150);
            }

            $('.price-iphone .nav-tabs:eq('+x+') li').eq(i).addClass('active');
    })
    $('.haveq-nav ul.nav-tabs li a').eq(0).trigger('click');

    $('.btn-group.select-type button').eq(0).trigger('click');
    $('.price-iphone .nav-tabs').each(function(){
        $(this).children('li').eq(0).addClass('active');
    })
    var textphone = $('.roistat-phone-tel').attr('href').replace(/ /g,'').replace(/\(|\)/g, '').replace(/-/g, '');
    var textphone = $('.footer-contacts .roistat-phone-tel').eq(1).text().replace(/ /g,'').replace(/\(|\)/g, '').replace(/-/g, '');
    $('.footer-contacts .roistat-phone-tel').eq(1).text(textphone);
    $('.roistat-phone-tel').attr('href','tel:'+textphone)
});