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
  badgeColor: "#00AAA"
});

// Listens for twitter.com pages
pageMod.PageMod({
  include: "*.twitter.com",
  attachTo: ["existing", "top"],
  contentScriptWhen: 'end',
  contentScriptFile: self.data.url("refresh.js")
});

