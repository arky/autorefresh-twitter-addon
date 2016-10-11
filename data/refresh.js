var timer_active = false;
document.documentElement.addEventListener('DOMNodeInserted', function(e){
    if (!timer_active && document.getElementsByClassName("new-tweets-bar").length) {
	timer_active = true;
	setTimeout(function() {timer_active = false; document.getElementsByClassName('new-tweets-bar')[0].click();}, 2000);
    }
}, false);

