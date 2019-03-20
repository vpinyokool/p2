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
        scrollMeta: scrollMeta
    }
})();