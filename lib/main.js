var contextMenu = require("sdk/context-menu");
var data = require("sdk/self").data;

var menuItem = contextMenu.Item({
    label: "Reload Dat Frame",
    context: contextMenu.SelectorContext("HTML"),
    contentScriptFile: data.url("reload.js")
});
