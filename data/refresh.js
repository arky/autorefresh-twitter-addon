document.documentElement.addEventListener('DOMNodeInserted', function(e){
    if (document.getElementsByClassName("new-tweets-bar").length) {
	var Ypos = window.scrollY;
	var Xpos = 0;
	console.log(Ypos);
       document.getElementsByClassName('new-tweets-bar')[0].click();
	console.log("Reloading fresh Tweets");
	window.scrollTo(Xpos,Ypos);
	console.log("Scrolling back to", Xpos, Ypos);
     }
}, false);


