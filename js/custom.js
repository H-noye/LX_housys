$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    $('#header .utiles .mbtn').on('click', function () {
        $('#header .hd_wrap .gnb').toggleClass('on')
        $('#header').toggleClass('on')
    });


    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        };
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.main_visual .page',
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);

                if (this.realIndex == 1) {
                    $('.main_visual .main_visual_slide video').trigger('pause')
                } else {
                    $('.main_visual .main_visual_slide video').trigger('play')
                }
            }
        }
    });

    let sw = true;
    $('.main_visual .play').on('click', function () {
        if (sw) {
            main_visual_slide.autoplay.start();
            $(this).addClass('on');
        } else {
            main_visual_slide.autoplay.pause();
            $(this).removeClass('on');
        }

        sw = !sw;
    });

    const main_about_slide = new Swiper('.main_about_slide', {
        loop: true,
        spaceBetween: 40,
        pagination: {
            el: '.main_about .title .page',
            clickable: true,
        },
    });

    const main_news_slide = new Swiper('.main_news_slide', {
        loop: true,
        navigation: {
            nextEl: '.main_news .arrows .next',
            prevEl: '.main_news .arrows .prev',
        },
    })

    const sub_news_slide = new Swiper('.sub_news_slide', {
        loop: true,
    })

    main_news_slide.controller.control = sub_news_slide;
    sub_news_slide.controller.control = main_news_slide;

    const main_concept_slide = new Swiper('.main_concept_slide', {
        effect: 'fade',
        loop: true,
    });


    $('.tap_menu button').on('mouseenter', function () {
        let idx = $(this).index();

        main_concept_slide.slideToLoop(idx)
    })

    $('.tap_menu button').on('click', function () {
        $('.tap_menu button').removeClass('on')
        $(this).addClass('on')
        $('.main_concept .main_concept_slide .itm').toggleClass('on')
    })
})