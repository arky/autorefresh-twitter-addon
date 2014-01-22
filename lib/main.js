var data  = require("sdk/self").data;

// Match twitter.* pages 

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.twitter.com",
  contentScriptFile: data.url("refresh.js")
});

