//////////////////////////////////////////////////////////////////////////////////////////
// Init function PushState
//////////////////////////////////////////////////////////////////////////////////////////

var call = {

    firstInit: function() {
        // run everywhere
        // Global.pageLoad();
        Global.reveal();
        Global.headroom();
        // Global.fastClick();

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;

        // run on specific page




    }
}

// call this when the page first load when page load
call.firstInit();
call.init();

//////////////////////////////////////////////////////////////////////////////////////////
// History PushState
//////////////////////////////////////////////////////////////////////////////////////////

// // set up barba
// document.addEventListener("DOMContentLoaded", function() {

//     // assign some variables
//     var lastElementClicked;
//     var isAnimating = false;
//     var $body = document.querySelector('body');
//     var $html = document.querySelector('html');
//     var $outerWrap = document.querySelector('.outer-wrapper');
//     var sPath;
//     var qEase = Power3.easeOut;

//     var winWidth = $(window).width();

//     $(window).on('resize', function() {
//         winWidth = $(window).width();
//     });

//     var faster = 0.05;
//     var fast = 0.5;
//     var slow = 0.7;
//     var offsetSlow = '-=0.7';
//     var slower = 1;

//     // options
//     Barba.Pjax.Dom.wrapperId = 'content-wrapper';
//     Barba.Pjax.Dom.containerClass = 'content-container';

//     // ---------------- //
//     // VIEWS
//     // ---------------- //
//     var homeView = Barba.BaseView.extend({
//         namespace: 'home',
//         onLeave: function() {
//             // $body.style.overflow = 'hidden';
//         },
//         onLeaveCompleted: function() {
//             // $body.style.overflow = 'initial';
//             call.onDetail();
//         }
//     });

//     var detailView = Barba.BaseView.extend({
//         namespace: 'detail',
//         onEnterCompleted: function() {
//             // The Transition has just finished
//             // can now use functions/events specifically for this page

//             // -- vars
//             var scrollBtn = document.querySelector('.scrolldown');

//             // -- events

//             // call the start function below when we load this page
//             this.start();
//         },
//         onLeave: function() {
//             // A new Transition toward a new page has just started.
//             $body.classList.remove('loaded');
//             $body.classList.remove('_is-on-detail');
//             // $html.style.overflow = 'hidden';
//         },
//         onLeaveCompleted: function() {
//             // $html.style.overflow = 'initial';

//             // call homepage functions on returning home (hover, bodymoving etc;)

//             // run on specific page

//             // get current location
//             sPath = window.location.pathname;

//             if (sPath.indexOf('projects') > -1) {
//                 call.onDetail();

//             } else {
//                 call.backtoHome();



//                 if (typeof(Storage) !== 'undefined') {
//                     // See if there is a scroll pos and go there.
//                     var lastYPos = +localStorage.getItem('scrollYPos');
//                     if (lastYPos) {

//                         window.scrollTo(0, lastYPos);

//                         // fade container home container back in
//                         // setTimeout(function(){
//                         $('.content-container.home').addClass('_loaded');
//                         // }, 3000);


//                     }
//                 }
//             }


//         },
//         start: function() {
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     $body.classList.add('loaded');
//                     isAnimating = false;
//                 }
//             });
//         }
//     });

//     // Don't forget to init the view!
//     homeView.init();
//     detailView.init();
//     Barba.Pjax.init();
//     Barba.Prefetch.init();

//     // listen to the event on click
//     // can now reference lastElementClicked to scroll to where it's been clicked
//     Barba.Dispatcher.on('linkClicked', function(el) {
//         lastElementClicked = el;
//     });

//     // -------------------- //
//     // TRANSITION FUNCTIONS
//     // -------------------- //
//     var revealProject = Barba.BaseTransition.extend({
//         start: function() {
//             isAnimating = true;

//             // set up functions asynchronously
//             Promise
//                 .all([this.newContainerLoading, this.scrollToProject()])
//                 .then(this.showNewPage.bind(this));
//         },

//         // first transition function
//         scrollToProject: function() {
//             var project = $(lastElementClicked).parents('.project');
//             var deferred = Barba.Utils.deferred();


//             deferred.resolve();
//             if (typeof(Storage) !== 'undefined') {
//                 // See if there is a scroll pos and go there.
//                 var lastYPos = +localStorage.getItem('scrollYPos');

//                 localStorage.setItem('scrollYPos', window.scrollY);
//             }

//             return deferred.promise;
//         },

//         // transition to new page / object
//         showNewPage: function() {

//             // FIX
//             // $outerWrap.classList.add('_work-list-is-active');

