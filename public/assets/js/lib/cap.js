$.fn.extend($, {
    capitalize: function() {
        return $.camelCase("-"+arguments[0]);
    }
});