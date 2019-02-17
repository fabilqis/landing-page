var deleteLog = false;

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        scrollingSpeed: 500,
        easing: 'swing',
        loopBottom: true,
            navigation: {
                'textColor': '#fff',
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': ['Menu', 'Intro', 'Insight', 'About']
            }
	});
});
