document.documentElement.addEventListener('DOMNodeInserted', function(e){
    if (document.getElementsByClassName("new-tweets-bar").length) {
	document.getElementsByClassName('new-tweets-bar')[0].click();
    }
}, false);

