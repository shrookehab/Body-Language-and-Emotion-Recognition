$("document").ready(function () {
    "use strict";

//outo write
    var typed = new Typed('.writter', {
        strings: ["<p>Front End <span>Developer</span> </p>"],
        typeSpeed: 100,
        backSpeed: 40,
        backDelay: 1000,
        loop: true
    });
    // strings: ["<p>Front End <span>Developer</span> </p>", "<p>React js <span>Developer</span> </p>"],

    //my scroll


    $("body").niceScroll({
        cursorcolor: "#d81b60",
        cursorwidth: "8px",
        cursorborder: "1px solid #d81b60"
    });


        // scroll to top
    
        $(".scroll").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
        $('.scroll').fadeIn(200);
    } else {
        $('.scroll').fadeOut(200);
    }
});
    
    //header

    $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    $(".header .header-info").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".navbar").height()) / 2 - 60);
    });

    //scroll to about

    $(".navbar .nav-about").click(function () {

        $("html, body").animate({

            scrollTop: $(".about").offset().top - 70

        }, 2000);
    });
    $(".header button").click(function () {

        $("html, body").animate({

            scrollTop: $(".about").offset().top - 50

        }, 2000);
    });


    //scroll to home

    $(".navbar .nav-home").click(function () {

        $("html, body").animate({

            scrollTop: $(".header").offset().top

        }, 2000);
    });

    // scroll to services
    $(".navbar .nav-services").click(function () {

        $("html, body").animate({

            scrollTop: $(".services").offset().top - 20

        }, 2000);
    });

    // scroll to protofolio
    $(".navbar .nav-portfolio").click(function () {

        $("html, body").animate({

            scrollTop: $(".protofolio").offset().top - 20

        }, 2000);
    });

    // scroll to work
    $(".navbar .nav-work").click(function () {

        $("html, body").animate({

            // scrollTop: $(".testi").offset().top -150
            scrollTop: $(".work").offset().top -40

        }, 2000);
    });

    // scroll to contact
    $(".navbar .nav-contact").click(function () {

        $("html, body").animate({

            scrollTop: $(".drop").offset().top + 5

        }, 2000);
    });

    $(".about button").click(function () {

        $("html, body").animate({

            scrollTop: $(".contact").offset().top + 15

        }, 2000);
    });


    //  scroll to !!!!!!!!!!!

    $(window).on("scroll", function () {

        if ($(window).scrollTop() >= 100) {

            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }

        // scroll to about
        // if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 1479) 
        // if ($(window).scrollTop() >= 2240 && $(window).scrollTop() <= 2918) {

        //     $(".navbar .nav-about").addClass("active").siblings().removeClass("active");

        // }

        // scroll to home

        // if ($(window).scrollTop() <= 349) {

        //     $(".navbar .nav-home").addClass("active").siblings().removeClass("active");
        // }

        // scroll to protofolio

        // if ($(window).scrollTop() >= 1480 && $(window).scrollTop() <= 2040) {

        //     $(".navbar .nav-protofolio").addClass("active").siblings().removeClass("active");
        // }

        // scroll to contact

        // if ($(window).scrollTop() >= 3275) {

        //     $(".navbar .nav-contact").addClass("active").siblings().removeClass("active");
        // }

        // scroll to testimonial
        //         if ($(window).scrollTop() >= 2917 && $(window).scrollTop() <= 3274) {

        //     $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
        // }
        // nav bar big
       

        // scroll to services

        // if ($(window).scrollTop() >= 1480 && $(window).scrollTop() <= 2040) {

        //     $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
        // }
    //     if ($(window).scrollTop() >= 1417 && $(window).scrollTop() <= 2011) {

    //         $(".navbar .nav-services").addClass("active").siblings().removeClass("active");
    //     }
     });


    // protofolio

    $(".protofolio .list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    /* loading */

    $(".loading").ready(
        function () {
            setTimeout(function () {
                $(".loading").fadeOut();

            }, 3000);
        });

    /* count statistic servier        */
    $('.count').countUp({
        delay: 10,
        time: 2000
    });

    var mixer = mixitup(".protofolio");
    
//js wow

});
wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
