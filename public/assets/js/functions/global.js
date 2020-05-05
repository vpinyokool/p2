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

    function masonry() {
        $('.masonry-layout').masonry({
          itemSelector: '.item',
          columnWidth: 236,
          gutter: 16,
          horizontalOrder: true,
          fitWidth: true,
          originLeft: true,
          transitionDuration: 0
        });
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
        more: more
    }
})();