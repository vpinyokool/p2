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


    function updateCloseupState(scrollpos) {
        var cst;
        var el = $('.icon-button.back');
        $('.closeup.scroll-area').on('scroll', function(){
            cst = $(this).scrollTop();

            if (cst > scrollpos) {
                el.addClass('_active');
            } else {
                el.removeClass('_active');
            }
        });
    }

    function backButton() {
        var gst;
        var el = $('.icon-button.back');



        $('.pingrid.scroll-area').on('scroll', function(){
            gst = $(this).scrollTop();

            if (gst > 15) {
                el.addClass('_active');
            } else {
                el.removeClass('_active');
            }
        });
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

        var animSix = lottie.loadAnimation({
            container: document.getElementById('star-6'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-6').on('click', function() {
            if ( $('.star-6').hasClass('_active') ) {
                $('.star-6').removeClass('_active');
                animSix.goToAndStop(0, true);
            } else {
                $('.star-6').addClass('_active');
                animSix.play();
            }
        })

        ////////////

        var animSeven = lottie.loadAnimation({
            container: document.getElementById('star-7'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-7').on('click', function() {
            if ( $('.star-7').hasClass('_active') ) {
                $('.star-7').removeClass('_active');
                animSeven.goToAndStop(0, true);
            } else {
                $('.star-7').addClass('_active');
                animSeven.play();
            }
        })

        ////////////

        var animEight = lottie.loadAnimation({
            container: document.getElementById('star-8'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-8').on('click', function() {
            if ( $('.star-8').hasClass('_active') ) {
                $('.star-8').removeClass('_active');
                animEight.goToAndStop(0, true);
            } else {
                $('.star-8').addClass('_active');
                animEight.play();
            }
        })

        ////////////

        var animNine = lottie.loadAnimation({
            container: document.getElementById('star-9'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-9').on('click', function() {
            if ( $('.star-9').hasClass('_active') ) {
                $('.star-9').removeClass('_active');
                animNine.goToAndStop(0, true);
            } else {
                $('.star-9').addClass('_active');
                animNine.play();
            }
        })

        ////////////

        var animTen = lottie.loadAnimation({
            container: document.getElementById('star-10'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-10').on('click', function() {
            if ( $('.star-10').hasClass('_active') ) {
                $('.star-10').removeClass('_active');
                animTen.goToAndStop(0, true);
            } else {
                $('.star-10').addClass('_active');
                animTen.play();
            }
        })

        ////////////

        var animEleven = lottie.loadAnimation({
            container: document.getElementById('star-11'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-11').on('click', function() {
            if ( $('.star-11').hasClass('_active') ) {
                $('.star-11').removeClass('_active');
                animEleven.goToAndStop(0, true);
            } else {
                $('.star-11').addClass('_active');
                animEleven.play();
            }
        })

        ////////////

        var animTwelve = lottie.loadAnimation({
            container: document.getElementById('star-12'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-12').on('click', function() {
            if ( $('.star-12').hasClass('_active') ) {
                $('.star-12').removeClass('_active');
                animTwelve.goToAndStop(0, true);
            } else {
                $('.star-12').addClass('_active');
                animTwelve.play();
            }
        })

        ////////////

        var animThirteen = lottie.loadAnimation({
            container: document.getElementById('star-13'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-13').on('click', function() {
            if ( $('.star-13').hasClass('_active') ) {
                $('.star-13').removeClass('_active');
                animThirteen.goToAndStop(0, true);
            } else {
                $('.star-13').addClass('_active');
                animThirteen.play();
            }
        })

        ////////////

        var animFourteen = lottie.loadAnimation({
            container: document.getElementById('star-14'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-14').on('click', function() {
            if ( $('.star-14').hasClass('_active') ) {
                $('.star-14').removeClass('_active');
                animFourteen.goToAndStop(0, true);
            } else {
                $('.star-14').addClass('_active');
                animFourteen.play();
            }
        })

        ////////////

        var animFifteen = lottie.loadAnimation({
            container: document.getElementById('star-15'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            speed: .1,
            path: 'assets/animation/star/data.json'
        });
        $('.star-15').on('click', function() {
            if ( $('.star-15').hasClass('_active') ) {
                $('.star-15').removeClass('_active');
                animFifteen.goToAndStop(0, true);
            } else {
                $('.star-15').addClass('_active');
                animFifteen.play();
            }
        })

        ////////////

    };
    function states() {

        var currentCloseupID;
        $('.item').on('click', function() {

            // get id
            currentCloseupID = $(this).data('closeup-id');

            //  switch state
            $('body').addClass('_closeup-is-on');

            // show the right module
            $('.main-card-wrapper').addClass('_hidden');
            $('.cu-' + currentCloseupID).removeClass('_hidden');
            var imgHeight = $('.cu-' + currentCloseupID).find('img').height();
            console.log(imgHeight);
            // run backbutton function

            updateCloseupState(imgHeight);
        });

        $('.pin-img-wrapper .star').click(function (e) {
            e.stopPropagation();
        });


        $('.icon-button.back').on('click', function() {
            $('body').removeClass('_closeup-is-on');
        })
    }

    function modal() {
        // filter sheet
    $('.show-sheet').on('click', function(){
        $('body').addClass('_sheet-is-on');
    });

        $('.close-sheet').on('click', function(){
            $('body').removeClass('_sheet-is-on');
        });

        $('.overlay').on('click', function(){
            $('body').removeClass('_sheet-is-on');
        });


    }
    function filter() {
        var $grid = $('.masonry-layout').masonry({
          itemSelector: '.item',
          columnWidth: 176,
          gutter: 8,
          horizontalOrder: true,
          fitWidth: true,
          originLeft: true,
          transitionDuration: 0
        });

        function renderGrid() {
            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }

        function updateCount() {
            var num = $('.item:not(._hidden)').length;
            // console.log(num);
            $('.pin-count span.num').html(num + ' ');

        }
        renderGrid();

        $('.filter-sheet li').on('click', function() {
            $('.filter-sheet li').removeClass('_active');
            $(this).addClass('_active');
        });


        // show all pins
        $('.show-all-pins').on('click', function() {
            $('.item').removeClass('_hidden');
            renderGrid();
            $('body').removeClass('_sheet-is-on');
            updateCount();
            $('span.pin-type').addClass('_hidden');
            $('.empty-state').addClass('_hidden');
        });

        // show stars only
        $('.show-stars-only').on('click', function() {
            $('.item').addClass('_hidden');
            $('.star._active').parent().parent().removeClass('_hidden');
            renderGrid();
            $('body').removeClass('_sheet-is-on');
            updateCount();
            $('span.pin-type').removeClass('_hidden');
            if ( $('.item:not(._hidden)').length == 0 ) {
                $('.empty-state').removeClass('_hidden');
            }
        });
    }



    return {
        states: states,
        modal: modal,
        filter: filter,
        backButton: backButton,
        bodyMovin: bodyMovin
    }
})();