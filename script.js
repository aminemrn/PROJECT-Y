(function(global) {
  var app = {};
  var categories = ['L', 'D', 'SP', 'S']; // Example categories
  
  // Load home snippet with random specials
  function loadHome() {
    $ajaxUtils.sendGetRequest(
      'home-snippet.html',
      function(response) {
        var randomCategory = categories[Math.floor(Math.random() * categories.length)];
        var html = response.replace('{{randomCategoryShortName}}', randomCategory);
        document.getElementById('main-content').innerHTML = html;
      },
      false
    );
  }
  
  // Load menu items for a category
  app.loadMenuItems = function(category) {
    // In a real app, you would fetch actual menu items here
    var html = `<h2>Viewing Category ${category}</h2>
                <button onclick="loadHome()">Back Home</button>`;
    document.getElementById('main-content').innerHTML = html;
  };
  
  // Initialize
  document.addEventListener('DOMContentLoaded', loadHome);
  global.app = app;
})(window);
