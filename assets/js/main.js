(function ($) {
    $( document ).ready(function() {
        ScrollIndicator.init();

        var $burger = $('.js-burger'),
            $menu = $('.js-header-menu'),
            $tweetBtn = $('.js-tweet'),
            $fbBtn = $('.js-fb'),
            currentUrl = window.location.href,
            themeUrl = window.location.origin,
            metaFbTitle = 'TESTS: Kur palika mana alga?',
            metaFbName = 'Ferratum',
            metaFbDesc = 'Vai vari izdzīvot līdz mēneša beigām? Izpildi testu un noskaidro savu tērētāja tipu!',
            metaFbImg;

        /*fb sharing */

        if (currentUrl.indexOf('apdomeklis') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb/fb-1.png';
        } else if (currentUrl.indexOf('skerdeklis') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb/fb-2.png';
        } else if (currentUrl.indexOf('taupeklis') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb/fb-3.png';
        } else {
            metaFbImg = themeUrl + '/assets/img/fb/fb-0.png';
        }

        $burger.on('click', function (e) {
            e.preventDefault();
            $burger.toggleClass('burger--active');
            $menu.toggleClass('header__drop--active');
        });

        $tweetBtn.on('click', function () {
            var $this = $(this),
                link = $this.data('link');
            window.open(link, 'popupWindow', 'width=600, height=400, scrollbars=yes');
        });

        $fbBtn.on('click', function(e){
            e.preventDefault();
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.shares',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': themeUrl,
                        'og:title': metaFbTitle,
                        'og:site_name': metaFbName,
                        'og:description': metaFbDesc,
                        'og:image': metaFbImg
                    }
                })
            });
        });
    });
})(jQuery);


var ScrollIndicator = (function () {
    var progressBar = $('.scroll-indicator__bar');
    var debug = false;
    var value = 0;
    var max;
    var width;

    var getMax = function(){
        return $('.fp-section').length - 1
    };

    var getWidth = function(){
        // Calculate width in percentage
        width = (value/max) * 100;
        width = width + '%';
        return width;
    };

    var setWidth = function(){
        progressBar.css({ width: getWidth() });
    };

    return {
        init: function () {
            if (!window.jQuery) {
                console.warn('Error: jQuery is not loaded');
                return
            }
            if (debug) console.info('ScrollIndicator initialized');
            max = getMax()
        },
        update: function (section) {
            value = section;
            setWidth()
        }
    }
})();

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
            if (debug) console.info('Enabling Previous button', boolean);
            checkDependencies()
            if (boolean === true) {
                enable(prev)
            } else {
                disable(prev)
            }
        },

        enableNext: function (boolean) {
            if (debug) console.info('Enabling Next button', boolean);
            checkDependencies()
            if (boolean === true) {
                enable(next)
            } else {
                disable(next)
            }
        }
    }
})();