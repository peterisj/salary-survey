var Slidenav = (function () {
    var debug = false;
    var prev = $('.slidenav__prev');
    var next = $('.slidenav__next');

    var checkDependencies = function () {
        if (!window.jQuery) {
            console.warn('Error: jQuery is not loaded');
            return
        }
    };

    var enable = function (elem) {
        if (elem.hasClass('u-disabled')) {
            elem.removeClass('u-disabled')
        }
    };

    var disable = function (elem) {
        if (!elem.hasClass('u-disabled')) {
            elem.addClass('u-disabled')
        }
    };

    return {
        enablePrev: function (boolean) {
            if (debug) console.info('Enabling Previous button', boolean)
            checkDependencies()
            if (boolean === true) {
                enable(prev)
            } else {
                disable(prev)
            }
        },

        enableNext: function (boolean) {
            if (debug) console.info('Enabling Next button', boolean)
            checkDependencies()
            if (boolean === true) {
                enable(next)
            } else {
                disable(next)
            }
        }
    }
})();
