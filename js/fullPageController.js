$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#myMenu',
        fixedElements: '#myMenu',
        //navigation: true,
        //navigationPosition: 'right'
    });
    $('#scrollWarn').slideUp({
        duration: 2500,
        easing: 'linear'
    });
});