(function ($) {
    $( document ).ready(function() {
        var $htmlBody = $('html, body'),
            $body = $('body'),
            $burger = $('.js-burger'),
            $menu = $('.js-header-menu'),
            $tweetBtn = $('.js-tweet'),
            $fbBtn = $('.js-fb'),
            themeUrl = window.location.origin;

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

            console.log(themeUrl + '/assets/img/landing.jpg');
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.shares',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': themeUrl,
                        'og:title': 'TESTS: Un kā tu rīkojies ar naudu?',
                        'og:site_name': 'Ienāc Kur mana alga?',
                        'og:description': 'Nosaki savu finanšu personības tipu!',
                        'og:image': themeUrl + '/assets/img/landing.jpg'
                    }
                })
            });
        });
    });
})(jQuery);