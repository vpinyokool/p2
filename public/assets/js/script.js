//////////////////////////////////////////////////////////////////////////////////////////
// Init function PushState
//////////////////////////////////////////////////////////////////////////////////////////

var call = {

    firstInit: function() {
        // run everywhere
        // Global.reveal();
        // Global.headroom();
        // Global.scrollMeta();
        Global.masonry();
        // Global.settings();
        // Global.dock();
        // Global.more();
        // Global.modal();
        Global.bodyMovin();

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
