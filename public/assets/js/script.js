var call = {

    firstInit: function() {
        // run everywhere
        Global.states();
        Global.backButton();
        Global.likeThisGrid();
        Global.trunk8();
        Global.starGrid();
        Global.hearting();
        Global.streams();
        // Global.drag();
        Global.profileScroll(32);

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;

        if (sPath == 'string.html' || sPath == '/string/string.html' ) {
            // do something
        }
    }
}

// call this when the page first load when page load
call.firstInit();
call.init();