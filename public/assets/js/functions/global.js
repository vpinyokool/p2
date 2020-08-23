//
// global
var Global = (function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // return true or false

    var $body = $('body');
    var $nav = $('nav');


    // disable zoom on phones
    document.addEventListener('touchmove', function(event) {
        event = event.originalEvent || event;
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);

    function headroom() {
        $('nav').headroom();
    }

    function scrollMeta() {
        var $metaContainer = $('.title-container');
        var delay = 500;
        var ease = Power3.easeOut;

        $(window).scroll($.debounce(delay, true, function() {
            console.log('SCROLLING!');

            TweenLite.to($metaContainer, 1, {
                opacity: 0,
                ease: ease
            })
        }));
        $(window).scroll($.debounce(delay, function() {
            TweenLite.to($metaContainer, 1, {
                opacity: 1,
                ease: ease
            })
        }));
    }

    function bodyMovin() {
        var animOne = lottie.loadAnimation({
            container: document.getElementById('star-1'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-1').on('click', function() {
            if ( $('.star-1').hasClass('_active') ) {
                $('.star-1').removeClass('_active');
                animOne.goToAndStop(0, true);
            } else {
                $('.star-1').addClass('_active');
                animOne.play();
            }
        })

        ////////////

        var animTwo = lottie.loadAnimation({
            container: document.getElementById('star-2'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-2').on('click', function() {
            if ( $('.star-2').hasClass('_active') ) {
                $('.star-2').removeClass('_active');
                animTwo.goToAndStop(0, true);
            } else {
                $('.star-2').addClass('_active');
                animTwo.play();
            }
        })

        ////////////

        var animThree = lottie.loadAnimation({
            container: document.getElementById('star-3'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-3').on('click', function() {
            if ( $('.star-3').hasClass('_active') ) {
                $('.star-3').removeClass('_active');
                animThree.goToAndStop(0, true);
            } else {
                $('.star-3').addClass('_active');
                animThree.play();
            }
        })

        ////////////

        var animFour = lottie.loadAnimation({
            container: document.getElementById('star-4'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-4').on('click', function() {
            if ( $('.star-4').hasClass('_active') ) {
                $('.star-4').removeClass('_active');
                animFour.goToAndStop(0, true);
            } else {
                $('.star-4').addClass('_active');
                animFour.play();
            }
        })

        ////////////

        var animFive = lottie.loadAnimation({
            container: document.getElementById('star-5'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-5').on('click', function() {
            if ( $('.star-5').hasClass('_active') ) {
                $('.star-5').removeClass('_active');
                animFive.goToAndStop(0, true);
            } else {
                $('.star-5').addClass('_active');
                animFive.play();
            }
        })

        ////////////

    };
    function masonry() {

        var $grid = $('.masonry-layout').masonry({
          itemSelector: '.item',
          columnWidth: 176,
          gutter: 8,
          horizontalOrder: true,
          fitWidth: true,
          originLeft: true,
          transitionDuration: 0
        });


        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });

        var currentCloseupID;
        $('.item').on('click', function() {

            // get id
            currentCloseupID = $(this).data('closeup-id');

            //  switch state
            $('body').addClass('_closeup-is-on');

            // show the right module
            $('.main-card-wrapper').addClass('_hidden');
            $('.cu-' + currentCloseupID).removeClass('_hidden');
        });

        $('.pin-img-wrapper .star').click(function (e) {
            e.stopPropagation();
        });


        $('.icon-button.back').on('click', function() {
            $('body').removeClass('_closeup-is-on');
        })
    }

    function modal() {
        // invite
        $('.avatar-list').on('click', function() {
            $('.overlay.invite').addClass('_active');
            $('body').addClass('_overlay-is-on');
        });

        // add
        $('.tool.add').on('click', function() {
           $('.overlay.add').addClass('_active');
           $('body').addClass('_overlay-is-on');
        });

        // edit
        $('.edit-board').on('click', function() {
           $('.overlay.edit').addClass('_active');
           $('.more-flyout').removeClass('_active');
           $('.more-trigger').removeClass('_active');
           $('body').addClass('_overlay-is-on');

        });


        $('.overlay').on('click', function(){
            $(this).removeClass('_active');
            $('body').removeClass('_overlay-is-on');
        });


    }
    function more() {
        $('.more-trigger').on('click', function() {
            $(this).toggleClass('_active');
            $('.more-flyout').toggleClass('_active');
        });
    }

    function dock() {
        var sp;
        var trigger = parseInt($('.board-tools').offset().top) + 40;
        console.log(trigger);
        $(window).on('scroll',function() {
            sp = $(this).scrollTop();
            console.log(sp);
            if (sp > trigger) {
                $('.tools-dock').addClass('_active');
            } else {
                $('.tools-dock').removeClass('_active');
            }
        });
    }
    function settings() {
        $('#setting-trigger').on('click', function() {
            $(this).toggleClass('_active');
            $('.settings').toggleClass('_active');
        });
      $('.settings li').on('click', function() {
            $('#setting-trigger').toggleClass('_active');
            $('.settings').removeClass('_active');

            $('.settings li').removeClass('_active');
            $(this).addClass('_active');

            if ( $(this).data('pins') ) {
                $('.section').addClass('_hidden');
                $('.pin-grid').removeClass('_hidden');
                console.log('pins-clicked');
                masonry();
            } else if ( $(this).data('pin') ) {
                $('.section').addClass('_hidden');
                $('.pin-grid:not(.always-there)').addClass('_hidden');
                console.log('pin-clicked');
                masonry();
            } else if ( $(this).data('sections-pins') ) {
                $('.section').removeClass('_hidden');
                $('.pin-grid').removeClass('_hidden');
                console.log('sections-pins');
                masonry();
            } else if ( $(this).data('section-pins') ) {
                $('.section').addClass('_hidden');
                $('.section.always-there').removeClass('_hidden');
                $('.pin-grid').removeClass('_hidden');
                console.log('section-pins');
                masonry();
            } else if ( $(this).data('section-pin') ) {
                $('.section').addClass('_hidden');
                $('.section.always-there').removeClass('_hidden');
                $('.pin-grid').removeClass('_hidden');
                $('.pin-grid:not(.always-there)').addClass('_hidden');
                console.log('section-pin');
                masonry();
            }
        });

    }
    function reveal() {
        // Changing the defaults
        window.sr = ScrollReveal({
            reset: false
        });
        sr.reveal('.masonry-layout__panel__wrap', {
            duration: 650,
            distance: '100px',
        });
    }

    return {
        reveal: reveal,
        headroom: headroom,
        scrollMeta: scrollMeta,
        masonry: masonry,
        settings: settings,
        modal: modal,
        dock: dock,
        more: more,
        bodyMovin: bodyMovin
    }
})();