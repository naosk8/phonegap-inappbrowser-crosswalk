cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/com.shoety.cordova.plugin.inappbrowserxwalk/www/inappbrowserxwalk.js",
        "id": "com.shoety.cordova.plugin.inappbrowserxwalk.inAppBrowserXwalk",
        "pluginId": "com.shoety.cordova.plugin.inappbrowserxwalk",
        "clobbers": [
            "inAppBrowserXwalk"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-inappbrowser": "1.3.0",
    "com.shoety.cordova.plugin.inappbrowserxwalk": "0.3.3",
    "cordova-plugin-crosswalk-webview": "1.5.0"
}
// BOTTOM OF METADATA
});