//             // assign objects that are transitioning
//             var _this = this;
//             // var newImage = _this.newContainer.querySelector('img');
//             // var scrollArrow = _this.newContainer.querySelector('.scrolldown');
//             var newText = _this.newContainer.querySelector('summary');
//             // var newTextLink = _this.newContainer.querySelector('.link');

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();

//                     // once timeline is finished, reset window to top
//                     // to avoid jumping
//                     window.scroll(0, 0);
//                     isAnimating = false;
//                 }
//             });

//             // preset transitional objects
//             TweenLite.set(_this.newContainer, {
//                 position: 'fixed',
//                 visibility: 'visible',
//                 x: $(window).width(),
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 top: 0,
//                 opacity: 1,
//                 zIndex: 20
//             });

//             // start transitions
//             tl.to(_this.oldContainer, slower, {
//                 x: -0.5 * winWidth,
//                 opacity: 0,
//                 ease: qEase
//             })

//             .to(window, faster, {
//                 scrollTo: {
//                     y: 0,
//                     autoKill: false,
//                     ease: qEase
//                 }
//             });

//             tl.to(_this.newContainer, slower, {
//                 x: 0,
//                 ease: qEase
//             }, offsetSlow)

//             .set(_this.newContainer, {
//                 clearProps: 'all'
//             });
//         }
//     });

//     var closeProject = Barba.BaseTransition.extend({
//         start: function() {
//             isAnimating = true;
//             sPath = window.location.pathname;
//             // console.log('close project sPath is ' + sPath);

//             if (sPath.indexOf('projects') > -1) {


//                 Promise
//                 // Promise Async, do this, then this before load --- our animation
//                 // functions in the .all will run first
//                     .all([this.newContainerLoading])
//                     .then(this.hideNewPagetoDetail.bind(this));
//             } else {


//                 Promise
//                 // Promise Async, do this, then this before load --- our animation
//                 // functions in the .all will run first
//                     .all([this.newContainerLoading])
//                     .then(this.hideNewPagetoHome.bind(this));

//             }

//         },
//         scrollTop: function() {
//             var deferred = Barba.Utils.deferred();
//             var obj = {
//                 y: window.pageYOffset
//             };

//             TweenLite.to(obj, slow, {
//                 y: 0,
//                 ease: qEase,
//                 onUpdate: function() {
//                     if (obj.y === 0) {
//                         deferred.resolve();
//                     }
//                     window.scroll(0, obj.y);
//                 },
//                 onComplete: function() {
//                     deferred.resolve();
//                 }
//             });

//             return deferred.promise;
//         },

//         // transition out new page / object
//         hideNewPagetoHome: function() {

//             // assign objects that are transitioning
//             var _this = this;

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();
//                     isAnimating = false;
//                 }
//             });


//             // start transitions
//             tl.to(_this.oldContainer, slower, {
//                 x: winWidth,
//                 ease: qEase
//             });

//         },

//         // transition out new page / object
//         hideNewPagetoDetail: function() {


//             // assign objects that are transitioning
//             var _this = this;
//             var oldText = _this.oldContainer.querySelector('summary');


//             // var oldscrollArrow = _this.oldContainer.querySelector('.scrolldown');
//             // var oldImage = _this.oldContainer.querySelector('img');
//             // var oldTextLink = _this.oldContainer.querySelector('.link');

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();
//                     isAnimating = false;
//                 }
//             });


//             // preset transitional objects
//             TweenLite.set(_this.newContainer, {
//                 position: 'fixed',
//                 visibility: 'visible',
//                 top: 0,
//                 x: winWidth,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 zIndex: 21
//             });

//             // start transitions
//             tl.to(_this.oldContainer, slow, {
//                     x: winWidth * -0.5,
//                     opacity: 0,
//                     ease: qEase
//                 })
//                 .to(window, slow, {
//                     scrollTo: {
//                         y: 0,
//                         autoKill: false,
//                         ease: qEase
//                     }
//                 }, offsetSlow);

//             tl.to(_this.newContainer, slower, {
//                     x: 0,
//                     opacity: 1,
//                     ease: qEase
//                 }, offsetSlow)
//                 .set(_this.newContainer, {
//                     clearProps: 'all'
//                 });


//         }
//     });

//     // -------------------- //
//     // SET TRANSITIONS
//     // -------------------- //
//     Barba.Pjax.getTransition = function() {
//         var transitionPage = revealProject;

//         // if a page has a namespace of 'detail' use the following transition
//         if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
//             transitionPage = closeProject;
//         }

//         // if (Barba.HistoryManager.currentStatus().namespace === 'detail' && Barba.HistoryManager.prevStatus().namespace === 'detail')  {
//         //     alert('works');
//         // }

//         return transitionPage;
//     };
// });