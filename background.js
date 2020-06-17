const queryString = "disable_polymer=1";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if(details.url.indexOf("disable_polymer") > -1){
      //Don't infinitely redirect
      return {}
    }else if(details.url.indexOf("?") == -1){
      //Make a query string if one doesn't already exist
      return {
        redirectUrl: details.url + "?" + queryString
      };
    }else {
      //If a query string already exists add to the end
      return {
        redirectUrl: details.url + "&" + queryString
      };
    }
  },
  {
    urls: [
      "*://youtube.com/*",
      "*://www.youtube.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);
