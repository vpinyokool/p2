//
// global
var Global = (function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    // return true or false
    var $body = $('body');
    var $nav = $('nav');
    var $toast = $('.toast');

    // disable zoom on phones
    document.addEventListener('touchmove', function(event) {
        event = event.originalEvent || event;
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);

    function profileScroll(scrollpos) {
        var ps;
        var el = $('.profile-navigation-bar');
        $('.profile.scroll-area').on('scroll', function() {
            cst = $(this).scrollTop();

            if (cst > scrollpos) {
                el.addClass('_active');
            } else {
                el.removeClass('_active');
            }
        });
    }

    function updateCloseupState(scrollpos) {
        var cst;
        var el = $('.icon-button.back');
        $('.closeup.scroll-area').on('scroll', function() {
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
        var bar = $('.navigation-bar');


        $('.pingrid.scroll-area').on('scroll', function() {
            gst = $(this).scrollTop();

            if (gst > 15) {
                el.addClass('_active');
                bar.addClass('_active');
            } else {
                el.removeClass('_active');
                bar.removeClass('_active');
            }
        });
    }



    function hearting() {
        var sPath = window.location.pathname;
        var pathHref = window.location.href;
        var path = '../assets/animation/heart.json';
        var string = 'github';
        console.log('pathHREF is ' + pathHref);
        if (pathHref.indexOf(string) >= 1) {
            console.log('path has ' + string + ' in it');
            path = 'assets/animation/heart.json';
        } else {
            console.log('path does not have ' + string + ' in it');
        }


        //
        var pinCount = 15;
        var curPinID;
        var curProfileImg;
        var anim = [];
        for (var i = 0; i < pinCount; i++) {
            anim[i + 1] = lottie.loadAnimation({
                container: document.getElementById('heart-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: path
            });
        }

        // var arr = new Array(pinCount);
        var arr = Array.from({
            length: pinCount
        }, (_, i) => i + 1);
        $('#skip').on('click', function() {
            $toast.addClass('_rounded');
            curProfileImg = $('.avatar-wrap').find('img').attr('src');

            $('.toast-img-wrapper').html('<img src="' + curProfileImg + '" alt>');
            closeBoardPicker();
        });

        function closeBoardPicker() {

            // console.log('ran');
            $('.board-picker-sheet').removeClass('_active');

            $body.removeClass('_sheet-is-on');

            $('.toast-text span').html('Organize later');
            $('.toast-img-wrapper').html(
                '<img src="assets/images/boards-cover/' + 'profile' + '.png" alt>'
            );
            showToast();

            // unhide HF Pins on orgainze later section
            if ($body.hasClass('_closeup-is-on')) {
                destroyUPGrid();
                curPinID = $('body').attr('data-cu-id');
                $('#uop-' + curPinID).removeClass('_hidden');
                $('#uop-' + curPinID).prependTo('#unorganized-pins-wrap');
            }
        }
        $.each(arr, function(index, value) {
            $('.heart-' + value).on('click', function() {
                $toast.removeClass('_rounded');
                var curSavedImgSrc;
                var $savedPin = $('.saved-pin-wrapper');
                // get pin image then apply as background in the board picker
                var i = $body.attr('data-cu-id');
                curSavedImgSrc = $('.cu-' + i).find('img').attr('src');
                $savedPin.css('background-image', 'url("' + curSavedImgSrc + '")');

                // if you you already saved, unsaveed
                if ($('.heart-' + value).hasClass('_active')) {
                    $('.heart-' + value).removeClass('_active');
                    $('.pin-id-' + value).removeClass('heart');
                    anim[value].playSegments([60, 119], true);

                    // if not save
                } else {
                    $('.heart-' + value).addClass('_active');
                    $('.pin-id-' + value).addClass('heart');
                    anim[value].playSegments([0, 59], true);

                    // pull up board picker
                    setTimeout(function() {
                        $('.board-picker-sheet').addClass('_active');
                        $body.addClass('_sheet-is-on');
                    }, 1500);

                    $('.board-list').on('click', function() {




                        // show pin in profile uop if saved without organization
                        if ($(this).data('dest') == 'profile') {

                            // get pin id, then find pin idea on profile and unhide
                            curPinID = $('body').attr('data-cu-id');
                            $('#uop-' + curPinID).removeClass('_hidden');
                        }


                        // update states + show toast
                        $('.board-picker-sheet').removeClass('_active');
                        $body.removeClass('_sheet-is-on');
                        $('.toast-text span').html($(this).data('toast'));
                        $('.toast-img-wrapper').html(
                            '<img src="assets/images/boards-cover/' + $(this).data('dest') + '.png" alt>'
                        );
                        showToast();
                    });



                }



            });
        });



    };

    function showToast() {
        var tl = new TimelineLite({});
        var dur = .35;

        tl.to($toast, dur * 1.5, {
            ease: Back.easeOut.config(1.7),
            y: 60,
            opacity: 1
        });
        tl.to($toast, dur, {
            ease: Power2.easeOut,
            y: 60,
            opacity: 0
        }, "+=2.0");

        tl.set($toast, {
            y: 0,
            opacity: 1
        });
        tl.set($toast, {
            clearProps: "all"
        });
    };



    function states() {
        // console.log('ran');
        var $discover = $('.discover');
        var currentCloseupID;
        var $profile = ($('.nav-list.profile'));
        var $home = ($('.nav-list.home'));
        var activeC;
        $discover.on('click', function() {
            $body.addClass('_stream-is-on');
        });
        $profile.on('click', function() {
            $('.nav-list').removeClass('_active');
            $(this).addClass('_active');
            $body.addClass('_profile-is-on');

            unorganizedPins();
        });

        $home.on('click', function() {
            $('.nav-list').removeClass('_active');
            $(this).addClass('_active');
            $body.removeClass('_profile-is-on');
        });

        $('.item').on('click', function() {

            // get id
            currentCloseupID = $(this).data('closeup-id');
            $body.attr('data-cu-id', currentCloseupID);


            //  switch state
            $('body').addClass('_closeup-is-on');
            $('.closeup.scroll-area').scrollTop(0);
            // show the right module
            $('.main-card-wrapper').addClass('_hidden');
            $('.reaction-card-wrapper').addClass('_hidden');
            $('.cu-' + currentCloseupID).removeClass('_hidden');
            var imgHeight = $('.cu-' + currentCloseupID).find('img').height();

            // run backbutton function
            updateCloseupState(imgHeight);
            floatingActionBar();
        });


        $('.icon-button.back').on('click', function() {
            $('body').removeClass('_closeup-is-on');
            $('body').removeClass('_keyboard-is-on');

            // unbind scroll
            $('.closeup.scroll-area').off('scroll');
        });

        $('.icon-button.stream-back').on('click', function() {
            $('body').removeClass('_stream-is-on');
        });

    }

    function floatingActionBar() {

        // check if action bar is in the viewport
        activeC = parseInt($body.attr('data-cu-id')) - 1;
        var st;
        var scrollpos;
        var offset;
        var phoneTop = $('.phone-canvas').offset().top;
        var trigger = 681 + 8 + 16;
        var curOffset;
        var cst;

        st = $('.closeup.scroll-area').scrollTop();
        offset = $('.main-card-wrapper:eq(' + activeC + ')').find('.cu-pin-description').offset().top + $('.main-card-wrapper:eq(' + activeC + ')').find('.cu-pin-description').height();
        curOffset = offset - phoneTop;

        if (curOffset >= trigger) {
            // console.log('show bar');
            $('.main-card-wrapper:eq(' + activeC + ')').addClass('_floating');
        } else {
            // console.log('do nothing');
            $('.main-card-wrapper:eq(' + activeC + ')').removeClass('_floating');
        }
        $('.closeup.scroll-area').on('scroll', function() {
            cst = $(this).scrollTop();

            if (cst > ((trigger - curOffset) * -1)) {
                $('.main-card-wrapper:eq(' + activeC + ')').removeClass('_floating');
                $('.main-card-wrapper:eq(' + activeC + ')').find('.cu-pin-actions-wrap').css('bottom', 0);
            } else {
                $('.main-card-wrapper:eq(' + activeC + ')').find('.cu-pin-actions-wrap').css('bottom', -cst);
                $('.main-card-wrapper:eq(' + activeC + ')').addClass('_floating');
            }
        });

    }

    function trunk8() {
        $('.cu-pin-description .string').trunk8({
            lines: 2
        });
    }

    function unorganizedPins() {
        var $uop = $('.unorganized-pins-wrap').isotope({
            itemSelector: '.uop-pin',
            masonry: {
                columnWidth: 114,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        $uop.imagesLoaded().progress(function() {
            $uop.isotope('layout');
        });

        return $uop;
    }

    function destroyUPGrid() {
        var $uop = $('.unorganized-pins-wrap').isotope({
            itemSelector: '.uop-pin',
            masonry: {
                columnWidth: 114,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        $uop.isotope('destroy'); // destroy
    }

    function likeThisGrid() {
        var $likeThisGrid = $('.more-like-this-grid').isotope({
            itemSelector: '.disco-pin',
            masonry: {
                columnWidth: 174,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        $likeThisGrid.imagesLoaded().progress(function() {
            $likeThisGrid.isotope('layout');
        });
    }

    function streams() {
        var $progressBar;
        var progress;
        var $splide;
        var interval = null;
        var pageIndex = 1;
        var howManyPages;
        var activeVid = $('.idea-pin._active').find('.page._active').find('video');
        var currentPageIndex;


        initCarousel();
        streamHearting();
        navigativeActiveVid();
        playPauseActiveVideo();
        splideMove();

        $('.discover').on('click', function() {
            firstSlide();
            playVideoOnActivePage();

        });


        $('.stream-back').on('click', function() {
            onCloseStream();
            killInterval();

        });

        $('.stream-audio').on('click', function() {

            $videos = $('.idea-pin video');
            if ($videos.prop('muted')) {

                // unmute
                $videos.prop('muted', false);
                $body.addClass('_audio-is-on');
            } else {

                // mute
                $videos.prop('muted', true);
                $body.removeClass('_audio-is-on');
            }


        });

        function playVideoOnActivePage() {
            var activeIdeaPinIndex;

            activeVid = $('.idea-pin._active').find('.page._active').find('video');
            activeVid.get(0).currentTime = 0;
            activeVid.get(0).play();

            activeIdeaPinIndex = $('.idea-pin._active').attr('data-idea-pin-id');

            // update stream id number
            $body.attr('data-stream-id', activeIdeaPinIndex);

            // update progress
            updateProgress();

            activeVid.get(0).onended = function() {
                // console.log('video has ended');

                // if next page exist, play the next video

                if (activeVid.parent().next().length != 0) {
                    activeVid.parent().removeClass('_active');
                    activeVid.parent().next().addClass('_active');
                    activeVid = activeVid.parent().next().find('video');
                    // console.log(activeVid.get(0));

                    // current page index
                    currentPageIndex = $('.page._active').index();

                    // move to the next page
                    $('.idea-pin._active .page-container').css('transform', 'translateX(' + 375 * -currentPageIndex + 'px)');

                    //playing the next video
                    playVideoOnActivePage();


                } else {
                    // console.log('current ideaPin has ended');

                    //check if we can play the next pin

                    // console.log($('.idea-pin._active').next());
                    if ($('.idea-pin._active').next().hasClass('_do-not-play')) {
                        // current idea pins has ended, and the next pin is the second to last pin.
                        //..this will be the last pin we play
                        killInterval();

                        console.log('END OF FEED');
                    } else {
                        // current idea pins has ended, and the next pin is not the second to last pin

                        // clear interval
                        killInterval();

                        //remove active state from current video
                        activeVid.parent().removeClass('_active');

                        //remove idea pin active state
                        activeVid.parent().parent().parent().removeClass('_active').addClass('_played');

                        //add active state to the next idea Pin
                        activeVid.parent().parent().parent().next().addClass('_active');

                        //add active state to the first page in the active idea Pin
                        activeVid.parent().parent().parent().next().find('.page').first().addClass('_active');

                        // //set active state on the new video in the newly actived idea pin
                        activeVid = $('.idea-pin._active').find('.page._active').find('video');

                        //animate / flick to the new idea Pin
                        // console.log('splide object is ' + $splide);
                        nextSlide();

                        // play the video
                        playVideoOnActivePage();

                    }
                }
            };
        }



        function onCloseStream() {
            activeVid.get(0).pause();

            $('.progress').css('width', '0%');

            $('.idea-pin').removeClass('_active');
            $('.page').removeClass('_active');
            $('.idea-pin').removeClass('_played');

            $('.idea-pin').first().addClass('_active');
            $('.idea-pin').first().find('.page').first().addClass('_active');

            //reset page container
            $('.page-container').css('transform', 'translateX(0)');

            activeVid = $('.idea-pin._active').find('.page._active').find('video');
        }

        function splideMove() {


            $splide.on('moved', function() {
                // console.log('Splide has moved!');

                // stop the current active video
                activeVid.get(0).pause();
                killInterval();

                // set the new states for all elements

                // set the new states for idea pins
                $('.idea-pin').removeClass('_active');
                $('.idea-pin.is-active').addClass('_active');

                // set played state
                $('.idea-pin').removeClass('_played');
                $('.idea-pin.is-active').prev().addClass('_played');

                // set snew ates for pages
                $('.page').removeClass('_active');
                $('.idea-pin.is-active').find('.page').first().addClass('_active');


                // reset page-container positioning
                $('.page-container').css('transform', 'translateX(0)');

                //reset all progress
                $('.progress').css('width', '0%');

                // set new active video
                activeVid = $('.idea-pin._active').find('.page._active').find('video');
                playVideoOnActivePage();

            });
        }

        function initCarousel() {
            $splide = new Splide('.splide').mount();
        }

        function firstSlide() {
            $splide.go('0');
        }

        function nextSlide() {
            $splide.go('+');
        }

        function streamHearting() {

            var sPath = window.location.pathname;
            var pathHref = window.location.href;
            var path = '../assets/animation/heart-stream.json';
            var aPath = '../assets/animation/appreciation.json';
            var string = 'github';
            var $savedPin = $('.saved-pin-wrapper');
            var curIdeaPinImg;
            var posterPath;
            console.log('pathHREF is ' + pathHref);
            if (pathHref.indexOf(string) >= 1) {
                console.log('path has ' + string + ' in it');
                path = 'assets/animation/heart-stream.json';
                aPath = 'assets/animation/appreciation.json';
            } else {
                console.log('path does not have ' + string + ' in it');
            }

            //
            var pinCount = parseInt($('.idea-pin').length) - 1;
            var curCount;
            var appreciation;
            var anim = [];
            var tlThanks = new TimelineLite({});
            var $thanks = $('#creator-thanks');
            var thanksDur = .8;

            appreciation = lottie.loadAnimation({
                container: document.getElementById('appreciation'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: aPath
            });

            appreciation.onComplete = function() {
                appreciation.goToAndStop(0, true)
            };


            for (var i = 0; i < pinCount; i++) {
                anim[i + 1] = lottie.loadAnimation({
                    container: document.getElementById('heart-stream-' + [i + 1]),
                    renderer: 'svg',
                    loop: false,
                    autoplay: false,
                    path: path
                });
            }

            // var arr = new Array(pinCount);
            var arr = Array.from({
                length: pinCount
            }, (_, i) => i + 1);
            $.each(arr, function(index, value) {
                $('.stream-save-btn-' + value).on('click', function() {
                    curCount = parseInt($('.stream-save-btn-' + value).next().html());
                    // console.log('clicked!');
                    $toast.removeClass('_rounded');

                    curIdeaPinImg = $('.idea-pin._active').attr('data-poster');

                    posterPath = 'url("assets/videos/' + curIdeaPinImg + '.png")';

                    if (pathHref.indexOf(string) >= 1) {
                        console.log('on git');
                        posterPath = 'url("assets/videos/' + curIdeaPinImg + '.png")';
                    }
                    $savedPin.css('background-image', posterPath);

                    //unhide the pin


                    if ($('.stream-save-btn-' + value).hasClass('_active')) {
                        $('.stream-save-btn-' + value).removeClass('_active');
                        activeVid.parent().parent().removeClass('_saved');
                        anim[value].goToAndStop(0, true);

                        // update save count
                        $('.stream-save-btn-' + value).next().html(curCount - 1);


                        // update poster image in toast
                        // which idea Pin + get poster attribute

                    } else {

                        $('.stream-save-btn-' + value).addClass('_active');
                        activeVid.parent().parent().addClass('_saved');
                        anim[value].playSegments([0, 59], true);
                        $('.stream-save-btn-' + value).next().html(curCount + 1);

                        // pull up board picker
                        setTimeout(function() {
                            $('.board-picker-sheet').addClass('_active');
                            $body.addClass('_sheet-is-on');
                            activeVid.get(0).pause();
                            killInterval();
                        }, 1100);

                        $('.board-list').on('click', function() {
                            $('.board-picker-sheet').removeClass('_active');
                            $body.removeClass('_sheet-is-on');


                            $('.toast-text span').html($(this).data('toast'));
                            $('.toast-img-wrapper').html('<img src="assets/images/boards-cover/' + $(this).data('dest') + '.png" alt>');

                            showToast();





                            setTimeout(function() {
                                appreciation.play()
                                tlThanks.to($thanks, thanksDur, {
                                    ease: Back.easeOut,
                                    bottom: '172px',
                                    opacity: 1
                                }, "+=.5");

                                tlThanks.to($thanks, thanksDur, {
                                    ease: Power2.easeOut,
                                    bottom: '172px',
                                    opacity: 0
                                }, "+=2.5");

                                tlThanks.set($thanks, {
                                    clearProps: "all"
                                });


                            }, 600);
                            activeVid.get(0).play();
                            updateProgress();
                        });


                    }
                });
            });

            $('#skip').on('click', function() {
                var curProfileImg;
                $('.board-picker-sheet').removeClass('_active');

                $body.removeClass('_sheet-is-on');
                $toast.addClass('_rounded');
                $('.toast-text span').html('Organize later');
                curProfileImg = $('.avatar-wrap').find('img').attr('src');

                $('.toast-img-wrapper').html('<img src="' + curProfileImg + '" alt>');

                // unhide idea pin on profile

                if ($body.hasClass('_stream-is-on')) {


                    destroyUPGrid();

                    curIdeaPinID = $('body').attr('data-stream-id');
                    // alert('Running and idea pin ID  is' + curIdeaPinID);
                    $('#uop-idea-pin-' + curIdeaPinID).removeClass('_hidden');
                    $('#uop-idea-pin-' + curIdeaPinID).prependTo('#unorganized-pins-wrap');
                    showToast();
                    setTimeout(function() {
                        appreciation.play()


                        tlThanks.to($thanks, thanksDur, {
                            ease: Back.easeOut,
                            bottom: '172px',
                            opacity: 1
                        }, "+=.5");

                        tlThanks.to($thanks, thanksDur, {
                            ease: Power2.easeOut,
                            bottom: '172px',
                            opacity: 0
                        }, "+=2.5");

                        tlThanks.set($thanks, {
                            clearProps: "all"
                        });


                    }, 600);
                    activeVid.get(0).play();
                    updateProgress();
                }

            });
        };



        function navigativeActiveVid() {
            $('.next-btn').on('click', function() {

                // console.log('next');
                // pause video
                activeVid.get(0).pause();
                killInterval();

                // vid
                activeVid = activeVid.parent().next().find('video');
                activeVid.get(0).currentTime = 0;

                // update page active state
                $('.page').removeClass('_active');
                activeVid.parent().addClass('_active');

                // fill in the current progress bar
                $progressBar.css('width', '100%');

                // translate to the next page
                pageIndex = $('.page._active').index();
                $('.page._active').parent().css('transform', 'translateX(' + -375 * (pageIndex) + 'px)');

                playVideoOnActivePage();

            });

            $('.prev-btn').on('click', function() {
                // console.log('prev');
                // pause video
                activeVid.get(0).pause();
                killInterval();
                activeVid.unbind();

                // vid
                activeVid = activeVid.parent().prev().find('video');
                // console.log(activeVid);
                activeVid.get(0).currentTime = 0;

                // update page active state
                $('.page').removeClass('_active');
                activeVid.parent().addClass('_active');

                // fill in the current progress bar
                $progressBar.css('width', '0%');

                // translate to the next page
                pageIndex = $('.page._active').index();
                $('.page._active').parent().css('transform', 'translateX(' + -375 * (pageIndex) + 'px)');

                playVideoOnActivePage();
            });
        }

        function playPauseActiveVideo() {

            var tlPause = new TimelineLite({});
            var tlPlay = new TimelineLite({});
            var $pause = $('.player-control.pause');
            var $play = $('.player-control.play');
            var dur = .2;

            var timer = 7000;



            $('.play-pause-btn').on('click', function() {

                if (timer) {
                    // console.log('in timer');
                    clearTimeout(timer);
                }

                timer = setTimeout(playPause, 250);
            });

            function playPause() {
                activeVid = $('.idea-pin._active').find('.page._active').find('video');
                killInterval();

                if (activeVid.get(0).currentTime > 0 && !activeVid.get(0).ended && !activeVid.get(0).paused && activeVid.get(0).readyState > 2) {

                    // video is playing


                    tlPause.to($pause, dur, {
                        ease: Power4.easeOut,
                        scale: 1,
                        opacity: 1
                    });
                    tlPause.to($pause, dur * 1, {
                        ease: Power2.easeOut,
                        scale: 1,
                        opacity: 0
                    }, "+=.3");
                    tlPause.set($pause, {
                        clearProps: "all"
                    });

                    console.log('pause video');
                    activeVid.get(0).pause();
                } else {


                    tlPlay.to($play, dur, {
                        ease: Power4.easeOut,
                        scale: 1,
                        opacity: 1
                    });
                    tlPlay.to($play, dur * 1, {
                        ease: Power2.easeOut,
                        scale: 1,
                        opacity: 0
                    }, "+=.3");
                    tlPlay.set($play, {
                        clearProps: "all"
                    });

                    // console.log('play');
                    activeVid.get(0).play();
                    updateProgress();
                }
            }
        }

        function updateProgress() {
            // set a new progress bar
            $progressBar = $('.idea-pin._active .pages-progress .progress-wrap:eq( ' + $('.page._active').index() + ' ) .progress');

            // clear current
            clearInterval(interval);
            interval = null;

            interval = setInterval(function() {
                progress = Math.ceil(activeVid.get(0).currentTime / activeVid.get(0).duration * 100);
                $progressBar.css('width', progress + '%');

                // console.log('progress is running');
            }, 100);
        }

        function killInterval() {
            clearInterval(interval);
            interval = null;
        }

    }

    function starGrid() {

        var $grid = $('.masonry-layout').isotope({
            itemSelector: '.item',
            masonry: {
                columnWidth: 176,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        var isotope = $grid.data('isotope');

        function renderGrid() {
            $grid.imagesLoaded().done(function(instance, image) {
                // var $item = $(image.img);
                $grid.isotope('layout');
                $('.masonry-layout .item').addClass('_loaded');
            });
        }

        function updateCount(string) {
            $('.pin-count').text(isotope.filteredItems.length + ' Pins' + string);
            if (isotope.filteredItems.length == 0) {
                $('.empty-state').removeClass('_hidden');
            } else {
                $('.empty-state').addClass('_hidden');
            }
        }
        renderGrid();


        $('.filter-sheet li').on('click', function() {
            $('.filter-sheet li').removeClass('_active');
            $('body').removeClass('_sheet-is-on');
            $(this).addClass('_active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });

            if ($(this).attr('data-filter') == '*') {

                $('.show-sheet').removeClass('_active');
                $('.show-sheet').text('Filter');
                updateCount('');
            }

            if ($(this).attr('data-filter') == '.star') {
                $('.show-sheet').addClass('_active').text('Filter(1)');
                $('.empty-state').html("You don't have any star Pins yet.<br>Tap ★ to mark your favorite ideas.")
                updateCount(' starred');
            }

            if ($(this).attr('data-filter') == '.with-notes') {
                $('.show-sheet').addClass('_active').text('Filter(1)');
                $('.empty-state').text("You don't have any Pins with notes yet.")
                updateCount(' with notes');

            }
        });
    }



    return {
        states: states,
        trunk8: trunk8,
        starGrid: starGrid,
        backButton: backButton,
        likeThisGrid: likeThisGrid,
        hearting: hearting,
        showToast: showToast,
        streams: streams,
        profileScroll: profileScroll,
        unorganizedPins: unorganizedPins,
        floatingActionBar: floatingActionBar
    }
})();