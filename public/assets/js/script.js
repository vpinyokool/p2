//////////////////////////////////////////////////////////////////////////////////////////
// Init function PushState
//////////////////////////////////////////////////////////////////////////////////////////

var call = {

    firstInit: function() {
        // run everywhere
        Global.states();
        Global.backButton();
        Global.modal();
        Global.bodyMovin();
        Global.likeThisGrid();
        Global.trunk8();

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;

        // run on specific page
        if ( sPath == "/tag-one.html" ) {
            Global.filter();
        }

        if ( sPath == "/tag-two.html" ) {
            Global.autoTags();
        }

        if ( sPath == "/tag-three.html" ) {
            // console.log(sPath);
            // console.log('why-am-i-running');
            Global.reactionGrid();
            Global.reactionAnimation();
        }

        if ( sPath == "/tag-four.html" ) {
            Global.organicTagsGrid();
        }
        if ( sPath.indexOf('/tag-a') > 1 ) {
            // console.log('tab-a-ran');
            Global.filter();
            Global.optionalNote();
        }
        if ( sPath.indexOf('/tag-b') > 1 ) {
            // console.log('tab-b-ran');
            Global.reactionGrid();
            Global.reactionAnimation();
            Global.optionalNote();
        }

    }
}

// call this when the page first load when page load
call.firstInit();
call.init();
