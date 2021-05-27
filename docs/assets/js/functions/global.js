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

    function reactionAnimation() {
        var sPath = window.location.pathname;
        var pathPrefix = '../assets/animation/';

        if (sPath == "/tag-three.html" || sPath == "/boards-2020/tag-three.html") {
            pathPrefix = 'assets/animation/';
            console.log('on-tag-three-page. path is ' + pathPrefix);
        } else {
            console.log('NOT on-tag-three-page. on b page path is ' + pathPrefix + 'wanna-try.json');
        }


        var pinCount = 15;
        var wannaTry = [];
        var triedIt = [];
        var loveIt = [];
        var maybe = [];
        for (var i = 0; i < pinCount; i++) {

            wannaTry[i + 1] = lottie.loadAnimation({
                container: document.getElementById('wanna-try-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: pathPrefix + 'wanna-try.json'
            });


            triedIt[i + 1] = lottie.loadAnimation({
                container: document.getElementById('tried-it-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: pathPrefix + 'tried-it.json'
            });

            loveIt[i + 1] = lottie.loadAnimation({
                container: document.getElementById('love-it-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: pathPrefix + 'love-it.json'
            });

            maybe[i + 1] = lottie.loadAnimation({
                container: document.getElementById('maybe-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: pathPrefix + 'maybe.json'
            });
        }

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var obj;

        function deselectReaction(ele, value) {
            if (ele.parent().parent().find('._active').length >= 1) {
                var reactionData = ele.parent().parent().find('._active').data('reaction');
                if (reactionData == 'triedIt') {
                    obj = triedIt;
                }
                if (reactionData == 'loveIt') {
                    obj = loveIt;
                }
                if (reactionData == 'maybe') {
                    obj = maybe;
                }
                if (reactionData == 'wannaTry') {
                    obj = wannaTry;
                }
                // console.log(reactionData);
                obj[value].playSegments([48, 62], true);
            }
        }
        $.each(arr, function(index, value) {
            $('#wanna-try-' + value).on('click', function() {
                deselectReaction($(this), value);
                wannaTry[value].playSegments([0, 47], true);
            });

            $('#tried-it-' + value).on('click', function() {
                deselectReaction($(this), value);
                triedIt[value].playSegments([0, 47], true);
            });

            $('#love-it-' + value).on('click', function() {
                deselectReaction($(this), value);
                loveIt[value].playSegments([0, 47], true);
            });

            $('#maybe-' + value).on('click', function() {
                deselectReaction($(this), value);
                maybe[value].playSegments([0, 47], true);
            });
        });
    }

    function reactionGrid() {
        // init Isotope
        var $grid = $('.masonry-layout').isotope({
            itemSelector: '.item',
            stagger: 30,
            masonry: {
                columnWidth: 176,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        function renderGrid() {
            $grid.imagesLoaded().done(function(instance, image) {
                // var $item = $(image.img);
                $grid.isotope('layout');
                $('.masonry-layout .item').addClass('_loaded');
                // $item.css({
                //     "opacity": "1",
                //     "transition-delay": Math.random() + "s"
                // });
            });
        }

        renderGrid();

        var isotope = $grid.data('isotope');
        var currentReactionID;
        var currentPinItem;

        function filtering(el, name) {
            // update state
            $('.reaction-btn').removeClass('_active');
            el.addClass('_active');

            // update masonry
            $grid.isotope('layout');

            // get id
            currentReactionID = el.parent().parent().data('closeup-id');
            currentPinItem = $('.pin-id-' + currentReactionID);
            // add state to grid item
            currentPinItem.removeClass('love-it wanna-try maybe tried-it');
            currentPinItem.addClass(name);
            currentPinItem.find('.reaction-marker').addClass('_hidden');
            currentPinItem.find('span.' + name).removeClass('_hidden');
        }

        $('.wanna-try-btn').on('click', function() {
            filtering($(this), 'wanna-try');
        });

        //
        $('.love-it-btn').on('click', function() {
            filtering($(this), 'love-it');
        });
        //
        $('.tried-it-btn').on('click', function() {
            filtering($(this), 'tried-it');
        });
        //
        $('.maybe-btn').on('click', function() {
            filtering($(this), 'maybe');
        });


        ////////////

        // bind filter button click
        var filterLists = $('.filter-sheet li');
        var pinCountString;
        var emptyStateString;
        filterLists.on('click', function() {
            filterLists.removeClass('_active');
            $(this).addClass('_active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            if ($(this).attr('data-filter') == '*') {
                $('.show-sheet').removeClass('_active');
                $('.show-sheet').text('Filter');
            } else {
                $('.show-sheet').addClass('_active');
                $('.show-sheet').text('Filter(1)');
            }
            updateReactionPinCount();
            $('body').removeClass('_sheet-is-on');

            if ($(this).attr('data-filter') == '*') {
                pinCountString = '';
                emptyStateString = '';
            }
            if ($(this).attr('data-filter') == '.wanna-try') {
                pinCountString = ' with wanna try';
                emptyStateString = ' with wanna try';
            }
            if ($(this).attr('data-filter') == '.tried-it') {
                pinCountString = ' with Tried it';
                emptyStateString = ' with Tried it';
            }
            if ($(this).attr('data-filter') == '.love-it') {
                pinCountString = ' with Love it';
                emptyStateString = ' with Love it';
            }
            if ($(this).attr('data-filter') == '.maybe') {
                pinCountString = ' with maybe';
                emptyStateString = ' with maybe';
            }

            if ($(this).attr('data-filter') == '.with-notes') {
                pinCountString = ' with notes';
                emptyStateString = ' with notes';
            }

            $('span.reaction').text(pinCountString);
            $('span.empty-reaction').text(emptyStateString);
        });

        function updateReactionPinCount() {
            $('.pin-count span').text(isotope.filteredItems.length + ' ');
            if (isotope.filteredItems.length == 0) {
                $('.empty-state').removeClass('_hidden');
            } else {
                $('.empty-state').addClass('_hidden');
            }
        }
    }

    function autoTags() {
        // init Isotope
        var $grid = $('.masonry-layout').isotope({
            itemSelector: '.item',
            stagger: 30,
            masonry: {
                columnWidth: 176,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        $grid.imagesLoaded().done(function(instance, image) {
            // var $item = $(image.img);
            $grid.isotope('layout');
            $('.masonry-layout .item').addClass('_loaded');
            // $item.css({
            //     "opacity": "1",
            //     "transition-delay": Math.random() + "s"
            // });
        });
        // filter functions
        var filterFns = {

            starsGreaterThan4: function() {
                var number = $(this).find('.number').text();
                $('.number-wrap').removeClass('_hidden');
                return parseInt(number) > 3;
            },

            lessThan30: function() {
                var time = $(this).find('.time').text();
                $('.time-wrap').removeClass('_hidden');
                return parseInt(time) < 30;

            },

            serve2: function() {
                var serve = $(this).find('.serve').text();
                $('.serve-wrap').removeClass('_hidden');
                return parseInt(serve) == 2;
            }
        };
        // bind filter button click
        $('.auto-generate-tags-bar .button-sml').on('click', function() {
            $('.time-wrap').addClass('_hidden');
            $('.serve-wrap').addClass('_hidden');
            $('.number-wrap').addClass('_hidden');
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.auto-generate-tags-bar .button-sml').on('click', function() {
            $('.button-sml').removeClass('_is-checked');
            $(this).addClass('_is-checked');
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



    function bodyMovin() {
        var sPath = window.location.pathname;
        var path = '../assets/animation/star.json';

        if (sPath == "/tag-one.html" || sPath == "/boards-2020/tag-one.html") {
            path = 'assets/animation/star.json';
            console.log('on-tag-one-page. path is ' + path);
        } else {
            console.log('NOT on-tag-one-page. on tag a page. path is ' + path);
        }


        //
        var pinCount = 15;
        var anim = [];
        for (var i = 0; i < pinCount; i++) {
            anim[i + 1] = lottie.loadAnimation({
                container: document.getElementById('star-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: path
            });
        }

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        $.each(arr, function(index, value) {
            $('.star-' + value).on('click', function() {
                if ($('.star-' + value).hasClass('_active')) {
                    $('.star-' + value).removeClass('_active');
                    $('.pin-id-' + value).removeClass('star');
                    anim[value].goToAndStop(0, true);
                } else {
                    $('.star-' + value).addClass('_active');
                    $('.pin-id-' + value).addClass('star');
                    anim[value].play();
                }
            });
        });



    };

    function boardPicker() {
        // $('.bubbles').on('click', function() {
        //     $('.filter-sheet').addClass('_active');
        //     $body.addClass('_sheet-is-on');
        // });
    }

    function hearting() {
        var sPath = window.location.pathname;
        var path = '../assets/animation/heart.json';

        if ( sPath == "/p2/" || sPath == "/p2.html" ) {
            path = 'assets/animation/heart.json';
        } else {
            console.log('not on index');
        }


        //
        var pinCount = 15;
        var anim = [];
        var $toast = $('.toast');
        for (var i = 0; i < pinCount; i++) {
            anim[i + 1] = lottie.loadAnimation({
                container: document.getElementById('heart-' + [i + 1]),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: path
            });
        }

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        $.each(arr, function(index, value) {
            $('.heart-' + value).on('click', function() {
                if ($('.heart-' + value).hasClass('_active')) {
                    $('.heart-' + value).removeClass('_active');
                    $('.pin-id-' + value).removeClass('heart');
                    anim[value].playSegments([60, 119], true);
                    // anim[value].goToAndStop(0, true);


                } else {
                    $('.heart-' + value).addClass('_active');
                    $('.pin-id-' + value).addClass('heart');
                    anim[value].playSegments([0, 59], true);

                    // pull up board picker
                    setTimeout(function() {
                        $('.board-picker-sheet').addClass('_active');
                        $body.addClass('_sheet-is-on');
                    }, 1500);

                    $('.board-list.profile').on('click', function() {
                        $('.board-picker-sheet').removeClass('_active');
                        $body.removeClass('_sheet-is-on');
                        showToast()
                    });

                    $('.icon-button.close').on('click', function() {
                        $('.board-picker-sheet').removeClass('_active');
                        $('.heart-' + value).removeClass('_active');
                        $('.pin-id-' + value).removeClass('heart');
                        $body.removeClass('_sheet-is-on');
                        setTimeout(function() {
                            anim[value].playSegments([60, 119], true);
                        }, 600);
                    });

                }


                function showToast() {
                    console.log('ran');
                    var tl = new TimelineLite({});

                    tl.to($toast, .45, {y:60, opacity: 1 });
                    tl.to($toast, .45, {y:60, opacity: 0 }, "+=2.0");
                    tl.set($toast, {y:0, opacity: 1});
                    tl.set($toast, {clearProps:"all"});
                }
            });
        });



    };

    function optionalNote() {

        var $grid = $('.masonry-layout').isotope({
            itemSelector: '.item',
            stagger: 30,
            masonry: {
                columnWidth: 176,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });

        var input = $('.note-composer-input');
        var submit = $('.button-confirm-note');
        var deleteNote = $('.button-delete-note');
        var editNote = $('.reaction-card-wrapper .button-sml');
        var keyboardTrigger = $('.kb-trigger');
        var currentCloseupID;
        var curPrivateNote;
        var curCloseupPrivateNote;

        function deleteNoteButton() {
            if (input.val() != '') {
                deleteNote.removeClass('_hidden');
            } else {
                deleteNote.addClass('_hidden');
            }
        }

        function deletePrivateNote(id, value) {

            // update the grid
            $('.pin-id-' + id + ' .pin-note').text(value);
            $('.pin-id-' + id + ' .pin-note').addClass('_hidden');

            // remove .with-notes class to pin
            $('.pin-id-' + id).removeClass('with-notes');

            // update masonry
            $grid.isotope('layout');

            // show the input
            $('.reaction-card-wrapper.cu-' + id + ' .note-input').removeClass('_hidden');

            // hide edit button
            $('.reaction-card-wrapper.cu-' + id + ' .button-sml').addClass('_hidden');

            // hide the note
            $('.reaction-card-wrapper.cu-' + id + ' .private-note').addClass('_hidden');

            // hide the title (tag a only)
            $('.reaction-card-wrapper.cu-' + id + ' .cu-title').addClass('_hidden');

            // hide note trigger wrap (tag a only)
            $('.reaction-card-wrapper.cu-' + id + ' .note-trigger-wrap').removeClass('_hidden');


        }

        keyboardTrigger.on('click', function() {
            $('body').addClass('_keyboard-is-on');
            input.val('');
            deleteNoteButton();

            setTimeout(function() {
                input.focus();
            }, 450);
        });

        input.on('keyup', function() {
            deleteNoteButton();
        });

        submit.on('click', function() {
            $('body').removeClass('_keyboard-is-on');
            curPrivateNote = input.val();
            currentCloseupID = $('body').data('cu-id');

            // move note to closeup  module
            $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .private-note span').text(curPrivateNote);

            // add data to body
            $('body').data('note-' + currentCloseupID, curPrivateNote);



            // if val isn't empty
            if (curPrivateNote.length > 0) {


                // add note to Pin on grid and show the pin note + run masonry
                $('.pin-id-' + currentCloseupID + ' .pin-note').text(curPrivateNote);
                $('.pin-id-' + currentCloseupID + ' .pin-note').removeClass('_hidden');
                $grid.isotope('layout');

                // add .with-notes class to pin
                $('.pin-id-' + currentCloseupID).addClass('with-notes');

                // show the note
                $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .private-note').removeClass('_hidden');

                // show edit button
                $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .button-sml').removeClass('_hidden');

                // hide the input
                $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .note-input').addClass('_hidden');

                // show the title (tag a only)
                $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .cu-title').removeClass('_hidden');

                // hide note trigger wrap (tag a only)
                $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .note-trigger-wrap').addClass('_hidden');

                // if val us empty close the keyboard
            } else {

                deletePrivateNote(currentCloseupID, curPrivateNote);

            }

        });

        // editing note
        editNote.on('click', function() {
            $('body').addClass('_keyboard-is-on');
            deleteNoteButton();
            var currentCloseupID = $('body').data('cu-id');

            // get note data
            curCloseupPrivateNote = $('body').data('note-' + currentCloseupID);
            // add note to composer
            input.val(curCloseupPrivateNote);
            setTimeout(function() {
                input.focus();
            }, 450);
        });
        // deleting note
        deleteNote.on('click', function() {
            $('body').removeClass('_keyboard-is-on');
            curPrivateNote = input.val();
            currentCloseupID = $('body').data('cu-id');

            // move note to closeup  module
            $('.reaction-card-wrapper.cu-' + currentCloseupID + ' .private-note span').text(curPrivateNote);

            // add data to body
            $('body').data('note-' + currentCloseupID, curPrivateNote);


            deletePrivateNote(currentCloseupID, curPrivateNote);
        });
    }

    function organicTagsGrid() {

        var input = $('.composer input');
        var newTag;
        var trimmedTag;
        $('.new-tag').on('click', function() {
            $('body').addClass('_keyboard-is-on');
            input.val('');
            setTimeout(function() {
                input.focus();
            }, 450);
        });
        $('#confirm-tag').on('click', function() {
            $('body').removeClass('_keyboard-is-on');
            newTag = input.val();
            trimmedTag = newTag.replace(/\s+/g, '').replace(/,/g, '').toLowerCase();
            var newFilterBtn = '<div data-filter=".' + trimmedTag + '" class="button-sml multiple">' + newTag + '</div>';
            var newTagUI = '<div data-tag="' + trimmedTag + '" class="usg-tag button-sml">' + newTag + '</div>';

            // add new ui to filter bar on grid
            $('.usg-tag-bar').append(newFilterBtn);

            // add new ui to label it module on closeup
            $('.new-tag').before(newTagUI);

        });
        var $gridFour = $('.masonry-layout').isotope({
            itemSelector: '.item',
            masonry: {
                columnWidth: 176,
                gutter: 8,
                horizontalOrder: true,
                fitWidth: true,
                originLeft: true
            }
        });
        // layout the grid
        $gridFour.imagesLoaded().done(function(instance, image) {
            // var $item = $(image.img);
            $gridFour.isotope('layout');
            $('.masonry-layout .item').addClass('_loaded');
            // $item.css({
            //     "opacity": "1",
            //     "transition-delay": Math.random() + "s"
            // });
        });
        // click event
        $('.usg-tags-wrap').on('click', '.usg-tag', function() {
            // which tag
            var curTag = $(this).data('tag');

            // which pin
            var curPin = $(this).parent().data('closeup-id');

            // update state
            if ($(this).hasClass('_active')) {
                $(this).removeClass('_active');
                // remove class to Pin
                $('#pin-' + curPin).removeClass(curTag);
            } else {
                $(this).addClass('_active');
                // add class to Pin
                $('#pin-' + curPin).addClass(curTag);
            }




        });
        var isotope = $gridFour.data('isotope');
        // filtering on grid
        $('.usg-tag-bar').on('click', '.button-sml', function() {
            $('.usg-tag-bar .button-sml').removeClass('_is-checked');
            $(this).addClass('_is-checked');
            var filterValue = $(this).attr('data-filter');
            $gridFour.isotope({
                filter: filterValue
            });

            // show empty state if pin count is 0
            if (isotope.filteredItems.length == 0) {
                $('.empty-state').removeClass('_hidden');
            } else {
                $('.empty-state').addClass('_hidden');
            }
        });



    }

    function states() {
        // console.log('ran');
        var $discover = $('.discover');
        var currentCloseupID;
        $discover.on('click', function() {
            $body.addClass('_stream-is-on');
        });

        $('.item').on('click', function() {

            // get id
            currentCloseupID = $(this).data('closeup-id');
            $('body').data('cu-id', currentCloseupID);

            //  switch state
            $('body').addClass('_closeup-is-on');
            $('.closeup.scroll-area').scrollTop(0);
            // show the right module
            $('.main-card-wrapper').addClass('_hidden');
            $('.reaction-card-wrapper').addClass('_hidden');
            $('.cu-' + currentCloseupID).removeClass('_hidden');
            var imgHeight = $('.cu-' + currentCloseupID).find('img').height();
            // console.log(imgHeight);
            // run backbutton function

            updateCloseupState(imgHeight);
        });

        $('.pin-img-wrapper .star').click(function(e) {
            e.stopPropagation();
        });


        $('.icon-button.back').on('click', function() {
            $('body').removeClass('_closeup-is-on');
            $('body').removeClass('_keyboard-is-on');
        });

        $('.icon-button.stream-back').on('click', function() {
            $('body').removeClass('_stream-is-on');
        });

    }

    function trunk8() {
        $('.cu-pin-description .string').trunk8({
            lines: 2
        });
    }

    function modal() {
        // filter sheet
        $('.show-sheet').on('click', function() {
            $('body').addClass('_sheet-is-on');
        });

        $('.close-sheet').on('click', function() {
            $('body').removeClass('_sheet-is-on');
        });

        $('.overlay').on('click', function() {
            $('body').removeClass('_sheet-is-on');
            $('body').removeClass('_keyboard-is-on');
        });


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
                // $item.css({
                //     "opacity": "1",
                //     "transition-delay": Math.random() + "s"
                // });
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
        modal: modal,
        starGrid: starGrid,
        autoTags: autoTags,
        reactionGrid: reactionGrid,
        backButton: backButton,
        bodyMovin: bodyMovin,
        reactionAnimation: reactionAnimation,
        likeThisGrid: likeThisGrid,
        organicTagsGrid: organicTagsGrid,
        optionalNote: optionalNote,
        hearting: hearting,
        boardPicker: boardPicker
    }
})();