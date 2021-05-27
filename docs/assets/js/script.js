//////////////////////////////////////////////////////////////////////////////////////////
// Init function PushState
//////////////////////////////////////////////////////////////////////////////////////////

var call = {

    firstInit: function() {
        // run everywhere
        Global.states();
        Global.backButton();
        Global.modal();
        Global.likeThisGrid();
        Global.trunk8();
        Global.starGrid();
        Global.hearting();
        Global.boardPicker();

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;

        // run on specific page
        if (sPath == '/tag-one.html' || sPath == '/boards-2020/tag-one.html' ) {
            console.log('on-tag-one-page');
            Global.starGrid();
            Global.bodyMovin();
        }


        if (sPath == '/tag-two.html' || sPath == '/boards-2020/tag-two.html' ) {
            console.log('on-tag-two-page');
            Global.autoTags();
        }


        if (sPath == '/tag-three.html' || sPath == '/boards-2020/tag-three.html' ) {
            console.log('on-tag-three-page');
            Global.reactionGrid();
            Global.reactionAnimation();
        }


        if (sPath == '/tag-four.html' || sPath == '/boards-2020/tag-four.html' ) {
            console.log('on-tag-four-page');
            Global.organicTagsGrid();
        }

        if (sPath.indexOf('/tag-a') > 1) {
            console.log('on-tag-a-page');
            Global.starGrid();
            Global.optionalNote();
            Global.bodyMovin();
        }
        if (sPath.indexOf('/tag-b') > 1) {
            console.log('on-tag-b-page');
            Global.reactionGrid();
            Global.reactionAnimation();
            Global.optionalNote();
        }

    }
}

// call this when the page first load when page load
call.firstInit();
call.init();