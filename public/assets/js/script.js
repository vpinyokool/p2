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

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;
        console.log(sPath);
        // run on specific page
        if ( sPath == '/tag-one' ) {
            Global.filter();
        }

        if ( sPath == '/tag-two' ) {
            Global.autoTags();
        }

        if ( sPath == '/tag-three' ) {
            Global.reactionGrid();
            Global.reactionAnimation();
        }

        if ( sPath == '/tag-four' ) {

        }

    }
}

// call this when the page first load when page load
call.firstInit();
call.init();
