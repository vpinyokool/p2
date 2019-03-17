//
// global
var Global = (function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // return true or false

    var $body = $('body');
    var $nav = $('nav');
    var $emailWrap = $('.email-me-wrapper');
    var $workList = $('section.work-list');
    var sPath = window.location.pathname;

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

    function pageLoad() {


        // site loading
        var width = 100,
            duration,
            perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


        // Percentage Increment Animation
        if (sPath.indexOf('projects') <= -1) {
            $body.addClass('_loaded');
            $('.content-container.home').addClass('_loaded');
            animateIntroHeadline(100);
        }
        $body.addClass('_loaded');
        $('.content-container.home').addClass('_loaded');

        function animateValue(id, start, end, duration) {

            var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current + "%");
                //obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);


            //////////////////
            // loader
            //////////////////

            if (sessionStorage.getItem('beenHere')) {
                animateIntroHeadline(100);
            } else {
                animateIntroHeadline(duration);
            }

        }
    }

    function fastClick() {
        FastClick.attach(document.body);
    }

    function animateIntroHeadline(duration) {

        function removeLoader() {
            var $globalLoader = $('#global-loader');
            var $percent = $('#percent');
            var pageDur = 1200;
            var introDur = 700;

            TweenMax.to($globalLoader, .6, {
                height: 3,
                delay: (duration * 0.001) + 0.4,
                ease: Power4.easeOut
            });

            TweenMax.to($percent, .6, {
                y: 100,
                delay: (duration * 0.001) + 0.4,
                ease: Power4.easeOut
            });
        }



        // sessionStorage.setItem('beenHere', 'yes');


        // animating text
        // var workTitle = $('section.work');
        var headline = $('.intro h2');
        var introDur = 700;
        var offset = .1;
        var timeOutOffset = parseInt(duration + (offset * 2000) + (introDur * 2));


        // splitting text

        var mySplitText = new SplitText(headline, {
            type: 'words'
        });



        splitTextTimeline = new TimelineLite();

        splitTextTimeline.staggerFrom(mySplitText.words, (introDur / 1000), {
            opacity: 0,
            y: 300,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Power4.easeOut
        }, 0.01)

        .from($workList, .8, {
            opacity: 0,
            y: 40,
            ease: Power4.easeOut
        })

        .from($emailWrap, .8, {
            opacity: 0,
            y: 40,
            ease: Power4.easeOut
        }, '-=0.8', allDone());

        // running after function
        function allDone() {
            setTimeout(function() {
                mySplitText.revert();
                afterIntro();
            }, timeOutOffset);
        }
    }

    function afterIntro() {
        homeLoaded();
        bodyMovin();
        positionProxy();
        linkReady();

        var brands = $('.brands-proxy');
        var skills = $('.skills-proxy');
        var brandsArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
        var skillsArry = ['Visual Design.', 'UX.', 'Motion Design.', 'Prototyping.', 'Front-End Dev.', 'Photography.', 'Illustrations.', '3D Modeling.'];
        var i = 0;
        var j = 0;
        var brandInterval;
        var skillInterval;
        var dur = 230;


        if (iOS) {

            // is iOS


            // remove out icon on iOS
            $('#arrow-out').css('display', 'none');

            // brands
            brands.on('touchstart', function() {
                brandInterval = setInterval(loopBrandText, dur);
                $body.addClass('_inverse');
            });

            brands.on('touchend', function() {
                clearInterval(brandInterval);
                $('.brands').text('brands');
                $body.removeClass('_inverse');
            });

            // skills

            skills.on('touchstart', function() {

                skillInterval = setInterval(loopSkillText, dur);
                $body.addClass('_inverse');
            });

            skills.on('touchend', function() {
                clearInterval(skillInterval);
                $('.skills').text('diverse skillset.');
                $body.removeClass('_inverse');
            });

        } else {

            // not iOS //
            // brands
            brands.hover(function() {
                brandInterval = setInterval(loopBrandText, dur);
                $body.addClass('_inverse');

            }, function() {
                clearInterval(brandInterval);
                $('.brands').text('brands');
                $body.removeClass('_inverse');
            });

            // skills
            skills.hover(function() {

                skillInterval = setInterval(loopSkillText, dur);
                $body.addClass('_inverse');

            }, function() {
                clearInterval(skillInterval);
                $('.skills').text('broad skillsets.');
                $body.removeClass('_inverse');

            });
        }


        function loopBrandText(obj) {
            i = i == brandsArry.length ? 0 : i;
            $('.brands').html(brandsArry[i] + '<span class="brands-proxy"></span>');
            i++;
        };

        function loopSkillText(obj) {
            j = j == skillsArry.length ? 0 : j;
            $('.skills').html(skillsArry[j] + '<span class="skills-proxy"></span>');
            j++;
        };

        ////////////////////////////////////////////////////////////////////////////////////
        function bodyMovin() {
            var animOne = lottie.loadAnimation({
                container: document.getElementById('arrow-out'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                speed: .5,
                path: 'assets/animation/shared/arrow-out.json'
            });




            $('.ele-url').hover(function() {

                animOne.play();

            }, function() {
                animOne.goToAndStop(0, true);

            });

        };
        ////////////////////////////////////////////////////////////////////////////////////
        function positionProxy() {
            var sPath = window.location.pathname;


            var brandProxy;
            var brands;
            var skillProxy;
            var skills;
            var intro;

            intro = $('.intro');

            brandProxy = $('.brands-proxy');
            brands = $('.brands');

            skillProxy = $('.skills-proxy');
            skills = $('.skills');

            posUpdate();

            // $(window).on('resize', $.debounce(150, true, posUpdate));

            $(window).on('resize', posUpdate);

            function posUpdate() {
                brandProxy.css({
                    width: brands.width(),
                    height: brands.height(),
                    top: brands.offset().top,
                    left: brands.offset().left - intro.offset().left
                });

                skillProxy.css({
                    width: skills.width(),
                    height: skills.height(),
                    top: skills.offset().top,
                    left: skills.offset().left - intro.offset().left
                });
            }
        };

        function linkReady() {
            var $eleURL = $('.ele-url')
            $eleURL.addClass('_ready');
            $('.content-container.home').addClass('_fully-loaded');
        };
    }

    function homeLoaded() {
        $('.content-container.home').addClass('_loaded');
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

    function isOnDetail() {
        var $projectSummary = $('.project-summary');
        var $allDots = $('.detail-dot-wrapper a');
        var $dotMarcus = $('.dot-marcus');
        var $dotTeva = $('.dot-teva');
        var $dotFandango = $('.dot-fandango');
        var $dotPast = $('.dot-past');
        var $dotAlmost = $('.dot-almost');

        $body.addClass('_is-on-detail');
        sPath = window.location.pathname;


        //////////////////////////////
        // run globally
        //////////////////////////////

        projectHeader();
        sectionReveal();
        headlineAnimation();
        heroLoaded();
        // heroScroll();

        //////////////////////////////
        // run on specific project
        //////////////////////////////


        // on project one
        if (sPath.indexOf('marcus') > -1) {
            $allDots.removeClass('_active');
            $dotMarcus.addClass('_active');

            // marcusAnimation();

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });
        }

        // on project teva
        if (sPath.indexOf('teva') > -1) {
            $allDots.removeClass('_active');
            $dotTeva.addClass('_active');

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });
        }

            // on project fandango
        if (sPath.indexOf('fandango') > -1) {
            $allDots.removeClass('_active');
            $dotFandango.addClass('_active');

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });

            // fandangoQuotes();
        }

        // on past
        if (sPath.indexOf('past') > -1) {
            $allDots.removeClass('_active');
            $dotPast.addClass('_active');
            imgLoaded();
        }

        //         // on almost
        // if (sPath.indexOf('almost') > -1) {
        //     $allDots.removeClass('_active');
        //     $dotAlmost.addClass('_active');
        //     imgLoaded();
        // }



        function imgLoaded() {

            var $container = $('#gallery-wrapper');
            // use ImagesLoaded
            $container.imagesLoaded().progress(onProgress);
            // reset progress counter
            imageCount = $container.find('img').length;

            // triggered after each item is loaded
            function onProgress(imgLoad, image) {
                // change class if the image is loaded or broken
                var $item = $(image.img).parent().parent();
                $item.removeClass('is-loading');
                if (!image.isLoaded) {
                    $item.addClass('is-broken');
                }
            }
        }

        function heroLoaded() {
            // var $hero = $('.hero-content-wrapper');
            var $projectContent = $('.detail-content');

            // var heroHeight = $hero.height();
            // var paddingTop  = $(window).height() - $hero.height();

            $projectContent.addClass('_loaded');
            // TweenMax.set($hero, {
            //     height: '100vh'
            // });

            // TweenMax.to($hero, .6, {
            //     height: heroHeight,
            //     delay: 1,
            //     ease: Power4.easeOut
            // });
        }

        function heroScroll() {
            var current;
            var triggerPoint;
            var stickTop;
            var heroOpacity;
            var ratio = 550;

            var $projectContent = $('.detail-content');
            var $hero = $('.hero-content-wrapper');


            getTriggerPoint();
            getHeroHeight();
            updateHeroHeight();
            // $(window).on('scroll', onScroll);
            $(window).on('resize', $.debounce(150, true, onResize));


            function onResize() {
                getTriggerPoint();
                getHeroHeight();
                updateHeroHeight();
            }

            function getHeroHeight() {
                return $hero.height();
            }

            function getTriggerPoint() {
                return $hero.height() - $(window).height();
            }

            function onScroll() {
                requestAnimationFrame(scrollUpdates);
            }

            function updateHeroHeight() {

                $projectContent.css('padding-top', getHeroHeight() + 'px');
            }

            function getScrollPos() {
                return $(window).scrollTop();
            }

            function scrollUpdates() {
                current = getScrollPos();
                triggerPoint = getTriggerPoint();
                stickTop = $(window).height() - getHeroHeight();
                heroOpacity = (current - triggerPoint) / ratio;

                if (current >= triggerPoint) {
                    $hero.addClass('_is-sticky');
                    $hero.css('top', stickTop + 'px');
                    $hero.find('.hero-col').css('opacity', 1 - heroOpacity);
                } else {
                    $hero.removeClass('_is-sticky');
                    $hero.css('top', 'auto');
                }
            }
        }

        function headlineAnimation() {

            var $projectHeadline = $('.hero-col h1');
            var GSDur = .8;

            // create timeline
            var oneTL = new TimelineLite();

            // split the text
            var projectSplitText = new SplitText($projectHeadline, {
                type: 'words'
            });


            oneTL.staggerFrom(projectSplitText.words, GSDur, {
                opacity: 0,
                y: 300,
                rotationX: -40,
                rotationZ: 20,
                transformOrigin: '0% 100% -60',
                ease: Power4.easeOut
            }, 0.01)

            .to($('.hero-col'), GSDur, {
                y: 0,
                opacity: 1,
                ease: Power4.easeOut
            }, .1);

        }

        function fandangoQuotes() {
            var i = 0;
            var quoteInterval;
            var questionInterval;
            var creditInterval;
            var dur = 500;
            var fandangoQuestionArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
            var fandangoQuoteArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Unless I know exactly what movie I want to see, this app isn’t too useful'];
            var fandangoCreditArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];

            // questionInterval = setInterval(loopFandangoQuestion, dur);
            quoteInterval = setInterval(loopFandangoQuote, dur);
            // creditInterval = setInterval(loopFandangoCredit, dur);

            function loopFandangoQuote(obj) {

                if ( i == fandangoQuoteArry.length) {
                    i = 0;

                } else {
                    $('h2.quote-title').html(fandangoQuoteArry[i]);
                    i++;

                }
                console.log(fandangoQuoteArry.length);
                console.log(i);
            };
        }

        function sectionReveal() {

            console.log('ran');
            // Changing the defaults
            window.psr = ScrollReveal({
                reset: false
            });

            // Customizing a reveal set
            psr.reveal('.detail-content div.container', {
                duration: 650,
                distance: '200px',
                viewFactor: 0.05,
                opacity: 1,
                easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                scale: 1
            });
        }

        function marcusAnimation() {
            var animOne = lottie.loadAnimation({
                container: document.getElementById('backpack-wire'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/backpack-wire.json'
            });

            var animTwo = lottie.loadAnimation({
                container: document.getElementById('input'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/input.json'
            });

            var animThree = lottie.loadAnimation({
                container: document.getElementById('input-mobile'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/input-mobile.json'
            });
        }

    }

    return {
        pageLoad: pageLoad,
        reveal: reveal,
        isOnDetail: isOnDetail,
        afterIntro: afterIntro,
        fastClick: fastClick,
        headroom: headroom
    }
})();