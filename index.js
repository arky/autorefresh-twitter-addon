var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
  id: "twitter-autorefresh",
  label: "Twitter Autorefresh",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: changed,
  badge: "",
  badgeColor: "#00AAA"
});

// Listens for twitter.com pages
pageMod.PageMod({
  include: "*.twitter.com",
  attachTo: ["existing", "top"],
  contentScriptWhen: 'end',
  contentScriptFile: self.data.url("refresh.js")
});

/*
// Toggle Addon 

function changed(state) {
  if (state.checked) {
    button.badgeColor = "#AA00AA";
    button.badge = "X";
    button.label = "Twitter Autorefresh (Paused)"
      if (typeof observer.disconnect == "function") { 
	  // Remove Mutation Observer 
	  observer.disconnect();
	  console.log("Twitter Autorefresh removed");
      }
}
  else {
    button.badgeColor = "#00AAA";
     button.badge = "";  
      if (typeof osberver.observer == "function"){
	  //Restart Mutation Observer 
	  observer.observe(document.body, config);
	  console.log("Twitter Autorefresh re-enabled");
	 }
}

};

*/
