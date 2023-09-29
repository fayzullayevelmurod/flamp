const flamps = [
    `<div id="2flamp_hype_container" class="HYPE_document main_image" style="margin:auto;position:relative;width:1188px;height:588px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="2_flamp.hyperesources/2flamp_hype_generated_script.js?7059"></script>
</div>`,
    `<div id="3flamp_hype_container" class="HYPE_document main_image" style="margin:auto;position:relative;width:1188px;height:588px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="3_flamp.hyperesources/3flamp_hype_generated_script.js?54855"></script>
</div>`,
    `<div id="4flamp_hype_container" class="HYPE_document main_image" style="margin:auto;position:relative;width:1188px;height:588px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="4_flamp.hyperesources/4flamp_hype_generated_script.js?24289"></script>
</div>`,
    `<div id="5flamp_hype_container" class="HYPE_document main_image" style="margin:auto;position:relative;width:1188px;height:588px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="5_flamp.hyperesources/5flamp_hype_generated_script.js?18507"></script>
</div>`
]

$('header .bars').click(function () {
    $('header .logo').toggleClass('active');
    $('header .bars').toggleClass('active');
    $('body').toggleClass('active');
    if ($('.mobile_menu').hasClass('open')) {
        $('.mobile_menu').removeClass('open');
        $('.mobile_menu').addClass('close');
    } else {
        $('.mobile_menu').removeClass('close');
        $('.mobile_menu').addClass('open');
    }
})

let swiper1 = new Swiper(".home_slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".home_slider_next_button",
    },
    breakpoints: {
        1050: {
            slidesPerView: 4,
        }
    }
});


let swiper = Swiper;
let init = false;
function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 1230px)");

    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper(".view_project_slider", {
                slidesPerView: 'auto',
                spaceBetween: 10,
            });
        }
    } else {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener("load", function () {
    swiperMode();
});

window.addEventListener("resize", function () {
    swiperMode();
});

$(document).ready(function () {
    $('.tabs').each(function (index, el) {
        let i = 1
        let len = $(el).find('.tabs_head li').length;
        let changeTab = function (idx) {
            $(el).find('.main_image').remove();
            let currentLi = $(el).find('.tabs_head li')[idx - 1]
            $(el).find('.tabs_head li').removeClass('active');
            $(currentLi).addClass('active');
            $(el).find('.tab_content').not('.tab_' + idx).removeClass('active');
            $(el).find('.tab_content').not('.tab_' + idx).addClass('noActive');
            $(el).find('.tab_' + idx).addClass('active');
            $(el).find('.tab_' + idx).removeClass('noActive');
            $(el).find('.active .message_wrapper').before(flamps[idx - 1]);
        }

        let clrInterval = setInterval(() => {
            i++;
            if (i > len) {
                i = 1;
            }
            changeTab(i);
        }, 7000);

        let li = $(el).find('li');
        $(li).click(function () {
            clearInterval(clrInterval);
            let activeTab = $(this).attr('data-index');
            changeTab(activeTab);
            i = activeTab;
            clrInterval = setInterval(() => {
                i++;
                if (i > len) {
                    i = 1;
                }
                changeTab(i);
            }, 7000)
        })
    })

    $('.tabs1').each(function (index, el) {
        let i = 1
        let len = $(el).find('.tabs_head li').length;
        let changeTab = function (idx) {
            let currentLi = $(el).find('.tabs_head li')[idx - 1]
            $(el).find('.tabs_head li').removeClass('active');
            $(currentLi).addClass('active');
            $(el).find('.tab_content').not('.tab_' + idx).removeClass('active');
            $(el).find('.tab_content').not('.tab_' + idx).addClass('noActive');
            $(el).find('.tab_' + idx).addClass('active');
            $(el).find('.tab_' + idx).removeClass('noActive');
        }

        let li = $(el).find('li');
        $(li).click(function () {
            let activeTab = $(this).attr('data-index');
            changeTab(activeTab);
        })
    })

    $('.accordions1').each(function (index, el) {
        $(el).find('.accordion').each(function (i, e) {
            let accardion_body = $(e).find('.accardion_body');
            $(accardion_body).slideUp(0);

            $(e).find('.accardion_head').click(function () {
                $(el).find('.accordion').not(e).removeClass('active');
                $(e).toggleClass('active');
                $(el).find('.accardion_body .main_image').remove();
                $(el).find('.active .text').before(flamps[$(this).attr('data-index')])
                $(el).find('.accardion_body').not(accardion_body).slideUp(300);
                $(accardion_body).slideToggle(300);
                console.log($(this).attr('data-index'));
            })
        })
    })

    $('.accordions2').each(function (index, el) {
        $(el).find('.accordion').each(function (i, e) {
            let accardion_body = $(e).find('.accardion_body');
            $(accardion_body).slideUp(0);

            $(e).find('.accardion_head').click(function () {
                $(el).find('.accordion').not(e).removeClass('active');
                $(e).toggleClass('active');
                $(el).find('.accardion_body').not(accardion_body).slideUp(300);
                $(accardion_body).slideToggle(300);
            })
        })
    })

    let media_format_slider = new Swiper('.media_format_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        navigation: {
            nextEl: '.slide_next_btn',
            prevEl: '.slide_prev_btn'
        }
    });

    let media_format_index = 0;

    function playSliderVideo () {
        let video = $('.media_format_slider .swiper-slide.swiper-slide-active video')[0];
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    }

    $('.tabs3 .tabs_head li').each(function (index, el) {
        $(el).click(function () {
            $('.tabs3 .tabs_head li').not(el).removeClass('active');
            $(el).addClass('active');
            media_format_slider.slideTo(index);
            media_format_index = index;
            playSliderVideo();
        })
    })

    $('.tabs3 .slide_prev_btn').click(function () {
        media_format_index--;
        $('.tabs3 .tabs_head li').removeClass('active');
        let activeLi = $('.tabs3 .tabs_head li')[media_format_index];
        $(activeLi).addClass('active');
        playSliderVideo();
    })

    $('.tabs3 .slide_next_btn').click(function () {
        media_format_index++;
        $('.tabs3 .tabs_head li').removeClass('active');
        let activeLi = $('.tabs3 .tabs_head li')[media_format_index];
        $(activeLi).addClass('active');
        playSliderVideo();
    })
})