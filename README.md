# phonegap-inappbrowser-crosswalk
skelton of phonegap + inappbrowser + crosswalk

## commands
$ phonegap create hoge  
$ cd ./hoge  

$ phonegap platform add ios  
$ phonegap platform add android  
$ phonegap platform add browser  
$ phonegap platform list  
Installed platforms: android 4.1.1, browser 4.0.0, ios 3.9.2  
Available platforms: amazon-fireos, blackberry10, firefoxos, osx, webos  

$ phonegap plugin add cordova-plugin-inappbrowser  
// https://crosswalk-project.org/documentation/cordova.html  
$ phonegap plugin add cordova-plugin-crosswalk-webview  
$ phonegap plugin add https://github.com/Shoety/cordova-plugin-inappbrowserxwalk  
$ phonegap plugin list  
com.shoety.cordova.plugin.inappbrowserxwalk 0.3.3 "InAppBrowser Crosswalk"  
cordova-plugin-crosswalk-webview 1.5.0 "Crosswalk WebView Engine"  
cordova-plugin-inappbrowser 1.3.0 "InAppBrowser"  
cordova-plugin-whitelist 1.2.1 "Whitelist"  

// edit ./platforms/android/src/com/shoety/plugin/InAppBrowserXwalk.java  
-import org.xwalk.core.internal.XWalkViewInternal;  
-import org.xwalk.core.internal.XWalkCookieManager;  
+import org.xwalk.core.XWalkCookieManager;  

// edit ./www/js/index.js to open url with crosswalk  

$ phonegap build  

