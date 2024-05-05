// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

dayjs.extend(dayjs_plugin_isBetween);

const availability = [
    ['2024-05-02', '17:00', '19:00'],
    ['2024-05-03', '10:00', '12:00'],
];

function isOpenNow () {
    const now = dayjs();

    for(let i = 0; i < availability.length; i++) {
        const [day, start, end] = availability[i];
        const startTime = dayjs(`${day}T${start}+0200`);
        const endTime = dayjs(`${day}T${end}+0200`);
        if(now.isBetween(startTime, endTime)) {
            return true;
        }
    }

    return false;
}

function showAvailability () {
    if( isOpenNow()) {
        document.querySelector('.btn-call').classList.add('available-now');
    } else {
        document.querySelector('.btn-call').classList.remove('available-now');
    }
}

showAvailability();
setInterval(showAvailability, 60000);
