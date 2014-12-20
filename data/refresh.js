// select the target node
var target = document.querySelector("page-container");
//console.log(target);

// create an observer instance
var observer = new MutationObserver(function(mutations) {
   /*   if (document.getElementsByClassName("new-tweets-bar").length) {                                                                                           document.getElementsByClassName('new-tweets-bar')[0].click();                                                                                          console.log("Reloading fresh Tweets");      


    mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });   

*/

    mutations.forEach(function(mutation) {
// or use all mutation records is entirely up to you
      var entry = {
        mutation: mutation,
        el: mutation.target,
        value: mutation.target.textContent,
        oldValue: mutation.oldValue
      };
      console.log('Recording mutation:', entry);
     
   });
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(document.body, config);
 
// later, you can stop observing
//observer.disconnect();

