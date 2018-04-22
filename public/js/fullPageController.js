$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#myMenu',
        fixedElements: '#myMenu',
        //navigation: true,
        //navigationPosition: 'right'
    });
    $('#scrollWarn').slideUp({
        duration: 3500,
        easing: 'linear'
    });
});