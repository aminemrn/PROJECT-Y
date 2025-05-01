var $ajaxUtils = (function() {
  return {
    sendGetRequest: function(url, callback, isJson) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      
      if (isJson) {
        xhr.responseType = 'json';
      }
      
      xhr.onload = function() {
        if (xhr.status === 200) {
          callback(xhr.response);
        }
      };
      
      xhr.send();
    }
  };
})();
