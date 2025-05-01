var $ajaxUtils = (function() {
  var module = {};

  module.sendGetRequest = function(url, callback, isJson) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    
    if (isJson) {
      request.setRequestHeader("Accept", "application/json");
    }
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        var response = isJson ? JSON.parse(request.responseText) : request.responseText;
        callback(response);
      }
    };
    
    request.send();
  };

  return module;
})();
