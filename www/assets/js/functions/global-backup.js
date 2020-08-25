//
// global
var Global = (function() {

    var body = $('body');

    function pageLoad() {

        var globalLoader = $('#global-loader');
        var mods = $('.title');
        var pageDur = 1200;
        var introDur = 700;

        $(window).load(function() {
            TweenMax.to(globalLoader, pageDur * 0.001, {
                opacity: '0',
                delay: .1,
                ease: Power4.easeOut
            });

            TweenMax.staggerFrom(mods, pageDur * 0.001, {
                y: '+= 100',
                ease: Power4.easeOut
            }, .1);

            TweenMax.set(globalLoader, {
                pointerEvents: 'none',
            });

        });

        var width = 100,
            duration,
            perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


        // Percentage Increment Animation
        var PercentageID = $('#percent'),
            start = 0,
            end = 100,
            durataion = time;
        animateValue(PercentageID, start, end, durataion);

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


            console.log(duration);
            animateIntroHeadline(duration);
        }
    }

    function animateIntroHeadline(duration) {

        // animating text
        var workTitle = $('section.work');
        var headline = $('.gist h2');
        var percent = $('#percent');
        var introDur = 700;
        var offset = .4;
        var timeOutOffset = parseInt(duration + (offset * 2000) + (introDur * 2));

        // splitting text

        var splitTextOne = new SplitText($('.gist p'), {
            type: 'words'
        });
        var mySplitText = new SplitText(headline, {
            type: 'lines'
        });


        TweenLite.from(workTitle, (introDur / 1000), {
            opacity: 0,
            y: 100,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Expo.easeOut
        });

        TweenLite.to(percent, (introDur / 1000), {
            opacity: 0,
            y: -100,
            delay: (duration / 1000) + (offset * 2),
            ease: Expo.easeOut
        });


        TweenMax.staggerFrom(splitTextOne.words, (introDur / 1000), {
            opacity: 0,
            y: 30,
            delay: (duration / 1000) + (offset * 3) + (introDur / 1000),
            ease: Power4.easeOut
        }, 0.02);


        splitTextTimeline = new TimelineLite();

        splitTextTimeline.staggerFrom(mySplitText.lines, (introDur / 1000), {
            opacity: 0,
            y: 300,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Expo.easeOut
        }, 0.01, allDone());

        // running after function
        function allDone() {
            setTimeout(function() {
                mySplitText.revert();
                afterIntro();
            }, timeOutOffset);
        }
    }

    function afterIntro() {
        bodyMovin();
        positionProxy();
        emailHover();
        reposition();

        var brands = $('.brands-proxy');
        var skills = $('#skills');
        var brandsArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
        var skillsArry = ['Visual Design.', 'UX.', 'Motion Design.', 'Prototyping.', 'Front-End Dev.', 'Photography.', 'Illustrations.', '3D Modeling.'];
        var i = 0;
        var j = 0;
        var brandInterval;
        var skillInterval;
        var dur = 220;

        brands.hover(function() {
            brandInterval = setInterval(loopBrandText, dur);
            $('body').addClass('_inverse');

        }, function() {
            clearInterval(brandInterval);
            $('#brands').text('brands');
            $('body').removeClass('_inverse');

        });


        skills.hover(function() {

            skillInterval = setInterval(loopSkillText, dur);
            $('body').addClass('_inverse');

        }, function() {
            clearInterval(skillInterval);
            $(this).text('skillsets.');
            $('body').removeClass('_inverse');

        });

        function loopBrandText(obj) {
            i = i == brandsArry.length ? 0 : i;
            $('#brands').html(brandsArry[i] + '<span class="brands-proxy"></span>');
            i++;
        };

        function loopSkillText(obj) {
            j = j == skillsArry.length ? 0 : j;
            skills.text('skillsets like ' + skillsArry[j]);
            j++;
        };


        function bodyMovin() {
            var anim = lottie.loadAnimation({
                container: document.getElementById('arrow-out'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                speed: .5,
                path: 'assets/lottie/arrow-out.json'
            });


            $('.gist h2 a').hover(function() {

                anim.play();


            }, function() {
                anim.goToAndStop(0, true);

            });
        };

        function positionProxy() {
            var brandProxy = $('.brands-proxy');
            var brands = $('#brands');

            brandProxy.css({
                width: brands.width(),
                height: brands.height(),
                top: brands.offset().top,
                left: brands.offset().left - $('.gist').offset().left
            });
        };

        function emailHover() {
            var $email = $('#email'),
                emailSplitText = new SplitText($email, {
                    type: 'chars'
                }),
                emailTlIn = new TimelineLite();
            emailTlOut = new TimelineLite();


            emailTlIn.staggerTo(emailSplitText.chars, 0.01, {
                    color: 'black',
                    ease: Expo.easeOut
                }, 0)
                .staggerTo(emailSplitText.chars, 0.5, {
                    color: 'red',
                    ease: Expo.easeOut
                }, 0.01)
                .staggerTo(emailSplitText.chars, 0.1, {
                    color: 'white',
                    ease: Expo.easeOut
                }, 0.01, '-=0.3');

            emailTlOut.staggerTo(emailSplitText.chars, 0.5, {
                color: 'black',
                ease: Expo.easeOut
            }, 0.01);

            emailTlIn.stop();
            emailTlOut.stop();

            $('.gist p').on('mouseenter', function() {
                emailTlIn.restart().play();
            });

            $('.gist p').on('mouseleave', function() {
                emailTlOut.play().restart();
            });
        };

        function reposition() {
            var gist = $('.gist');
            var work = $('section.work');
            gist.addClass('_loaded');
            work.css('padding-top', 160 + gist.outerHeight() + 'px');
        }
    }

    function reveal() {
        // Changing the defaults
        window.sr = ScrollReveal({
            reset: false
        });

        // Customizing a reveal set
        sr.reveal('li, section.section-title', {
            duration: 650,
            scale: .8
        });
    }

    return {
        pageLoad: pageLoad,
        reveal: reveal
    }
})();