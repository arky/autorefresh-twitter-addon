// select the target node
//var target = document.getElementsByClassName("new-tweets-bar");
//var target = document.getElementsByClassName("content-header");
//console.log(target);

// create an observer instance
var observer = new MutationObserver(function(mutations) {
      if (document.getElementsByClassName("new-tweets-bar").length) {                                                                                           document.getElementsByClassName('new-tweets-bar')[0].click();                                                                                          console.log("Reloading fresh Tweets");      
       };           
    console.log("Mutation Noticed");
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(document.body, config);
 
// later, you can stop observing
//observer.disconnect();

