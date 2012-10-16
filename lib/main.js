var data  = require("self").data;

// Match twitter.* pages 

var pageMod = require("page-mod");

pageMod.PageMod({
  include: "*.twitter.com",
  contentScriptFile: data.url("refresh.js")
});

