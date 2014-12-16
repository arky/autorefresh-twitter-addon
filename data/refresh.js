//TODO 
// Check if new-tweet-bar is present 
// If so, click it.

// Event listener
document.documentElement.addEventListener('DOMNodeInserted', function(e){
    if (document.getElementsByClassName("new-tweets-bar").length) {
       document.getElementsByClassName('new-tweets-bar')[0].click();
	console.log("Reloading fresh Tweets");
     }
}, false);


