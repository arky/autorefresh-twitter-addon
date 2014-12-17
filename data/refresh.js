/* Old Event Listern Code

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


*/ 


// select the target node
var target = document.getElementsByClassName("new-tweets-bar");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
      if (document.getElementsByClassName("new-tweets-bar").length) {                                                                                           document.getElementsByClassName('new-tweets-bar')[0].click();                                                                                          console.log("Reloading fresh Tweets");      
       };           
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
 
// later, you can stop observing
//observer.disconnect();

