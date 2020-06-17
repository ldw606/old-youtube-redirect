const queryString = "?disable_polymer=1";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if(details.url.indexOf("?") == -1){
      return {
        redirectUrl: details.url + queryString
      };
    }else{
      return {}
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
