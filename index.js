var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var { ActionButton } = require("sdk/ui/button/action");

var button = ActionButton({
  id: "twitter-autorefresh",
  label: "Twitter Autorefresh",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  badge: "",
  badgeColor: "#00AAA",
  onClick: toggle_autorefresh
});

// Listens for twitter.com pages
pageMod.PageMod({
  include: "*.twitter.com",
  attachTo: ["existing", "top"],
  contentScriptWhen: 'end',
  contentScriptFile: self.data.url("refresh.js")
});

// Toggle autorefresh
var active = true;
function toggle_autorefresh(state) {
  if (active) {
    active = false;
    button.state("window", {
      label: "Twitter Autorefresh - Enable"
    });
  } else {
    active = true;
    button.state("window", {
      label: "Twitter Autorefresh - Disable"
    });
  }
}
