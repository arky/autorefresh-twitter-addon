var timer_started = false;
document.documentElement.addEventListener('DOMNodeInserted', function(e){
    if (active && !timer_started && document.getElementsByClassName("new-tweets-bar").length) {
	timer_started = true;
	setTimeout(function() {timer_started = false; document.getElementsByClassName('new-tweets-bar')[0].click();}, 2000);
    }
}, false);

