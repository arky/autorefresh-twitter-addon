var self  = require("sdk/self");
var pageMod = require("sdk/page-mod");

// Match all twitter pages 
pageMod.PageMod({
  include: "*.twitter.com",
  contentScriptFile: self.data.url("refresh.js")
});

